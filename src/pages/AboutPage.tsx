import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { config } from "@/config";
import { generateBulkInquiryUrl } from "@/utils/whatsapp";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Zap, MapPin, Phone, Mail, Package, Award, Users, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About Us | PackFolio - Packaging Supplier in Meerut"
        description="Learn about PackFolio — authorized vendor of Euphoria Packaging Pvt. Ltd., based in Meerut, UP. Supplying B2B packaging to Amazon, Flipkart & Meesho sellers across India."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 text-accent" />
            {config.AUTHORIZED_VENDOR}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About PackFolio
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted B2B packaging partner based in Meerut, Uttar Pradesh — serving eCommerce sellers across India since day one.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "2,000+", label: "Sellers Trust Us" },
              { icon: Package, value: "50+", label: "Products in Catalog" },
              { icon: Award, value: "10+", label: "Years Experience" },
              { icon: Star, value: "4.8★", label: "Average Rating" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PackFolio was founded with a single mission: to make high-quality, affordable packaging accessible to every eCommerce seller in India — not just the big players.
                </p>
                <p>
                  As an <strong className="text-foreground">Authorized Vendor of Euphoria Packaging Pvt. Ltd.</strong>, we bring factory-direct pricing to sellers in Meerut and across North India. Whether you're shipping your first 100 orders on Meesho or scaling to 10,000 orders a month on Amazon, we have the packaging you need.
                </p>
                <p>
                  Based in Meerut, Uttar Pradesh, we understand the local eCommerce ecosystem and the specific needs of D2C and marketplace sellers. Our team is always one WhatsApp message away.
                </p>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-3xl p-10 border border-border/50">
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Factory-Direct Quality", desc: "Sourced directly from Euphoria Packaging — no middlemen, no compromises." },
                  { icon: Truck, title: "Fast Dispatch", desc: "Most orders processed and dispatched from Meerut within 24 hours." },
                  { icon: Zap, title: "Wholesale Pricing", desc: "Competitive B2B rates with no massive MOQ requirements like direct factories." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-secondary/10 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-border/50 bg-card shadow-sm">
                <img
                  src="/images/founder.png"
                  alt="Founder of PackFolio"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                PackFolio is built on a simple promise: reliable packaging, fair wholesale pricing, and fast support for every seller —
                from first-time shippers to high-volume marketplace brands.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: ShieldCheck, title: "Quality First", desc: "Strong, consistent materials you can trust." },
                  { icon: Truck, title: "Fast Service", desc: "Quick dispatch and responsive updates." },
                  { icon: Zap, title: "Seller Focused", desc: "Packaging that fits marketplace needs." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl border border-border/50 bg-card p-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Location */}
      <section className="py-20 bg-secondary/20 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: MapPin, label: "Location", value: config.COMPANY_LOCATION },
              { icon: Phone, label: "WhatsApp", value: `+91 ${config.WHATSAPP_NUMBER.substring(2)}` },
              { icon: Mail, label: "Email", value: config.EMAIL },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm mb-8" style={{ height: "300px" }}>
            <iframe
              title="PackFolio Location - Meerut, UP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754101563!3d28.52728034322222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6563462da9ef%3A0xb82b58df18dea30f!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full h-14 px-10 text-base">
              <a href={generateBulkInquiryUrl()} target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
