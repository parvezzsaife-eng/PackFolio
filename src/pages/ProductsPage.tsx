import { useState, useMemo } from "react";
import { Link, useRoute } from "wouter";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, PackageOpen } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function ProductsPage() {
  const [match, params] = useRoute("/products/:categoryId");
  const categoryId = match ? params.categoryId : null;

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const allTags = ["amazon-sellers", "flipkart-sellers", "meesho-sellers", "eco-friendly", "heavy-duty"];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
    setSelectedSizes([]);
    setSelectedTypes([]);
    window.history.pushState({}, '', '/products');
  };

  const hasActiveFilters = selectedTags.length > 0 || selectedSizes.length > 0 || selectedTypes.length > 0;

  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by Category
    if (categoryId) {
      result = result.filter(p => p.categoryId === categoryId);
    }
    
    // Filter by Tags
    if (selectedTags.length > 0) {
      result = result.filter(p => selectedTags.some(tag => p.tags.includes(tag)));
    }

    // Filter by Sizes
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(size => selectedSizes.includes(size)));
    }

    // Filter by Types
    if (selectedTypes.length > 0) {
      result = result.filter(p => selectedTypes.includes(p.type));
    }
    
    return result;
  }, [categoryId, selectedTags, selectedSizes, selectedTypes]);

  const availableSizes = useMemo(() => {
    let baseProducts = products;
    if (categoryId) {
      baseProducts = baseProducts.filter(p => p.categoryId === categoryId);
    }
    const sizes = new Set<string>();
    baseProducts.forEach(p => p.sizes.forEach(s => sizes.add(s)));
    return Array.from(sizes);
  }, [categoryId]);

  const availableTypes = useMemo(() => {
    let baseProducts = products;
    if (categoryId) {
      baseProducts = baseProducts.filter(p => p.categoryId === categoryId);
    }
    const types = new Set<string>();
    baseProducts.forEach(p => types.add(p.type));
    return Array.from(types);
  }, [categoryId]);

  const activeCategory = categoryId ? categories.find(c => c.id === categoryId) : null;
  const pageTitle = activeCategory ? `${activeCategory.name} | PackFolio` : "All Packaging Products | PackFolio";

  const FiltersContent = () => (
    <div className="space-y-8">
      {hasActiveFilters && (
        <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50" onClick={clearAllFilters}>
          Clear All Filters
        </Button>
      )}

      <div>
        <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
        <div className="flex flex-col gap-2">
          <Link 
            href="/products" 
            className={`text-sm py-1.5 px-3 rounded-lg transition-colors ${!categoryId ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary'}`}
          >
            All Products
          </Link>
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              href={`/products/${cat.id}`}
              className={`text-sm py-1.5 px-3 rounded-lg transition-colors ${categoryId === cat.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary'}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-foreground">Filter by Use Case</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Badge 
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-primary' : 'hover:bg-secondary'}`}
              onClick={() => toggleTag(tag)}
            >
              {tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Badge>
          ))}
        </div>
      </div>

      {availableSizes.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Filter by Size</h3>
          <div className="flex flex-wrap gap-2">
            {availableSizes.map(size => (
              <Badge 
                key={size}
                variant={selectedSizes.includes(size) ? "default" : "outline"}
                className={`cursor-pointer ${selectedSizes.includes(size) ? 'bg-primary' : 'hover:bg-secondary'}`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {availableTypes.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Filter by Type</h3>
          <div className="flex flex-wrap gap-2">
            {availableTypes.map(type => (
              <Badge 
                key={type}
                variant={selectedTypes.includes(type) ? "default" : "outline"}
                className={`cursor-pointer ${selectedTypes.includes(type) ? 'bg-primary' : 'hover:bg-secondary'}`}
                onClick={() => toggleType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Layout>
      <SEO title={pageTitle} />
      
      <div className="bg-secondary/30 border-b border-border/50 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {activeCategory ? activeCategory.name : "All Products"}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {activeCategory 
              ? activeCategory.description 
              : "Browse our complete catalog of premium B2B packaging materials."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-2 text-lg font-display font-bold">
                  <SlidersHorizontal className="w-5 h-5" /> Filters
                </div>
                <span className="text-xs text-muted-foreground font-medium bg-secondary px-2 py-1 rounded-full">{filteredProducts.length}</span>
              </div>
              <FiltersContent />
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex justify-between items-center">
              <p className="text-sm text-muted-foreground font-medium">
                Showing {filteredProducts.length} products
              </p>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader className="mb-6">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <FiltersContent />
                </SheetContent>
              </Sheet>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
                <PackageOpen className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or category selection.</p>
                <Button onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}