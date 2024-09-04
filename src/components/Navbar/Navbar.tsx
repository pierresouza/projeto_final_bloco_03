import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-slate-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link to="/" className="text-2xl font-bold uppercase">
          Farmaconde
        </Link>
        <div className="flex gap-4">
          <Link to="/categorias" className="hover:underline">
            Listar Categorias
          </Link>
          <Link to="/cadastrarCategoria" className="hover:underline">
            Cadastrar Categorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
