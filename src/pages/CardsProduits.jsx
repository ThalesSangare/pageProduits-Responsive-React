import { Heart, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FavorisContext } from "../components/context/FavorisContext";

function CardsProduits({ produits }) {
  // récupérer les favoris depuis le context
  const { favoris, toggleFavori } = useContext(FavorisContext);

  // vérifier si le produit est dans les favoris
  const favori = favoris.includes(produits.id);

  // fonction clic
  const handleFavori = () => {
    toggleFavori(produits.id);

    if (favori) {
      toast.info("Produit retiré des favoris");
    } else {
      toast.success("Produit ajouté aux favoris");
    }
  };

  return (
    <div
      className="border border-gray-200 rounded-2xl shadow-md 
      hover:shadow-xl transition duration-300 
      flex flex-col overflow-hidden w-full max-w-xs relative"
    >
      {/*  bouton favoris */}
      <button
        onClick={handleFavori}
        className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:scale-110 transition"
      >
        <Heart
          className={`w-5 h-5 ${
            favori ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      {/* image produit */}
      <Link
        to={`/produits/${produits.id}`}
        className="h-48 w-full flex items-center justify-center bg-gray-100 p-2 rounded"
      >
        <img
          src={produits.image}
          alt={produits.nom}
          className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
        />
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg truncate">{produits.nom}</h3>

        <p className="text-gray-500 text-sm line-clamp-2">
          {produits.description}
        </p>

        <div className="mt-auto">
          <p className="text-accent font-bold text-xl mb-3">
            {produits.prix.toLocaleString()} €
          </p>

          <button
            className="cursor-pointer text-xs sm:text-sm flex gap-2 justify-center w-full 
            bg-black text-white py-1.5 sm:py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsProduits;
