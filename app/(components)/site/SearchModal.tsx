"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, ArrowRight, Layout, Mail, Info } from "react-feather";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const staticLinks = [
        { title: "Lab Setup Services", path: "/#lab-setup", icon: <Layout size={16} /> },
        { title: "About Us", path: "/#about", icon: <Info size={16} /> },
        { title: "Contact NavoYantra", path: "/contact", icon: <Mail size={16} /> },
        { title: "Community & Blogs", path: "/community", icon: <FileText size={16} /> }
    ];

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery("");
            setResults([]);
        }
    }, [isOpen]);

    useEffect(() => {
        const fetchResults = async () => {
            if (query.trim().length < 2) {
                setResults([]);
                return;
            }

            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from("blogs")
                    .select("id, title, cover_image, image_url, image")
                    .ilike("title", `%${query}%`)
                    .limit(5);

                if (data) {
                    setResults(data);
                }
            } catch (err) {
                console.error("Search error:", err);
            } finally {
                setLoading(false);
            }
        };

        const debounce = setTimeout(() => {
            fetchResults();
        }, 300);

        return () => clearTimeout(debounce);
    }, [query]);

    if (!isOpen) return null;

    const handleResultClick = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div 
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in slide-in-from-top-10 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="relative border-b border-slate-100 flex items-center">
                    <div className="pl-6 text-slate-400">
                        <Search size={24} />
                    </div>
                    <input 
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search blogs, services, or pages..."
                        className="w-full py-6 pl-4 pr-16 text-lg font-medium text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                    />
                    <button 
                        onClick={onClose}
                        className="absolute right-6 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Results Area */}
                <div className="max-h-[60vh] overflow-y-auto bg-slate-50 p-6">
                    {query.trim().length < 2 ? (
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {staticLinks.map((link, idx) => (
                                    <Link 
                                        key={idx} 
                                        href={link.path}
                                        onClick={handleResultClick}
                                        className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </div>
                                        <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-sm">{link.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                {loading ? "Searching..." : "Blog Results"}
                            </h3>
                            
                            {!loading && results.length === 0 ? (
                                <div className="text-center py-10">
                                    <p className="text-slate-500 font-medium">No results found for "{query}"</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {results.map((post) => (
                                        <Link 
                                            key={post.id}
                                            href="/community" 
                                            onClick={handleResultClick}
                                            className="flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group"
                                        >
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                                                <img 
                                                    src={post.cover_image || post.image_url || post.image || "/mobile-logo.webp"} 
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors line-clamp-1">{post.title}</h4>
                                                <span className="text-xs font-medium text-slate-500">Blog Article</span>
                                            </div>
                                            <div className="pr-4 text-slate-300 group-hover:text-blue-500 transition-colors group-hover:translate-x-1">
                                                <ArrowRight size={18} />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
