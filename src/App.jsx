import "./App.css";
import Footer from "./components/Footer.jsx";
import ListeProduits from "./components/ListeProduits.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ListeProduits />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
