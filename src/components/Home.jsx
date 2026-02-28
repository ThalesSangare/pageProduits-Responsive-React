import {
  Accessibility,
  Computer,
  House,
  Phone,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";
import React from "react";
import ListeProduits from "./ListeProduits";
const categories = [
  {
    id: 1,
    nom: "Telephone",
    image: <Phone size={24} />,
  },
  { id: 2, nom: "Ordinateur", image: <Computer size={24} /> },
  { id: 3, nom: "Accessoires", image: <Accessibility size={24} /> },
  { id: 4, nom: "Vetement", image: <ShoppingBag size={24} /> },
  { id: 5, nom: "Chaussure", image: <ShoppingBasket size={24} /> },
  { id: 6, nom: "Maison", image: <House size={24} /> },
];

function Home() {
  return (
    <div>
      <div>{/* un petit slide avec des img de produits */}</div>
      <div className="flex flex-wrap justify-center">
        {/* une section avec les produits par categorie */}
        {categories.map((categorie) => (
          <div
            key={categorie.id}
            className="flex flex-col items-center justify-center m-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="items-center justify-center">
              {categorie.image} {categorie.nom}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col">{/* une section avec les produits les plus vendus */}
        <h3 className="flex justify-center m-6 text-2xl">Les plus vendus </h3>
        <ListeProduits limite={8} />
      </div>
      <div>
        {/* une section avec les produits en promotion ou des nouveaux */}
      </div>
      <div>
        {/* une section Nos Services qui aura 3 boite(Livraison RApide - Paiement securisé - Support 24/7)*/}
      </div>
      <div>{/* une section avec les avis des clients */}</div>
      <div></div>
    </div>
  );
}

export default Home;
