import { useEffect, useState } from "react";
import api from "../API/api";

function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    api
      .get("") // <-- "/" ici se réfère à baseURL
      .then((res) => setProduits(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {produits.map((p) => (
        <div key={p.idProd}>
          <h3>{p.nomProd}</h3>
          <p>{p.prixProd}</p>
        </div>
      ))}
    </div>
  );
}

export default Produits;
