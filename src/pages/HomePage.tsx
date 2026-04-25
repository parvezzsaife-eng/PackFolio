import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { generateBulkInquiryUrl } from "@/utils/whatsapp";
import { ArrowRight, Truck, ShieldCheck, Zap, PackageOpen, ChevronRight, MapPin, Clock, Infinity as InfinityIcon, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { config } from "@/config";

export default function HomePage() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.COMPANY_NAME,
    "description": config.COMPANY_TAGLINE,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Meerut",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "telephone": `+${config.WHATSAPP_NUMBER}`,
    "url": "https://packfolio.in"
  };

  return (
    <Layout>
      <SEO
        title="Packaging Supplier in Meerut | Courier Bags & Packaging Materials"
        description="Buy courier bags, bubble mailers & packaging supplies for Amazon, Flipkart & Meesho sellers. Bulk orders available. Based in Meerut, UP."
      >
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </SEO>

      {/* HERO SECTION */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden bg-gray-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
            alt="E-commerce Packaging Warehouse" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" />
        </div>


        {/* Floating highlights for visual interest */}
        <div className="absolute top-8 right-8 z-10 hidden lg:flex flex-col gap-3">
          {[
            { icon: ShieldCheck, text: "Tamper-Proof Guaranteed" },
            { icon: Truck, text: "Ships from Meerut" },
            { icon: Zap, text: "Same-Day Dispatch" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs font-medium">
              <Icon className="w-3.5 h-3.5 text-green-400" />
              {text}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
              <p className="text-xs font-bold tracking-widest uppercase text-orange-300">
                {config.AUTHORIZED_VENDOR}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Packaging That<br /><span className="text-orange-400">Powers Your</span><br />Business
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Factory-direct courier bags, boxes & tapes for Amazon, Flipkart & Meesho sellers — shipped from Meerut.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-md h-12 px-8 text-sm font-bold uppercase tracking-wide border-none shadow-lg shadow-orange-500/30">
                <Link href="/products">
                  <PackageOpen className="w-4 h-4 mr-2" /> Browse Products
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-md h-12 px-8 text-sm font-bold border-none shadow-lg shadow-green-500/30">
                <a href={generateBulkInquiryUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> Order on WhatsApp
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "1M+", label: "Products Delivered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-12 bg-background relative z-10 -mt-10 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-6 bg-secondary/40 border border-border rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <p className="font-medium text-foreground">Authorized Vendor of Euphoria Packaging Pvt. Ltd.</p>
          </div>
          <div className="flex items-center gap-4 p-6 bg-secondary/40 border border-border rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="font-medium text-foreground">Based in Meerut, Uttar Pradesh</p>
          </div>
          <div className="flex items-center gap-4 p-6 bg-secondary/40 border border-border rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <p className="font-medium text-foreground">Serving e-commerce sellers across India</p>
          </div>
        </div>
      </section>

      {/* PLATFORMS WE SUPPORT */}
      <section className="py-12 border-y border-border/50 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Trusted By Sellers On</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold font-display text-gray-800">AMAZON</span>
            <span className="text-2xl font-bold font-display text-blue-600">FLIPKART</span>
            <span className="text-2xl font-bold font-display text-pink-600">MEESHO</span>
            <span className="text-2xl font-bold font-display text-purple-600">MYNTRA</span>
          </div>
        </div>
      </section>

      {/* SELLER SECTIONS */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Tailored for Your Marketplace</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get packaging materials that specifically meet the guidelines and needs of your selling platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
              <div className="w-full h-56 overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}images/amazon_packaging.jpg`} alt="Amazon Packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 relative z-10 flex-grow flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-orange-600 mb-4 font-display">Packaging for Amazon Sellers</h3>
                <p className="text-muted-foreground mb-8 flex-grow">Tamper-proof courier bags, 4x6 labels, and corrugated boxes sized to Amazon's packaging guidelines.</p>
                <Button asChild variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700 w-fit">
                  <Link href="/products?tag=amazon-sellers">Shop Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
              <div className="w-full h-56 overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}images/flipkart_packaging.jpg`} alt="Flipkart Packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 relative z-10 flex-grow flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 font-display">Packaging for Flipkart Sellers</h3>
                <p className="text-muted-foreground mb-8 flex-grow">Poly bubble mailers, boxes, and BOPP tapes. Tested and trusted for Flipkart's eKart delivery network.</p>
                <Button asChild variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 w-fit">
                  <Link href="/products?tag=flipkart-sellers">Shop Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
              <div className="w-full h-56 overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}images/meesho_packaging.jpg`} alt="Meesho Packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 relative z-10 flex-grow flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 font-display">Packaging for Meesho Sellers</h3>
                <p className="text-muted-foreground mb-8 flex-grow">Cost-effective plain courier bags and tapes designed for Meesho sellers shipping fashion and lifestyle products.</p>
                <Button asChild variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700 w-fit">
                  <Link href="/products?tag=meesho-sellers">Shop Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY INFO */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Fast & Reliable Delivery Across India</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Same-Day Dispatch</h4>
              <p className="text-muted-foreground">Orders placed before 2 PM are dispatched the same day from our Meerut warehouse.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Pan-India Transport</h4>
              <p className="text-muted-foreground">We partner with trusted logistics providers to ensure safe delivery anywhere in India.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <InfinityIcon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Bulk Order Ready</h4>
              <p className="text-muted-foreground">No caps on large orders. We have the inventory to support your highest volume days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Why Partner with {config.COMPANY_NAME}?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                As an authorized vendor of Euphoria Packaging Pvt. Ltd., we bring factory-direct quality to eCommerce sellers in Meerut and across North India. We understand that your packaging is the first physical touchpoint with your customer.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Truck, title: "Fast & Reliable Dispatch", desc: "Most orders are processed and dispatched within 24 hours." },
                  { icon: ShieldCheck, title: "Premium Quality Guaranteed", desc: "High GSM boxes and strong micron bags that withstand rough transit." },
                  { icon: Zap, title: "Unbeatable B2B Pricing", desc: "Wholesale rates without the need for massive factory MOQs." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                      <p className="text-primary-foreground/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl relative">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-slate-900"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white/50">
                  <PackageOpen className="w-32 h-32 mb-4" />
                  <span className="font-display font-bold text-2xl">Premium Quality</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
                <p className="font-bold">Trusted by 2000+ Sellers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Got questions? We've got answers.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">How do I place an order?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Add products to your cart on this website and click "Place Order on WhatsApp". This will format your order details and open a WhatsApp chat with us. We will confirm the final pricing and delivery options there.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">Do you supply custom printed packaging?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes, we offer custom branding on courier bags, tapes, and boxes for bulk orders. Please use the "Bulk Inquiry" button to discuss your specific requirements and minimum order quantities for custom prints.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">Where are you located and where do you ship?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We are located in Meerut, Uttar Pradesh. We supply locally and can ship across India using trusted transport partners. Shipping costs are calculated based on actual weight and destination.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">What are the Minimum Order Quantities (MOQ)?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                MOQs vary by product. Standard courier bags usually start at 1000 pieces, while corrugated boxes might start at 100 or 200 pieces. The specific MOQ for each item is listed on its product page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">Are your products accepted by Amazon and Flipkart?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes! We specifically stock unbranded, high-quality packaging materials that comply with the seller guidelines of all major Indian eCommerce marketplaces including Amazon, Flipkart, and Meesho.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

    </Layout>
  );
}