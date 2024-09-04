import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/service";
import Categoria from "../../../models/Categoria";

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Categoria não encontrada!");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovocategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria);

        alert("categoria atualizado com sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          // substitua o alert generico por esse aqui.
          alert("O token expirou, favor logar novamente");
        } else {
          // substitua o alert generico por esse aqui.
          alert("Erro ao atualizar o categoria");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("categoria cadastrado com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
        } else {
          alert("Erro ao cadastrado o categoria");
        }
      }
    }

    retornar();
  }

  function retornar() {
    const navigate = useNavigate();
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">{id === undefined ? "Cadastre um novo categoria" : "Editar categoria"}</h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovocategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block" type="submit">
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
