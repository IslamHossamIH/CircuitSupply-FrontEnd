"use client";

import { use } from "react"; // <-- import use
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data";
import { ArrowLeft, Check, ShoppingCart, Truck, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // <-- unwrap the promise
    const product = PRODUCTS.find((p) => p.id === Number(id)); // convert to number
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        addItem(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="container py-12 px-4 md:px-8">
            <Link href="/product" className="inline-flex items-center text-sm text-circuit-text-muted hover:text-circuit-green mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Product Image */}
                <div className="relative aspect-square bg-circuit-card border border-circuit-border rounded-2xl overflow-hidden group">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-8">
                    <div>
                        <div className="text-sm font-mono text-circuit-green mb-2">{product.category}</div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                        <div className="text-2xl font-bold text-circuit-blue">${product.price.toFixed(2)}</div>
                    </div>

                    <p className="text-circuit-text-muted leading-relaxed text-lg">
                        {product.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-circuit-border">
                        <Button size="lg" className="flex-1 text-base" onClick={handleAddToCart}>
                            {isAdded ? (
                                <>
                                    <Check className="w-5 h-5 mr-2" /> Added to Cart
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                                </>
                            )}
                        </Button>
                        <Button size="lg" variant="outline" className="flex-1 text-base">
                            Datasheet
                        </Button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center text-sm text-circuit-text-muted">
                            <Truck className="w-4 h-4 mr-2" /> Fast Shipping
                        </div>
                        <div className="flex items-center text-sm text-circuit-text-muted">
                            <Shield className="w-4 h-4 mr-2" /> 2 Year Warranty
                        </div>
                    </div>

                    {/* Specs */}
                    {product.specs && (
                        <div className="mt-8 border border-circuit-border rounded-xl overflow-hidden">
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-circuit-border">
                                    {product.specs.map((spec, index) => (
                                        <tr key={index} className="bg-circuit-bg/50">
                                            <td className="p-3 text-circuit-text-muted">{spec.label}</td>
                                            <td className="p-3 font-mono text-right">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
