import { createContext, useEffect, useState } from "react";
/**
 *  cette ligne en commentaires en bas enleve l'avertissement qui est sur PanierContext
 * 
 */
/* eslint-disable react-refresh/only-export-components */ 
export const PanierContext = createContext();

export function PanierProvider({ children }) {
  // récupérer le panier depuis localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // sauvegarde automatique dans localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ajouter produit au panier
  const addToCart = (produit) => {
    let dejaDansPanier = false;

    setCart((prev) => {
      const existe = prev.find((p) => p.id === produit.id);

      if (existe) {
        dejaDansPanier = true;
        return prev;
      }
      // sinon on ajoute le produit avec quantité 1
      return [...prev, { ...produit, qty: 1 }];
    });

    return dejaDansPanier;
  };

  // augmenter la quantité depuis la page panier
  // augmenter la quantité depuis la page panier
  const incrementerQte = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)),
    );
  };
  // diminuer la quantité d'un produit
  const decrementerQte = (id) => {
    setCart((prev) => {
      return prev
        .map((p) => {
          if (p.id === id) {
            // si quantité > 1 on diminue
            if (p.qty > 1) {
              return { ...p, qty: p.qty - 1 };
            }
            // si quantité = 1 on supprimera plus bas
            return null;
          }
          return p;
        })
        .filter(Boolean); // enlève les null (produit supprimé)
    });
  };

  // supprimer produit
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PanierContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementerQte,
        decrementerQte,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
