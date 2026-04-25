import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { 
  Palette, 
  Settings, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  Package, 
  Layers, 
  PenTool, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

const customizationTypes = [
  {
    title: "Custom Printed Courier Bags",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
    desc: "Premium POD and plain poly bags with your high-resolution logo and brand colors.",
    features: ["Single or multi-color print", "Tamper-proof seal", "Custom sizes available"]
  },
  {
    title: "Branded Corrugated Boxes",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2670&auto=format&fit=crop",
    desc: "Sturdy 3-ply and 5-ply boxes customized to fit your products perfectly.",
    features: ["Full surface printing", "Eco-friendly material", "Heavy-duty protection"]
  },
  {
    title: "Logo Printed BOPP Tapes",
    image: "https://images.unsplash.com/photo-1606166325613-2be2f0687192?q=80&w=2670&auto=format&fit=crop",
    desc: "Reinforced packing tapes that turn every shipment into a branding opportunity.",
    features: ["High-tack adhesive", "Anti-tamper security", "Vibrant logo printing"]
  }
];

const steps = [
  { 
    icon: MessageCircle, 
    title: "1. Consultation", 
    desc: "Share your brand guidelines and packaging requirements with our experts." 
  },
  { 
    icon: PenTool, 
    title: "2. Digital Proofing", 
    desc: "We create a digital mockup of your custom design for your approval." 
  },
  { 
    icon: Settings, 
    title: "3. Manufacturing", 
    desc: "State-of-the-art printing and production at our partner facilities." 
  },
  { 
    icon: Truck, 
    title: "4. Quality Dispatch", 
    desc: "Rigorous QC followed by fast delivery from Meerut to your location." 
  }
];

function generateCustomWhatsAppUrl(form: { name: string; phone: string; product: string; details: string }) {
  const lines = [
    `Hello ${config.COMPANY_NAME}, I'm interested in *Custom Branded Packaging*:`,
    ``,
    `*Client Details*`,
    `Name: ${form.name}`,
    `WhatsApp: ${form.phone}`,
    ``,
    `*Requirement*`,
    `Packaging Type: ${form.product}`,
    `Design Details: ${form.details}`,
    ``,
    `Please share the process, timeline, and pricing for this custom order.`,
  ].filter(Boolean);
  return `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function CustomPackagingPage() {
  const [form, setForm] = useState({ name: "", phone: "", product: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.product) return;
    setSubmitted(true);
    window.open(generateCustomWhatsAppUrl(form), "_blank");
  };

  return (
    <Layout>
      <SEO
        title="Custom Branded Packaging Meerut | Logo Printed Bags & Boxes"
        description="Elevate your brand with custom printed courier bags, corrugated boxes, and logo tapes. High-quality B2B packaging solutions from Meerut. No MOQ for custom quotes."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620916566391-30bfe8f30097?q=80&w=2574&auto=format&fit=crop" 
            alt="Custom Packaging Mockups" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-background z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <Palette className="w-4 h-4 text-accent" />
                <p className="text-xs font-bold tracking-widest uppercase text-accent-foreground">
                  Branding Solutions
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Your Brand,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                  On Every Delivery
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Transform every shipment into a powerful marketing tool. High-quality custom printed courier bags, boxes, and tapes tailored for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl h-14 px-8 shadow-xl shadow-primary/20">
                  <a href="#inquiry-form">Get a Custom Quote <ArrowRight className="ml-2 w-5 h-5" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl h-14 px-8 backdrop-blur-sm">
                  <a href="#how-it-works">See Our Process</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CUSTOM SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Why Choose Custom Packaging?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Stand out in a crowded marketplace with packaging that tells your story.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Boost Professionalism", desc: "Instantly build trust with customers through premium, branded presentation." },
              { icon: Layers, title: "Brand Recognition", desc: "Turn every person in the logistics chain into a potential customer." },
              { icon: Package, title: "Perfect Fit", desc: "Reduce shipping costs and damages with custom-sized containers." },
              { icon: Palette, title: "Eco-Friendly Options", desc: "Print with sustainable inks on recycled materials for conscious brands." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION TYPES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Customization Capabilities</h2>
            <p className="text-muted-foreground">From poly bags to corrugated boxes, we brand them all.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {customizationTypes.map((type, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.desc}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="how-it-works" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How It Works</h2>
            <p className="text-primary-foreground/70">Our simple 4-step process to get your custom packaging ready.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-white text-primary mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-black/20 border-4 border-primary">
                  <step.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM SECTION */}
      <section id="inquiry-form" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
            <div className="bg-primary p-12 text-primary-foreground hidden md:flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">Request Your Custom Quote</h3>
                <p className="text-primary-foreground/80 mb-8">
                  Fill out the form and our design consultants will get in touch on WhatsApp within 2 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Free Digital Proofs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>No MOQ Requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Pan-India Shipping</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm font-medium mb-1">Need immediate help?</p>
                <a href={`https://wa.me/${config.WHATSAPP_NUMBER}`} className="font-bold underline decoration-accent underline-offset-4">Chat with us on WhatsApp</a>
              </div>
            </div>

            <div className="p-12">
              {submitted ? (
                <div className="text-center py-10 h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">WhatsApp Ready!</h3>
                  <p className="text-muted-foreground mb-8">
                    Your custom packaging request has been prepared. Please click 'Send' in WhatsApp.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-xl">Submit Another Request</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold block mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-secondary/50 border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 9876543210"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-secondary/50 border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">I'm interested in...</label>
                    <select 
                      required
                      value={form.product}
                      onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                      className="w-full bg-secondary/50 border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all appearance-none"
                    >
                      <option value="">Select product category</option>
                      <option value="Custom Printed Courier Bags">Custom Printed Courier Bags</option>
                      <option value="Branded Corrugated Boxes">Branded Corrugated Boxes</option>
                      <option value="Logo Printed Packing Tapes">Logo Printed Packing Tapes</option>
                      <option value="Complete Branding Kit">Complete Branding Kit (Bags + Boxes + Tapes)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Customization Details</label>
                    <textarea 
                      rows={4}
                      placeholder="Size, colors, approximate quantity, etc."
                      value={form.details}
                      onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                      className="w-full bg-secondary/50 border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-xl h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold border-none shadow-lg shadow-green-500/20">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Request Quote on WhatsApp
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
