import { HandCoins, Search, ShoppingCart, UserRound } from "lucide-react";

const liens = [
  { nom: "Accueil", url: "/" },
  { nom: "Produits", url: "/produits" },
  { nom: "A propos", url: "/produits" },
  { nom: "Contact", url: "/contact" },
  { nom: "Connexion", url: "/contact" },
];

function NavBar() {
  return (
    // <div className="hidden md:flex px-6 py-4 bg-cyan-950 mb-8">
    <div className="max-w-7xl mx-auto flex items-center px-6 py-4 mb-8">
      {/* LOGO */}
      <div className="flex-1 flex">
        <HandCoins />
        <h1 className="ml-2 text-xl text-accent font-bold">E-commerce</h1>
      </div>

      {/* LIENS */}
      <div className="flex-1 hidden md:flex justify-center">
        <ul className="flex gap-4">
          {liens.map((lien) => (
            <li
              key={lien.nom}
              className="hover:text-accent transition duration-300 cursor-pointer"
            >
              {lien.nom}
            </li>
          ))}
        </ul>
      </div>

      {/*ICONES  */}
      <div className="flex-1 flex justify-end ">
        <ul className="flex flex gap-4">
          <li>
            <a href="#" className="hover:text-accent transition duration-300">
              <Search />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent transition duration-300">
              <ShoppingCart />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent transition duration-300">
              <UserRound />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
