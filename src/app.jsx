import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/containers/item-list-container";
import ItemDetailContainer from "./components/containers/item-detail-container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
