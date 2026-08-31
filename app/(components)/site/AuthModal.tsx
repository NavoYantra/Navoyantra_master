"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRight, AlertCircle, X, User } from "react-feather";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "@/lib/supabase";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    if (!isOpen) return null;

    const resetState = () => {
        setError(null);
        setSuccess(false);
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        resetState();
    };

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        resetState();

        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
            } else {
                onClose();
            }
        } else {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    }
                }
            });

            if (error) {
                setError(error.message);
            } else {
                setSuccess(true);
            }
        }
        setLoading(false);
    };

    const handleGoogleAuth = async () => {
        setLoading(true);
        resetState();
        
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: typeof window !== "undefined" ? window.location.origin : "",
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
                className="bg-[#0b1121] rounded-3xl border border-white/10 shadow-2xl w-full max-w-md p-8 md:p-10 relative animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-8">
                    <span className="inline-block bg-white text-[#0b1121] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                        {isLogin ? "Welcome Back" : "Get Started"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-white mb-2">
                        {isLogin ? "Sign in to your account" : "Create an account"}
                    </h2>
                    <p className="text-slate-400 text-sm">
                        {isLogin ? "Enter your email and password to access your dashboard." : "Join NavoYantra to access premium features."}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-sm p-4 rounded-xl flex items-center gap-3 mb-6">
                        <AlertCircle size={18} />
                        <span>{error}</span>
                    </div>
                )}
                
                {success ? (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-500 p-6 rounded-xl text-center space-y-4">
                        <h3 className="text-lg font-bold">Check your email!</h3>
                        <p className="text-sm">We've sent a verification link to <strong>{email}</strong>. Please verify your email to continue.</p>
                        <button 
                            onClick={() => {setSuccess(false); setIsLogin(true);}}
                            className="inline-block mt-2 bg-green-500/20 text-green-400 px-6 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors"
                        >
                            Go to Login
                        </button>
                    </div>
                ) : (
                    <>
                        <form onSubmit={handleAuth} className="space-y-4">
                            {!isLogin && (
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-300 ml-1">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                            <User size={16} />
                                        </span>
                                        <input 
                                            type="text" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required={!isLogin}
                                            className="w-full bg-[#151e32] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-300 ml-1">Email Address</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        <Mail size={16} />
                                    </span>
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-[#151e32] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between ml-1">
                                    <label className="text-xs font-bold text-slate-300">Password</label>
                                    {isLogin && <a href="#" className="text-[10px] text-blue-500 hover:text-blue-400 transition-colors">Forgot password?</a>}
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        <Lock size={16} />
                                    </span>
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={isLogin ? 1 : 6}
                                        className="w-full bg-[#151e32] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90 text-white font-bold py-3.5 rounded-xl transition-opacity flex items-center justify-center gap-2 mt-4"
                            >
                                {loading ? (isLogin ? "Signing in..." : "Creating account...") : (
                                    <>
                                        {isLogin ? "Sign In" : "Sign Up"} <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="relative flex items-center py-6">
                            <div className="flex-grow border-t border-white/10"></div>
                            <span className="flex-shrink-0 mx-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Or continue with</span>
                            <div className="flex-grow border-t border-white/10"></div>
                        </div>

                        <button
                            onClick={handleGoogleAuth}
                            disabled={loading}
                            className="w-full bg-[#151e32] hover:bg-white/10 border border-white/5 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-3"
                        >
                            <FcGoogle size={20} />
                            <span>Sign in with Google</span>
                        </button>
                    </>
                )}

                <p className="text-center mt-8 text-xs text-slate-400 font-medium">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button 
                        onClick={toggleMode}
                        className="text-white font-bold hover:text-blue-400 transition-colors"
                    >
                        {isLogin ? "Sign up" : "Sign in"}
                    </button>
                </p>
            </div>
        </div>
    );
}
