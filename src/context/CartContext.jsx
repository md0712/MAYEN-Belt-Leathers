import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mayen_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
    // Seed with an initial sample belt so the user immediately sees the populated Cart page
    return [
      {
        id: "mb-001",
        name: "The Sovereign Italian Calf Dress Belt",
        articleName: "ALCE",
        sku: "MYN-SOV-01",
        image: "/images/formal-belts.jpg",
        color: "Obsidian Black",
        width: "32mm",
        price: 33.00,
        priceFormatted: "$33.00",
        quantity: 1,
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('mayen_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cartItems]);

  const addToCart = (product, options = {}) => {
    setCartItems(prev => {
      const selectedColor = options.color || (product.colors && product.colors[0]) || (product.swatches && product.swatches[0]?.name) || "Obsidian Black";
      const existing = prev.find(item => item.id === product.id && item.color === selectedColor);
      
      const itemPrice = typeof product.price === 'number' 
        ? product.price 
        : 33.00;

      if (existing) {
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + (options.quantity || 1) } : item);
      }

      return [
        ...prev,
        {
          id: product.id || `item-${Date.now()}`,
          name: product.name || "Handcrafted Leather Belt",
          articleName: product.articleName || product.name || "MAYEN BELT",
          sku: product.sku || "MYN-01",
          image: product.image || "/images/formal-belts.jpg",
          color: selectedColor,
          width: options.width || (product.widths && product.widths[0]) || "32mm",
          price: itemPrice,
          priceFormatted: `$${itemPrice.toFixed(2)}`,
          quantity: options.quantity || 1,
        }
      ];
    });
  };

  const removeFromCart = (id, color) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && (!color || item.color === color))));
  };

  const updateQuantity = (id, quantity, color) => {
    if (quantity <= 0) {
      removeFromCart(id, color);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && (!color || item.color === color)) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
