import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

const CATEGORIES = [
    "Microcontrollers",
    "Sensors",
    "Modules",
    "Components",
    "Tools",
    "Kits",
    "Power Supplies"
];

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const params = await searchParams;
    const categoryFilter = params.category;

    const filteredProducts = categoryFilter
        ? PRODUCTS.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
        : PRODUCTS;

    return (
        <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 space-y-8 h-fit md:sticky md:top-24">
                    <div className="flex items-center space-x-2 pb-4 border-b border-circuit-border">
                        <SlidersHorizontal className="w-5 h-5 text-circuit-green" />
                        <span className="font-bold text-lg">Filters</span>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-4 font-semibold text-circuit-text">Categories</h3>
                        <div className="space-y-2">
                            <a href="/product" className={`block text-sm ${!categoryFilter ? 'text-circuit-green font-bold' : 'text-circuit-text-muted hover:text-circuit-green'}`}>
                                All Products
                            </a>
                            {CATEGORIES.map((cat) => (
                                <a
                                    key={cat}
                                    href={`/product?category=${cat}`}
                                    className={`block text-sm ${categoryFilter === cat ? 'text-circuit-green font-bold' : 'text-circuit-text-muted hover:text-circuit-green'}`}
                                >
                                    {cat}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Applications (New) */}
                    <div>
                        <h3 className="mb-4 font-semibold text-circuit-text">Application</h3>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2 text-sm text-circuit-text-muted hover:text-circuit-green cursor-pointer">
                                <input type="checkbox" className="rounded border-circuit-border bg-circuit-card text-circuit-green focus:ring-circuit-green" />
                                <span>Prototyping</span>
                            </label>
                            <label className="flex items-center space-x-2 text-sm text-circuit-text-muted hover:text-circuit-green cursor-pointer">
                                <input type="checkbox" className="rounded border-circuit-border bg-circuit-card text-circuit-green focus:ring-circuit-green" />
                                <span>Industrial</span>
                            </label>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <h3 className="mb-4 font-semibold text-circuit-text">Price Range</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="relative w-full">
                                    <span className="absolute left-2 top-1.5 text-xs text-circuit-text-muted">$</span>
                                    <input type="number" placeholder="0" className="w-full rounded bg-circuit-card border border-circuit-border pl-5 pr-2 py-1 text-sm outline-none focus:border-circuit-green" />
                                </div>
                                <span className="text-circuit-text-muted">-</span>
                                <div className="relative w-full">
                                    <span className="absolute left-2 top-1.5 text-xs text-circuit-text-muted">$</span>
                                    <input type="number" placeholder="1000" className="w-full rounded bg-circuit-card border border-circuit-border pl-5 pr-2 py-1 text-sm outline-none focus:border-circuit-green" />
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Apply</Button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Electronics Products</h1>
                        <div className="text-sm text-circuit-text-muted">
                            Showing {filteredProducts.length} results
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-dashed border-circuit-border rounded-lg text-circuit-text-muted">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
