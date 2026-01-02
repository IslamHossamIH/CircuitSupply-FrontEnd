"use client";

import { Button } from "@/components/ui/Button";
import { Package, Settings, CreditCard, LogOut, MapPin, Plus } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-provider";

export default function AccountPage() {
    const { user, logout, isLoading } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("orders");

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login");
        }
    }, [user, isLoading, router]);

    if (!user) return null;

    const renderContent = () => {
        switch (activeTab) {
            case "orders":
                return (
                    <div className="space-y-6 animate-in fade-in">
                        <h2 className="text-2xl font-bold">Order History</h2>
                        <div className="bg-circuit-card border border-circuit-border rounded-lg overflow-hidden">
                            <div className="p-4 border-b border-circuit-border bg-circuit-bg/50 flex justify-between items-center">
                                <div>
                                    <span className="font-mono text-xs text-circuit-text-muted">ORDER #</span>
                                    <span className="font-mono font-bold ml-1">CS-92842</span>
                                </div>
                                <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                                    Delivered
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-circuit-bg rounded border border-circuit-border flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full border border-circuit-green/30" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Raspberry Pi 5 - 8GB RAM</div>
                                        <div className="text-sm text-circuit-text-muted">Qty: 1 • $85.00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-circuit-border">
                                    <div className="text-sm text-circuit-text-muted">Placed on Jan 2, 2026</div>
                                    <Button variant="outline" size="sm">Track Order</Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-circuit-card border border-circuit-border rounded-lg overflow-hidden opacity-75">
                            <div className="p-4 border-b border-circuit-border bg-circuit-bg/50 flex justify-between items-center">
                                <div>
                                    <span className="font-mono text-xs text-circuit-text-muted">ORDER #</span>
                                    <span className="font-mono font-bold ml-1">CS-88123</span>
                                </div>
                                <div className="inline-flex items-center px-2 py-1 rounded-full bg-circuit-text-muted/10 text-circuit-text-muted text-xs font-medium">
                                    Archived
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-circuit-bg rounded border border-circuit-border flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full border border-circuit-green/30" />
                                    </div>
                                    <div>
                                        <div className="font-medium">ESP32-S3-DevKitC-1</div>
                                        <div className="text-sm text-circuit-text-muted">Qty: 5 • $14.50 ea</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-circuit-border">
                                    <div className="text-sm text-circuit-text-muted">Placed on Dec 15, 2025</div>
                                    <Button variant="outline" size="sm">View Invoice</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "addresses":
                return (
                    <div className="space-y-6 animate-in fade-in">
                        <h2 className="text-2xl font-bold">Saved Addresses</h2>
                        <div className="p-8 text-center border border-circuit-border border-dashed rounded-lg text-circuit-text-muted">
                            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Manage your shipping and billing addresses here.</p>
                        </div>
                    </div>
                );
            case "payment":
                return (
                    <div className="space-y-6 animate-in fade-in">
                        <h2 className="text-2xl font-bold">Payment Methods</h2>
                        <div className="p-8 text-center border border-circuit-border border-dashed rounded-lg text-circuit-text-muted">
                            <CreditCard className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Manage your saved cards and payment options here.</p>
                        </div>
                    </div>
                );
            case "settings":
                return (
                    <div className="space-y-6 animate-in fade-in">
                        <h2 className="text-2xl font-bold">Account Settings</h2>
                        <div className="p-8 text-center border border-circuit-border border-dashed rounded-lg text-circuit-text-muted">
                            <Settings className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Update your profile and account preferences.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Account</h1>

            <div className="grid md:grid-cols-[240px_1fr] gap-8">
                <aside className="space-y-2">
                    <Button
                        variant={activeTab === "orders" ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                        onClick={() => setActiveTab("orders")}
                    >
                        <Package className="w-4 h-4" />
                        Orders
                    </Button>
                    <Button
                        variant={activeTab === "addresses" ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                        onClick={() => setActiveTab("addresses")}
                    >
                        <MapPin className="w-4 h-4" />
                        Addresses
                    </Button>
                    <Button
                        variant={activeTab === "payment" ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                        onClick={() => setActiveTab("payment")}
                    >
                        <CreditCard className="w-4 h-4" />
                        Payment Methods
                    </Button>
                    <Button
                        variant={activeTab === "settings" ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                        onClick={() => setActiveTab("settings")}
                    >
                        <Settings className="w-4 h-4" />
                        Settings
                    </Button>

                    <div className="pt-4 mt-4 border-t border-circuit-border">
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                            onClick={() => logout()}
                        >
                            <LogOut className="w-4 h-4" />
                            Log Out
                        </Button>
                    </div>
                </aside>

                <main className="min-h-[500px]">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
