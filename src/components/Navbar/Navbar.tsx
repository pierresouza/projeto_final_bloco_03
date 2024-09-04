import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-slate-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold uppercase">
          Farmaconde
        </Link>
        <div className="flex gap-4">
          <Link to="/postagens" className="hover:underline">
            Listar Categorias
          </Link>
          <Link to="/cadastrar-categorias" className="hover:underline">
            Cadastrar Categorias
          </Link>
          <Link to="/cadastrar-categorias/:id" className="hover:underline">
            Cadastrar Categorias
          </Link>
          <Link to="/deletar-categorias" className="hover:underline">
            Deletar CAtegorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
