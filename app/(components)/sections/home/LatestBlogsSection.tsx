"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "react-feather";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ShieldCheck = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export default function LatestBlogsSection() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase.from("blogs").select("*").order('created_at', { ascending: false }).limit(10);
                if (data && data.length > 0) {
                    const formattedBlogs = data.map((b: any) => ({
                        id: b.id,
                        title: b.title,
                        excerpt: b.excerpt || b.summary || '',
                        categories: b.categories || (b.category ? [b.category] : ['General']),
                        author: {
                            name: b.author_name || 'NavoYantra Team',
                            avatar: b.author_avatar || '',
                            isOfficial: true
                        },
                        publishedDate: b.created_at ? new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : (b.date || "Just now"),
                        readTime: b.read_time || '5 min read',
                        coverImage: b.cover_image || b.image_url || b.image || "/mobile-logo.webp"
                    }));
                    setPosts(formattedBlogs);
                }
            } catch (err) {
                console.error("Error fetching latest blogs:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading || posts.length === 0) return null;

    // Use duplicated list for seamless marquee
    const marqueePosts = [...posts, ...posts];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
            <style>{`
                @keyframes home-slide-train {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-home-slide-train {
                    animation: home-slide-train 50s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-home-slide-train:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">New Articles</span> & Insights
                    </h2>
                    <p className="text-slate-600 font-medium max-w-2xl">
                        Discover the latest trends in STEM education, robotics, AI, and comprehensive lab setups from our expert team.
                    </p>
                </div>
                <Link href="/community" className="hidden md:inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
                    View All <ArrowRight size={18} />
                </Link>
            </div>

            <div className="overflow-hidden w-full py-4 px-6 md:px-10">
                <div className="animate-home-slide-train gap-4 md:gap-6">
                    {marqueePosts.map((post, idx) => (
                        <div
                            key={`latest-${post.id}-${idx}`}
                            onClick={() => router.push('/community')}
                            className="w-[280px] md:w-[300px] lg:w-[320px] shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group block"
                        >
                            <div>
                                <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                                        {(post.categories || []).map((cat: string) => (
                                            <span key={cat} className="px-2 py-0.5 rounded-full bg-slate-900/80 text-white text-[9px] font-extrabold uppercase backdrop-blur-md">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 space-y-2.5">
                                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-medium">
                                        <Calendar className="w-3 h-3 text-blue-500" />
                                        <span>{post.publishedDate}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 pt-0 flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    {post.author?.avatar ? (
                                        <img src={post.author.avatar} alt={post.author?.name} className={`w-6 h-6 rounded-full object-cover border ${post.author?.isOfficial ? 'border-blue-500' : 'border-slate-200'}`} />
                                    ) : (
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-blue-700 bg-blue-100 border ${post.author?.isOfficial ? 'border-blue-500' : 'border-slate-200'} text-[9px]`}>
                                            {post.author?.name ? post.author.name[0].toUpperCase() : 'N'}
                                        </div>
                                    )}
                                    <span className="text-[11px] font-bold text-slate-700 flex items-center space-x-1">
                                        <span>{post.author?.name}</span>
                                        {post.author?.isOfficial && <ShieldCheck className="w-3 h-3 text-blue-500" />}
                                    </span>
                                </div>
                                <span className="text-[11px] font-bold text-blue-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                                    <span>Read</span>
                                    <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="md:hidden flex justify-center mt-8 px-6">
                <Link href="/community" className="w-full justify-center inline-flex items-center gap-2 font-bold text-blue-600 bg-blue-50 border border-blue-200 py-3 rounded-xl hover:bg-blue-100 transition-colors">
                    View All Articles <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
}
