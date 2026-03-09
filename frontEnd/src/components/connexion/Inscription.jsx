import { useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Login from "./Login";

export default function Inscription() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Mot de passe <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">
            Confirmer mot de passe
            <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          S'inscrire
        </button>

        <p className="text-center text-sm mt-4">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-green-600 cursor-pointer">
            Connexion
          </Link>
        </p>
      </form>
    </div>
  );
}
