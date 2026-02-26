import CardsProduits from "./CardsProduits";

const produits = [
  {
    id: 1,
    nom: "Produit 1",
    prix: 10000,
    description: "Description du produit 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nom: "Produit 2",
    prix: 20000,
    description: "Description du produit 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nom: "Produit 3",
    prix: 30000,
    description: "Description du produit 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    nom: "Produit 4",
    prix: 40000,
    description: "Description du produit 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    nom: "Produit 5",
    prix: 50000,
    description: "Description du produit 5",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    nom: "Produit 6",
    prix: 60000,
    description: "Description du produit 6",
    image: "https://via.placeholder.com/150",
  },
];

function ListeProduits() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {produits.map((produit) => (
        <CardsProduits key={produit.id} produits={produit} />
      ))}
    </div>
  );
}
export default ListeProduits;
