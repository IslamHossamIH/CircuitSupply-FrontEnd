"use client";

import Link from "next/link";
import { Search, ShoppingCart, Cpu, Menu, User, LogIn } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/auth-provider";

import { useCart } from "@/components/cart-provider";

export function Navbar() {
    const { user } = useAuth();
    const { cartCount } = useCart();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-circuit-border bg-circuit-bg/80 backdrop-blur supports-[backdrop-filter]:bg-circuit-bg/60">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">

                {/* Logo Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <Cpu className="h-6 w-6 text-circuit-green" />
                        <span className="font-bold text-xl tracking-tight ml-2 text-circuit-text">
                            Circuit<span className="text-circuit-green">Supply</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {[
                            { name: "Products", href: "/product" },
                            { name: "About Us", href: "/aboutus" },
                            { name: "Contact", href: "/contact" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-circuit-text-muted hover:text-circuit-text transition-colors group"
                            >
                                {link.name}
                                <span className="absolute inset-x-0 -bottom-[19px] h-[2px] bg-circuit-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-2" />
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Actions Area */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="relative hidden lg:block w-[250px]">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-circuit-text-muted" />
                        <input
                            type="search"
                            placeholder="Search components..."
                            className="h-9 w-full rounded-md border border-circuit-border bg-circuit-card pl-9 pr-4 text-sm text-circuit-text placeholder:text-circuit-text-muted focus:border-circuit-green focus:outline-none focus:ring-1 focus:ring-circuit-green transition-all"
                        />
                    </div>

                    <div className="hidden sm:flex items-center space-x-2">
                        {user ? (
                            <Link href="/account">
                                <Button variant="ghost" size="sm" className="hidden sm:flex" title="My Account">
                                    <User className="h-4 w-4" />
                                </Button>
                            </Link>
                        ) : (
                            <Link href="/login">
                                <Button variant="ghost" size="sm" className="hidden sm:flex" title="Sign In">
                                    <LogIn className="h-4 w-4" />
                                </Button>
                            </Link>
                        )}
                        <ThemeToggle />
                    </div>

                    <div className="h-6 w-px bg-circuit-border hidden sm:block" />

                    <Link href="/cart">
                        <Button variant="ghost" size="sm" className="relative group">
                            <ShoppingCart className="h-5 w-5 group-hover:text-circuit-green transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-circuit-green text-[10px] font-bold text-circuit-bg animate-in zoom-in">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle (Placeholder for now) */}
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
