import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "@/components/product/FilterSidebar";
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
                <FilterSidebar categoryFilter={categoryFilter} categories={CATEGORIES} />

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
