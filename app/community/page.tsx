"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, User, X, Clock } from "react-feather";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

// Custom ShieldCheck Icon as it's not in react-feather
const ShieldCheck = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<any | null>(null);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [posts, setPosts] = useState<any[]>([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase.from("blogs").select("*").order('created_at', { ascending: false });
                if (data && data.length > 0) {
                    const formattedBlogs = data.map((b: any) => ({
                        id: b.id,
                        title: b.title,
                        excerpt: b.excerpt || b.summary || '',
                        content: b.content || '',
                        categories: b.categories || (b.category ? [b.category] : ['General']),
                        author: {
                            name: b.author_name || 'NavoYantra Team',
                            avatar: b.author_avatar || '',
                            isOfficial: true
                        },
                        publishedDate: b.created_at ? new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : (b.date || "Just now"),
                        readTime: b.read_time || '5 min read',
                        coverImage: b.cover_image || b.image_url || b.image || "/mobile-logo.webp",
                        tags: b.tags || []
                    }));
                    setPosts(formattedBlogs);
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(p => {
            if (p.tags && Array.isArray(p.tags)) {
                p.tags.forEach((t: string) => tags.add(t));
            }
        });
        return Array.from(tags);
    }, [posts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        let result = [...posts];
        if (selectedCategory !== null) {
            result = result.filter(p => 
                p.tags && p.tags.includes(selectedCategory)
            );
        }
        return result;
    }, [selectedCategory, posts]);

    return (
        <main className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-slate-900 pt-24">
            
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 text-center pt-10 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-wider uppercase mb-6 border border-purple-100">
                    <span className="text-lg leading-none">✨</span>
                    Navoyantra Knowledge & Robotics Hub
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a202c] tracking-tight leading-tight mb-6">
                    STEM & Robotics <br />Education Blog
                </h1>
                
                <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                    Insights, step-by-step tutorial guides, AI vision breakdowns, and school Atal Tinkering Lab setup articles written by STEM educators.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <button 
                        onClick={() => setIsSubmitModalOpen(true)}
                        className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-blue-500/30"
                    >
                        Submit Your Blog
                    </button>
                    <Link href="/" className="bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-8 py-3 rounded-full font-semibold text-sm transition-colors shadow-sm">
                        Go to Home Page
                    </Link>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 mb-12">
                {/* Tag Filters */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-4 text-xs scrollbar-hide">
                    <span className="font-bold text-slate-400 whitespace-nowrap mr-2">Filter Tags:</span>
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                            selectedCategory === null ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                        All Posts
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedCategory(tag)}
                            className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                                selectedCategory === tag ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
                <div className="w-full h-px bg-slate-200 mt-2 rounded-full mb-8" />

                {/* Articles Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                            <div
                                key={post.id}
                                onClick={() => setSelectedPost(post)}
                                className="rounded-3xl bg-white border border-slate-200/80 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group block"
                            >
                                <div>
                                    <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                                        <img
                                            src={post.coverImage || post.image_url || post.image || "/mobile-logo.webp"}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                            {(post.categories || []).map((cat: string) => (
                                                <span key={cat} className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-extrabold uppercase backdrop-blur-md">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-3">
                                        <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium">
                                            <Calendar className="w-3.5 h-3.5 text-blue-500" />
                                            <span>{post.publishedDate || post.date || "Just now"}</span>
                                            <span>•</span>
                                            <span>{post.readTime || "5 min read"}</span>
                                        </div>

                                        <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                                            {post.excerpt || post.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-1 pt-2">
                                            {post.tags && Array.isArray(post.tags) && post.tags.slice(0, 3).map((tag: string, i: number) => (
                                                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {post.author?.avatar ? (
                                            <img src={post.author.avatar} alt={post.author?.name} className={`w-7 h-7 rounded-full object-cover border ${post.author?.isOfficial ? 'border-blue-500' : 'border-slate-200'}`} />
                                        ) : (
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-blue-700 bg-blue-100 border ${post.author?.isOfficial ? 'border-blue-500' : 'border-slate-200'} text-[10px]`}>
                                                {post.author?.name ? post.author.name[0].toUpperCase() : 'N'}
                                            </div>
                                        )}
                                        <span className="text-xs font-bold text-slate-700 flex items-center space-x-1">
                                            <span>{post.author?.name || "NavoYantra Team"}</span>
                                            {(post.author?.isOfficial || true) && <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-blue-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                                        <span>Read</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center">
                        <p className="text-slate-500 font-semibold mb-4">No articles found in the database.</p>
                        <p className="text-sm text-slate-400">Add some posts from your Supabase Dashboard to see them here.</p>
                    </div>
                )}
            </div>

            {/* Modal Overlay for Reading */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-slate-900/40 backdrop-blur-sm">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative rounded-3xl animate-in fade-in zoom-in duration-200 overflow-hidden"
                    >
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        <div className="overflow-y-auto flex-1">
                            <div className="relative h-64 md:h-80 w-full bg-slate-900">
                                <img
                                    src={selectedPost.coverImage || selectedPost.image_url || selectedPost.image || "/mobile-logo.webp"}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {(selectedPost.categories || []).map((cat: string) => (
                                            <span key={cat} className="inline-block bg-blue-600 px-3 py-1 text-[10px] font-extrabold uppercase rounded-full">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                                        {selectedPost.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="flex items-center gap-6 text-sm font-semibold text-slate-500 border-b border-slate-100 pb-6">
                                    <span className="flex items-center gap-2">
                                        {selectedPost.author?.isOfficial && <ShieldCheck className="w-4 h-4 text-blue-600" />}
                                        {!selectedPost.author?.isOfficial && <User size={16} className="text-blue-600" />}
                                        {selectedPost.author?.name || "NavoYantra Team"}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        {selectedPost.publishedDate || selectedPost.date || "Just now"}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={16} />
                                        {selectedPost.readTime || "5 min read"}
                                    </span>
                                </div>

                                <div className="text-base text-slate-700 leading-relaxed whitespace-pre-wrap">
                                    {selectedPost.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Submit Blog Modal */}
            {isSubmitModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 w-full max-w-2xl animate-in zoom-in-95 duration-200">
                    <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold font-heading text-slate-900">Submit a Blog</h2>
                    <button onClick={() => setIsSubmitModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X className="w-5 h-5"/></button>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Blog submitted for admin approval!'); setIsSubmitModalOpen(false); }}>
                    <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Title</label>
                        <input type="text" required className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="My Awesome Project" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                        <select className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Community Projects</option>
                            <option>Robotics</option>
                            <option>IoT</option>
                        </select>
                        </div>
                        <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Author Name</label>
                        <input type="text" required className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Content</label>
                        <textarea required rows={5} className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your tutorial here..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">Submit for Review</button>
                    </form>
                </div>
                </div>
            )}
        </main>
    );
}
