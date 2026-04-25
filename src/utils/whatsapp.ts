import { config } from "@/config";
import type { CartItem } from "@/context/CartContext";

export interface OrderDetails {
  name: string;
  city: string;
  businessName?: string;
  notes?: string;
}

export function generateWhatsAppOrderUrl(items: CartItem[], details: OrderDetails): string {
  let message = `Hello ${config.COMPANY_NAME}, I want to place an order:\n\n`;
  message += `*Customer Details*\n`;
  message += `Name: ${details.name}\n`;
  if (details.businessName) message += `Business: ${details.businessName}\n`;
  message += `City: ${details.city}\n\n`;

  message += `*Order Items*\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   Size: ${item.selectedSize}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Ref ID: ${item.product.id}\n\n`;
  });

  if (details.notes) {
    message += `*Additional Notes:*\n${details.notes}\n\n`;
  }

  message += `Please share the best price and delivery details.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateBulkInquiryUrl(): string {
  const message = `Hello ${config.COMPANY_NAME}, I'm looking to place a bulk order for packaging materials. Can you please share your catalog and bulk pricing?`;
  return `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
