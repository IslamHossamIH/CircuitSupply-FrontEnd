import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import {
    getProductsForFrontend,
    categoryApi,
    productApi,
    normalizeSpecs,
} from "@/lib/api";
import type { Product } from "@/lib/api";

function getImageUrl(path?: string | null): string {
    if (!path) return "";
    const API_BASE_URL =
        process.env.NEXT_PUBLIC_API_URL || "https://localhost:5000";

    if (path.startsWith("http")) {
        return path
            .replace("http://localhost:5001", API_BASE_URL)
            .replace("https://localhost:5000", API_BASE_URL);
    }

    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    return `${API_BASE_URL}/${cleanPath}`;
}

// --- FIXED: searchParams SHOULD NOT be a Promise ---
export default async function ProductsPage({
    searchParams,
}: {
    searchParams: { category?: string; minPrice?: string; maxPrice?: string; search?: string };
}) {
    const categoryFilter = searchParams.category;
    const minPrice = searchParams.minPrice ? parseFloat(searchParams.minPrice) : undefined;
    const maxPrice = searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : undefined;
    const searchQuery = searchParams.search;

    let filteredProducts: Product[] = [];
    let categories: string[] = [];

    // SEARCH MODE
    if (searchQuery?.trim()) {
        try {
            const [searchResult, categoryData] = await Promise.all([
                productApi.search(searchQuery.trim()),
                categoryApi.getAll(),
            ]);

            const categoryMap = new Map(categoryData.map((c) => [c.id, c.name]));
            categories = categoryData.map((c) => c.name);

            filteredProducts = (searchResult.responseObj || []).map((p) => ({
                id: p.id,
                name: p.name,
                price: p.price,
                category: categoryMap.get(p.categoryId) || "Unknown",
                image: getImageUrl(p.imageUrl),
                description: p.description,
                stock: p.stock,
                specs: normalizeSpecs(p.specs),
            })) as Product[];
        } catch (err) {
            console.error("Search failed:", err);
            filteredProducts = [];
            const categoryData = await categoryApi.getAll();
            categories = categoryData.map((c) => c.name);
        }
    }
    // DEFAULT PRODUCT LIST
    else {
        const [products, categoryData] = await Promise.all([
            getProductsForFrontend(),
            categoryApi.getAll(),
        ]);

        categories = categoryData.map((c) => c.name);
        filteredProducts = [...products];

        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(
                (p) => p.category?.toLowerCase() === categoryFilter.toLowerCase()
            );
        }

        if (minPrice !== undefined) {
            filteredProducts = filteredProducts.filter((p) => p.price >= minPrice);
        }

        if (maxPrice !== undefined) {
            filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice);
        }
    }

    return (
        <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <FilterSidebar categoryFilter={categoryFilter} categories={categories} />

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
