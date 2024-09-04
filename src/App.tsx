import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import DeletarCategoria from "./components/Categorias/DeletarCategoria/DeletarCategoria";
import ListarCategoria from "./components/Categorias/ListarCategorias/ListarCategoria";
import FormCategoria from "./components/Categorias/FormCategoria/FormCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarCategorias" element={<FormCategoria />} />
            <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />
            <Route path="/editarCategorias/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
