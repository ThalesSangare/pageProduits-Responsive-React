import { createContext, useEffect, useState } from "react";
/**
 *  cette ligne en commentaires en bas enleve l'avertissement qui est sur PanierContext
 * 
 */
/* eslint-disable react-refresh/only-export-components */ 
export const FavorisContext = createContext();
export function FavorisProvider({ children }) {
  //recup les favoris depuis localStorag
  const [favoris, setFavoris] = useState(() => {
    return JSON.parse(localStorage.getItem("favoris")) || [];
  });
  //sauvegarder automatiq dans localStorage
  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  // ajouter / supprimer un favori
  const toggleFavori = (idProd) => {
    setFavoris((prev) => {
      if (prev.includes(idProd)) {
        return prev.filter((f) => f !== idProd);
      } else {
        return [...prev, idProd];
      }
    });
  };
  return (
     <FavorisContext.Provider value={{ favoris, toggleFavori }}>
      {children}
    </FavorisContext.Provider>
  );
  
}
