import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="h-100 bg-gray-100 p-8 rounded-r-2xl shadow-lg w-96 hidden md:block">
        <h3 className="text-2xl text-center font-bold">Bienvenue !</h3>
        <p className="text-center mt-4 text-gray-600">
          Connectez-vous pour accéder à votre compte et profiter de nos offres
          exclusives.
        </p>
        <p className="text-center mt-2 text-gray-600">
          Si vous n'avez pas encore de compte, cliquez sur "S'inscrire" pour
          créer le vôtre et rejoindre notre communauté.
        </p>
        <Link
          to="/inscription"
          className=" text-blue-600 cursor-pointer hover:underline mt-4 block text-center font-bold"
        >
          S'inscrire
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-green-600 w-96 mt-10 mb-10"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Email<span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">
            Mot de passe<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />

            <label className="text-sm text-gray-600">Se souvenir de moi</label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Mot de passe oublié ?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Se connecter
        </button>

        <p className="text-center text-sm mt-4 md:hidden">
          Pas de compte ?{" "}
          <Link
            to="/inscription"
            className="text-blue-600 transition cursor-pointer hover:underline"
          >
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
}
