import { useContext } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";
import { PanierContext } from "../components/context/PanierContext";

function Panier() {
  // récupération du panier depuis le Context
  const { cart, removeFromCart, incrementerQte, decrementerQte } =
    useContext(PanierContext);

  // calcul du total du panier
  const total = cart.reduce((acc, produit) => {
    return acc + produit.prix * produit.qty;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* titre de la page */}
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Mon panier
        <ShoppingCart className="w-6 h-6" />
      </h1>

      {/* si panier vide */}
      {cart.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide</p>
      ) : (
        <>
          {/* liste des produits */}
          <div className="flex flex-col gap-4">
            {cart.map((produit) => (
              <div
                key={produit.id}
                className="flex items-center gap-4 border p-4 rounded-lg"
              >
                {/* image produit */}
                <img
                  src={produit.image}
                  alt={produit.nom}
                  className="w-20 h-20 object-contain"
                />

                {/* informations produit */}
                <div className="flex-1">
                  <h3 className="font-semibold">{produit.nom}</h3>

                  <p className="text-gray-500">{produit.prix} €</p>
                </div>

                {/* gestion quantité */}
                <div className="flex items-center gap-2">
                  {/* bouton diminuer */}
                  <button
                    onClick={() => decrementerQte(produit.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    -
                  </button>

                  <span>{produit.qty}</span>

                  {/* bouton ajouter */}
                  <button
                    onClick={() => incrementerQte(produit.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    +
                  </button>
                </div>

                {/* prix total produit */}
                <p className="font-semibold w-20 text-right">
                  {(produit.prix * produit.qty).toFixed(2)} €
                </p>

                {/* supprimer produit */}
                <button
                  onClick={() => removeFromCart(produit.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* total du panier */}
          <div className="mt-8 flex justify-end">
            <div className="border p-4 rounded-lg w-64">
              <h2 className="font-semibold mb-2">Total</h2>

              <p className="text-xl font-bold">{total.toFixed(2)} €</p>

              {/* bouton commander */}
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Commander
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Panier;
