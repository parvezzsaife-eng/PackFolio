import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '@/data/products';

export interface CartItem {
  id: string; // unique id for cart item (product.id + size)
  product: Product;
  selectedSize: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, selectedSize: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('packfolio_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('packfolio_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, selectedSize: string, quantity: number) => {
    setItems((prev) => {
      const existingId = `${product.id}-${selectedSize}`;
      const existingItem = prev.find(item => item.id === existingId);

      if (existingItem) {
        return prev.map(item => 
          item.id === existingId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { id: existingId, product, selectedSize, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
