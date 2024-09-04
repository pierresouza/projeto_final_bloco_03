import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/service";
import { DNA } from "react-loader-spinner";
import CardCategoria from "../CardCategorias/CardCategoria";

function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Erro ao listar as Categorias");
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />}
      <div
        className="
                bg-gray-200
                flex
                justify-center
                "
      >
        <div className="my-4 container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategoria;
