import { HandCoins, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Recherche from "./recherche/Recherche";

const liens = [
  { nom: "Accueil", url: "/" },
  { nom: "Produits", url: "/produits" },
  { nom: "A propos", url: "/propos" },
  { nom: "Contact", url: "/contact" },
  { nom: "Connexion", url: "/contact" },
];

function NavBar() {
  // etat du menu pour gerer l'affichage sur mobile
  const [menuOuvert, setMenuOuvert] = useState(false);
  // etat de la recherche pour filtrer les produits
  return (
    <div className="bg-base-100 shadow-md px-4 py-2  items-center mb-5">
      {/* LOGO */}
      <div className="relative justify-center flex items-center">
        {/* logo */}
        <div className="flex-1 flex">
          <HandCoins />
          <h1 className="ml-2 text-sm md:text-xl text-accent font-bold">
            SmartMarket
          </h1>
        </div>
        {/* barre de recherche */}
        <div className="flex-1 mx-4">
          <Recherche />
        </div>

        {/*ICONES  */}
        <div className="flex-1 flex justify-end ">
          <a href="#" className="hidden md:block mr-6 hover:text-accent transition duration-300">
            Besoin d'aide ?
          </a>
          <ul className="flex gap-4">
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

      {/* LIENS */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex gap-4">
          {liens.map((lien) => (
            <li
              key={lien.nom}
              className="hover:text-accent transition duration-300 cursor-pointer"
            >
              <Link to={lien.url}>{lien.nom}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* btn menu pour petit ecran */}
      <div className="md:hidden flex items-center ml-4">
        <button
          className="btn btn-square"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          <Menu />
        </button>
      </div>
      {/* menu deroulant sur petit ecrna */}
      {menuOuvert && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md flex flex-col items-center py-4">
          {liens.map((lien) => (
            <Link
              to={lien.url}
              key={lien.nom}
              className="hover:text-accent transition duration-300 cursor-pointer"
            >
              {lien.nom}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default NavBar;
