"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/auth-provider";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        setTimeout(() => {
            // Mock login - take email as name logic
            const name = email.split('@')[0];
            login(email, name); // This handles redirect
        }, 1000);
    };

    return (
        <div className="min-h-screen flex bg-circuit-bg">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
                <div className="absolute top-8 left-8">
                    <Link href="/" className="text-circuit-text-muted hover:text-circuit-text flex items-center transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Store
                    </Link>
                </div>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-circuit-card border border-circuit-border mb-4">
                            <Cpu className="w-6 h-6 text-circuit-green" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                        <p className="text-circuit-text-muted mt-2">Sign in to your account</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-circuit-text">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="engineer@example.com"
                                className="w-full h-11 rounded-md border border-circuit-border bg-circuit-card px-3 text-sm text-circuit-text focus:border-circuit-green focus:outline-none focus:ring-1 focus:ring-circuit-green transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium text-circuit-text">Password</label>
                                <a href="#" className="text-xs text-circuit-green hover:underline">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full h-11 rounded-md border border-circuit-border bg-circuit-card px-3 text-sm text-circuit-text focus:border-circuit-green focus:outline-none focus:ring-1 focus:ring-circuit-green transition-all"
                            />
                        </div>

                        <Button variant="default" className="w-full h-11 text-base" disabled={isSubmitting}>
                            {isSubmitting ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        <span className="text-circuit-text-muted">New to CircuitSupply? </span>
                        <Link href="/register" className="font-semibold text-circuit-green hover:underline">
                            Create account
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-circuit-card border-l border-circuit-border relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-circuit-green/5 to-circuit-blue/5"></div>
                <div className="relative z-10 max-w-md text-center p-12">
                    <div className="mb-8 relative mx-auto w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 border border-circuit-green/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 border border-circuit-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        <Cpu className="w-24 h-24 text-circuit-text-muted" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Engineer Grade Components</h2>
                    <p className="text-circuit-text-muted">Access thousands of verified parts for your next embedded project.</p>
                </div>
            </div>
        </div>
    );
}
