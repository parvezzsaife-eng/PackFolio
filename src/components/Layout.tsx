import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, X, Package, ShieldCheck, ChevronRight, Phone, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { config } from "@/config";
import { Button } from "@/components/ui/button";

function Header() {
  const [location] = useLocation();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Custom Packaging", path: "/custom-packaging" },
    { label: "Bulk Inquiry", path: "/bulk-inquiry" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-display font-bold text-primary tracking-tight">Pack<span className="text-accent">Folio</span></span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold -mt-1 hidden sm:block">B2B Packaging</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location === link.path ? "text-primary font-semibold" : "text-gray-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white border-none rounded-full px-4 h-9 text-sm font-semibold hidden sm:flex items-center gap-2">
              <a href={`https://wa.me/${config.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </Button>
            <Link href="/cart" className="relative group p-2">
              <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in shadow-md">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-secondary/50 rounded-xl text-foreground font-medium flex justify-between items-center"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pt-2">
          <h3 className="text-white font-semibold mb-4 text-lg">Our Location</h3>
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: "220px" }}>
            <iframe
              title="PackFolio Location - Meerut, UP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754101563!3d28.52728034322222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6563462da9ef%3A0xb82b58df18dea30f!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map API key: config.GOOGLE_MAPS_API_KEY */}
          </div>
          <p className="text-sm mt-3 text-background/60 flex items-center gap-2">
            <span>📍</span> Meerut, Uttar Pradesh, India
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">Pack<span className="text-accent">Folio</span></span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {config.COMPANY_TAGLINE}. We provide premium B2B packaging solutions tailored for eCommerce sellers.
            </p>
            <div className="flex items-center gap-2 text-sm bg-white/5 p-3 rounded-lg border border-white/10 mt-8 w-fit max-w-full">
              <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <a href="https://euphoriapackaging.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <span className="font-medium text-white">{config.AUTHORIZED_VENDOR}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/courier-bags" className="hover:text-white transition-colors">Courier Bags</Link></li>
              <li><Link href="/products/bubble-mailers" className="hover:text-white transition-colors">Bubble Mailers</Link></li>
              <li><Link href="/products/corrugated-boxes" className="hover:text-white transition-colors">Corrugated Boxes</Link></li>
              <li><Link href="/products/thermal-rolls" className="hover:text-white transition-colors">Thermal Rolls</Link></li>
              <li><Link href="/products/tapes-accessories" className="hover:text-white transition-colors">Tapes & Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-full mt-1">
                <Link href={`tel:+91${config.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                  </Link>
                </div>
                <div>
                  <Link href={`tel:+91${config.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +91 {config.WHATSAPP_NUMBER}
                  </Link>
                  <p className="text-xs">{config.WORKING_HOURS}</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Location:</span>
                <span>{config.COMPANY_LOCATION}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Email:</span>
                <Link href={`mailto:${config.EMAIL}`} className="hover:text-white transition-colors">
                  <span>{config.EMAIL}</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} {config.COMPANY_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> for eCommerce Sellers
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
