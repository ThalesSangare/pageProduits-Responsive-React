import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../API/api";
import CardsProduits from "../../pages/CardsProduits";

function Recherche() {
  const [produits, setProduits] = useState([]); // tous les produits
  const [rechercheTerme, setRechercheTerme] = useState(""); // texte recherché
  const [loading, setLoading] = useState(true); // état chargement

  // 1️⃣ récupérer les produits depuis l'API
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const res = await api.get("/"); // Fakestore ou ton backend
        const produitsFormates = res.data.map((p) => ({
          id: p.id,
          nom: p.title,
          prix: p.price,
          description: p.description,
          images: [p.image], // tableau pour futur multi-images
        }));
        setProduits(produitsFormates);
      } catch (err) {
        console.error("Erreur lors de la récupération des produits :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduits();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 mb-6">
      {/* Barre de recherche avec icône */}
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          value={rechercheTerme}
          onChange={(e) => setRechercheTerme(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition shadow-sm"
        />
      </div>

      {/* Affichage des produits */}

    </div>
  );
}

export default Recherche;