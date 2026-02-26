function ProductCard({ produit }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md 
                    hover:shadow-xl transition duration-300 
                    flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={produit.image}
          alt={produit.nom}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{produit.nom}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {produit.description}
        </p>

        <div className="mt-auto">
          <p className="font-bold text-xl mb-3">
            {produit.prix.toLocaleString()} €
          </p>

          <button
            className="w-full bg-black text-white 
                             py-2 rounded-lg 
                             hover:bg-gray-800 transition"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
