import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailsProduit() {
    const navigate = useNavigate();
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduit(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération du produit :", error),
      );
  }, [id]);

  if (!produit) {
    return <div>Chargement...</div>;
  }



return (
  <div className="max-w-6xl mx-auto px-6 py-12">
    <button
      onClick={() => navigate(-1)}
      className="mb-8 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
    >
      ← Retour aux produits
    </button>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* IMAGE */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
        <img
          src={produit.image}
          alt={produit.title}
          className="h-96 object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* INFOS */}
      <div className="flex flex-col gap-6">
        {/* Catégorie */}
        <span className="text-sm uppercase tracking-wide text-gray-500">
          {produit.category}
        </span>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900">{produit.title}</h1>

        {/* Prix */}
        <p className="text-2xl font-semibold text-black">${produit.price}</p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{produit.description}</p>

        {/* Bouton */}
        <button className="mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
);
}

export default DetailsProduit;
