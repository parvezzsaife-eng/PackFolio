import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { config } from "@/config";
import { Button } from "@/components/ui/button";
import { MessageCircle, Package, Truck, ShieldCheck, IndianRupee, CheckCircle2 } from "lucide-react";

function generateBulkWhatsAppUrl(form: { name: string; phone: string; product: string; quantity: string; message: string }) {
  const lines = [
    `Hello ${config.COMPANY_NAME}, I want to place a Bulk Order:`,
    ``,
    `*My Details*`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    ``,
    `*Requirement*`,
    `Product: ${form.product}`,
    `Estimated Quantity: ${form.quantity}`,
    form.message ? `Additional Info: ${form.message}` : "",
    ``,
    `Please share the best bulk price and delivery timeline.`,
  ].filter(Boolean);
  return `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

const productOptions = [
  "Courier Bags (POD / Plain)",
  "Bubble Mailers (Kraft / Poly)",
  "Corrugated Boxes (3-Ply / 5-Ply)",
  "Thermal Rolls / Shipping Labels",
  "BOPP Packing Tape",
  "Tape Dispensers",
  "Mixed / Multiple Products",
  "Other",
];

const quantityOptions = [
  "1,000 – 5,000 pcs",
  "5,000 – 10,000 pcs",
  "10,000 – 50,000 pcs",
  "50,000+ pcs",
  "Not Sure (Need Quote)",
];

export default function BulkInquiryPage() {
  const [form, setForm] = useState({ name: "", phone: "", product: "", quantity: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.product) return;
    setSubmitted(true);
    window.open(generateBulkWhatsAppUrl(form), "_blank");
  };

  return (
    <Layout>
      <SEO
        title="Bulk Inquiry | PackFolio - B2B Packaging Supplier Meerut"
        description="Get the best bulk pricing on courier bags, boxes, tapes and more. Submit your bulk inquiry and we'll respond within 2 hours on WhatsApp."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bulk Inquiry</h1>
          <p className="text-xl text-primary-foreground/80">
            Tell us what you need — we respond within 2 hours on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Why Bulk Order with PackFolio?</h2>
              <div className="space-y-5">
                {[
                  { icon: IndianRupee, title: "Factory-Direct Prices", desc: "Skip the middlemen — we source directly from Euphoria Packaging Pvt. Ltd. and pass savings to you." },
                  { icon: Package, title: "Low MOQs", desc: "Start from as low as 200 pcs on boxes and 500 pcs on mailers. No need to lock up capital in huge quantities." },
                  { icon: Truck, title: "Pan-India Delivery", desc: "We dispatch from Meerut, UP. Reach all major cities within 2–4 days via reliable courier partners." },
                  { icon: ShieldCheck, title: "Consistent Quality", desc: "Every batch goes through quality checks. Your products are safe with tamper-proof, durable packaging." },
                  { icon: MessageCircle, title: "Instant WhatsApp Support", desc: "Our team is available Mon–Sat, 10 AM–7 PM. Chat, share samples, send photos — all on WhatsApp." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp Opened!</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Your inquiry has been pre-filled in WhatsApp. Just tap <strong>Send</strong> to submit it. We'll reply within 2 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-foreground mb-6">Get Bulk Pricing</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Product Required *</label>
                      <select
                        required
                        value={form.product}
                        onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Select a product…</option>
                        {productOptions.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Estimated Quantity</label>
                      <select
                        value={form.quantity}
                        onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">Select quantity range…</option>
                        {quantityOptions.map(q => <option key={q} value={q}>{q}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Additional Details</label>
                      <textarea
                        rows={3}
                        placeholder="Size needed, print requirements, delivery city, etc."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-lg h-12 font-semibold text-sm border-none">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Inquiry on WhatsApp
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      This opens WhatsApp with your details pre-filled — just press Send.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
