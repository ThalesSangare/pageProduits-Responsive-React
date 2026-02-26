const liens = [
  { nom: "Accueil", url: "/" },
  { nom: "Produits", url: "/produits" },
  { nom: "Contact", url: "/contact" },
];

function NavBar() {
  return (
    <div className="flex justify-center items-center w-full h-32 p-4 bg-cyan-950 mb-8">
      <ul className="flex gap-4 justify-center items-center">
        {liens.map((lien) => (
          <li key={lien.nom} className="hover:text-accent transition duration-300 cursor-pointer">
            {lien.nom}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NavBar;
