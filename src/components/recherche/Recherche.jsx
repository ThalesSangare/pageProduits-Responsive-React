/**
 * CETTE RECHERCHE EST FAITES POUR LA BAR DE RECHECHE SUR LA PAGE DES PRODUIT
 * ELLE PERMET DE SAISIR LE NOM DU PROD ET DIRECTEMENT FILTRER ET AFFICHER
 * LES RESULTATS
 *
 *
 */

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../API/api";
import CardsProduits from "../../pages/CardsProduits";

function Recherche() {
  const [produits, setProduits] = useState([]); // tous les produits
  const [rechercheTerme, setRechercheTerme] = useState(""); // texte recherché
  const [showSuggestions, setShowSuggestions] = useState(false); // gestion des suggestion
  const [loading, setLoading] = useState(true); // état chargement

  const handleSearchTerm = (e) => {
    // trim() enlève les espaces avant et après
    setRechercheTerme(e.target.value);
  };

  // 1️⃣ récupérer les produits depuis l'API
  useEffect(() => {
    api
      .get("/") // URL de FakeStoreAPI
      .then((res) => {
        // FakeStoreAPI a les champs : id, title, price, description, image
        const produitsFormates = res.data.map((p) => ({
          id: p.id,
          nom: p.title,
          prix: p.price,
          description: p.description,
          image: p.image,
        }));

        setProduits(produitsFormates);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des produits :", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    //  Affichage pendant le chargement
    return <div className="text-center py-20">Chargement des produits...</div>;
  }
  /**
   * constant qui va nous permettre de filtrer les prod et les
   *  tranformer en miniscule avant de les parcourir
   *  */

  const produitsFiltres = produits.filter((val) =>
    val.nom.toLowerCase().includes(rechercheTerme.trim().toLowerCase()),
  );

  // suggestions limitées à 5 produits
  const suggestions = produitsFiltres.slice(0, 5);

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
          onChange={(e) => {
            handleSearchTerm(e);
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 200);
          }} // ferme la sugg quand on n'est pas dans input
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition shadow-sm"
        />
        {/* Suggestions de recherche */}
        {showSuggestions && rechercheTerme && suggestions.length > 0 && (
          <div className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
            {suggestions.map((prod) => (
              <div
                key={prod.id}
                onMouseDown={() => {
                  setRechercheTerme(prod.nom);
                  setShowSuggestions(false);
                }}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.nom}
                  className="w-10 h-10 object-contain"
                />

                <span className="text-sm">{prod.nom}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* /* compteur de résultats */}
      {rechercheTerme && (
        <p className="mb-4 text-sm text-gray-500">
          {produitsFiltres.length} produit(s) trouvé(s) pour "
          <span className="font-semibold">{rechercheTerme}</span>"
        </p>
      )}
      {/* Affichage des produits */}
      <div
        className="grid gap-4 justify-center 
                grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {rechercheTerme === "" ? (
          // afficher tous les produits si rien n'est recherché
          produits.map((val) => <CardsProduits key={val.id} produits={val} />)
        ) : produitsFiltres.length === 0 ? (
          // aucun produit trouvé
          <p className="col-span-full text-center text-gray-500">
            Aucun produit trouvé
          </p>
        ) : (
          // afficher les produits filtrés
          produitsFiltres.map((val) => (
            <CardsProduits key={val.id} produits={val} />
          ))
        )}

        {/* Si aucun produit trouvé
        {produitsFiltres.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Aucun produit trouvé
          </p>
        ) : (
          // sinon on affiche les produits filtrés
          produitsFiltres.map((val) => {
            return <CardsProduits key={val.id} produits={val} />;
          })
        )} */}
      </div>
    </div>
  );
}

export default Recherche;
