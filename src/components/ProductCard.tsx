import { useState } from "react";
import { Link } from "wouter";
import { type Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(product.moq);
  const { addToCart } = useCart();
  const { toast } = useToast();
  // Extract main image or use placeholder
  const imageSrc = product.image;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0], quantity);
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} added.`,
    });
  };

  return (
    <div className="group flex flex-col bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
      
      {/* Image Section */}
      <Link href={`/products/${product.categoryId}/${product.id}`} className="relative aspect-[4/3] bg-secondary/30 overflow-hidden block">
        <img 
          src={imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 items-start">
          {product.tags.includes('bestseller') && (
            <Badge variant="default" className="bg-accent text-white hover:bg-accent border-none shadow-sm">
              Bestseller
            </Badge>
          )}
          {product.tags.includes('amazon-sellers') && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-none shadow-sm text-[10px]">
              Amazon Approved
            </Badge>
          )}
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
          {product.type}
        </div>
        
        <Link href={`/products/${product.categoryId}/${product.id}`}>
          <h3 className="font-display font-semibold text-lg text-foreground mb-1 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
          <span className="text-primary text-xs font-medium mb-3 inline-block hover:underline">View Details →</span>
        </Link>
        
        <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
          <ShoppingBag className="w-4 h-4" />
          <span>MOQ: <strong className="text-foreground">{product.moq} pcs</strong></span>
        </div>

        <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Starting from</p>
              <p className="font-bold text-primary">{product.priceRange.split(' ')[0]}</p>
            </div>
            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
              <button 
                type="button"
                onClick={() => setQuantity(Math.max(product.moq, quantity - 50))}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-background transition-colors text-foreground"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-semibold w-8 text-center">{quantity}</span>
              <button 
                type="button"
                onClick={() => setQuantity(quantity + 50)}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-background transition-colors text-foreground"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <Button onClick={handleAddToCart} className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
