import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateWhatsAppOrderUrl } from "@/utils/whatsapp";
import { Trash2, ShoppingBag, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, itemCount } = useCart();
  
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    city: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name.trim() !== "" && formData.city.trim() !== "";

  const handleCheckout = () => {
    if (!isFormValid) return;
    
    const url = generateWhatsAppOrderUrl(items, formData);
    window.open(url, '_blank');
    // We optionally could clearCart() here, but better to let user keep it until order is confirmed on WA.
  };

  if (items.length === 0) {
    return (
      <Layout>
        <SEO title="Your Cart | PackFolio" />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8 text-lg">Looks like you haven't added any packaging supplies yet.</p>
          <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base">
            <Link href="/products">
              <ArrowLeft className="w-5 h-5 mr-2" /> Browse Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Your Cart | PackFolio" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Review Order</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-secondary/50 text-sm font-semibold text-muted-foreground border-b border-border/50">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Action</div>
              </div>
              
              <div className="divide-y divide-border/50">
                {items.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <div className="w-20 h-20 bg-secondary/30 rounded-xl overflow-hidden flex-shrink-0 border border-border/50">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground line-clamp-1">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Size: <span className="font-medium text-foreground">{item.selectedSize}</span></p>
                        <p className="text-xs text-primary mt-1 font-medium">{item.product.priceRange}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-3 w-full sm:w-auto flex justify-center">
                      <div className="flex items-center border border-border rounded-lg bg-background w-max">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - (item.quantity > 1000 ? 500 : 100))}
                          className="px-3 py-2 text-muted-foreground hover:bg-secondary transition-colors"
                        >
                          -
                        </button>
                        <span className="w-14 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + (item.quantity >= 1000 ? 500 : 100))}
                          className="px-3 py-2 text-muted-foreground hover:bg-secondary transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="col-span-3 w-full sm:w-auto flex justify-end">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-2 flex items-center gap-2 text-sm font-medium"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="sm:hidden">Remove</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-secondary/20 border-t border-border/50 flex justify-between items-center">
                <Button variant="ghost" className="text-muted-foreground hover:text-destructive" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/products">Add More Items</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary & Checkout Action */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg sticky top-32">
              <h3 className="text-xl font-display font-bold mb-6 pb-4 border-b border-border/50">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Total Items</span>
                  <span className="font-semibold text-foreground">{itemCount}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Estimated Total</span>
                  <span className="text-xs text-right max-w-[150px] leading-tight">Calculated on WhatsApp based on volume</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 text-sm mb-8">
                <strong>Note:</strong> Since B2B pricing depends on total volume and transport location, we finalize the exact quote on WhatsApp.
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full h-14 text-base rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-green-500/20 border-none group">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" /> Place Order on WhatsApp
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold text-primary">Almost there!</DialogTitle>
                    <DialogDescription className="text-base">
                      Please provide your details so we can generate a quote for transport.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="businessName">Business/Store Name (Optional)</Label>
                      <Input 
                        id="businessName" 
                        name="businessName" 
                        placeholder="e.g. Trends Fashion" 
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="city">Delivery City & State <span className="text-destructive">*</span></Label>
                      <Input 
                        id="city" 
                        name="city" 
                        placeholder="e.g. New Delhi, Delhi" 
                        value={formData.city}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea 
                        id="notes" 
                        name="notes" 
                        placeholder="Any specific requirement like custom print inquiry..." 
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="resize-none"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout} 
                    disabled={!isFormValid}
                    className="w-full h-14 text-base bg-[#25D366] hover:bg-[#1ebd5a] text-white"
                  >
                    Continue to WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogContent>
              </Dialog>
              
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
