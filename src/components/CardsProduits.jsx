function CardsProduits({ produits }) {
  return (
    <div className="text-center">
      <div>
        <img
          src={produits.image}
          alt={produits.nom}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div>
        <h3>{produits.nom}</h3>
        <p>{produits.prix}</p>
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default CardsProduits;
