import "./App.css";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import ListeProduits from "./components/ListeProduits.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      {/* <ListeProduits /> */}
      <Home/>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
