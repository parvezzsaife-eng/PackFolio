import { useState } from "react";
import { useRoute } from "wouter";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { getProductById, getProductsByCategory, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ProductCard } from "@/components/ProductCard";
import { generateBulkInquiryUrl } from "@/utils/whatsapp";
import { Package, ShieldCheck, Truck, ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import NotFound from "./not-found";

export default function ProductDetailPage() {
  const [match, params] = useRoute("/products/:categoryId/:productId");
  const product = match ? getProductById(params.productId) : null;
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState<number>(product?.moq || 100);

  if (!product) {
    return <NotFound />;
  }

  // Related products
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const activeCategory = categories.find(c => c.id === product.categoryId);

  const handleAddToCart = () => {
    if (quantity < product.moq) {
      toast({
        title: "Minimum Order Quantity not met",
        description: `The MOQ for this product is ${product.moq} pieces.`,
        variant: "destructive"
      });
      return;
    }

    addToCart(product, selectedSize || product.sizes[0], quantity);
    
    toast({
      title: "Added to Cart!",
      description: `${quantity}x ${product.name} (${selectedSize}) added to your cart.`,
      className: "bg-success text-success-foreground border-none"
    });
  };

  return (
    <Layout>
      <SEO 
        title={`${product.name} | PackFolio`} 
        description={product.description} 
      />
      
      <div className="bg-secondary/20 py-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => window.history.back()} className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery (Simplified to single large image for now) */}
          <div className="bg-secondary/30 rounded-3xl overflow-hidden border border-border/50 aspect-square relative flex items-center justify-center p-8">
             <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply"
            />
            {product.tags.includes('bestseller') && (
              <Badge className="absolute top-6 left-6 bg-accent text-white text-sm px-3 py-1">
                Bestseller
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                {product.type}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-4 mb-4">
              {product.name}
            </h1>
            
            <div className="text-2xl font-bold text-primary mb-6">
              {product.priceRange}
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Selection Areas */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm mb-8 space-y-8">
              
              {/* Sizes */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">Select Size</h3>
                  <span className="text-xs text-muted-foreground">Dimensions in inches</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl border font-medium text-sm transition-all ${
                        selectedSize === size 
                          ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' 
                          : 'border-border hover:border-primary/30 text-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                 <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">Quantity</h3>
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">MOQ: {product.moq} pcs</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-xl bg-background overflow-hidden">
                    <button 
                      onClick={() => setQuantity(Math.max(product.moq, quantity - (quantity > 1000 ? 500 : 100)))}
                      className="px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                      disabled={quantity <= product.moq}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) setQuantity(val);
                      }}
                      className="w-20 text-center font-semibold text-lg focus:outline-none bg-transparent"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + (quantity >= 1000 ? 500 : 100))}
                      className="px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                onClick={handleAddToCart} 
                size="lg" 
                className="flex-1 h-14 text-base rounded-xl shadow-lg shadow-primary/20"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="flex-1 h-14 text-base rounded-xl border-2 hover:bg-secondary"
              >
                <a href={generateBulkInquiryUrl()} target="_blank" rel="noopener noreferrer">
                  Contact for Bulk Rate
                </a>
              </Button>
            </div>

            {/* Features/Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border/50">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Nationwide Transport</h4>
                  <p className="text-xs text-muted-foreground">Ships via safe logistics partners</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Factory Direct</h4>
                  <p className="text-xs text-muted-foreground">Authorized wholesale vendor</p>
                </div>
              </div>
              {product.features && product.features.map((feat, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">{feat}</h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary/20 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold mb-8">More in {activeCategory?.name || 'this category'}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(rp => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

    </Layout>
  );
}
