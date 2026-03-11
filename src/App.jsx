import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/connexion/Login.jsx";
import Inscription from "./components/connexion/Inscription.jsx";
import Home from "./pages/Home.jsx";
import ListeProduits from "./pages/ListeProduits.jsx";
import DetailsProduit from "./pages/DetailsProduit.jsx";
import Propos from "./pages/Propos.jsx";
import Contact from "./pages/Contact.jsx";
import NavBar from "./pages/NavBar.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<ListeProduits />} />
        <Route path="/produits/:id" element={<DetailsProduit />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
