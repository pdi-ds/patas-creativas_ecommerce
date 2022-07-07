import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/containers/item-list-container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Bienvenidos a Patas Creativas" />
    </div>
  );
}

export default App;
