import React, { useEffect } from "react";
import { Trash, Pencil } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useAlunoContext } from "../Context/AlunoContext";

export function Menu() {
  const { alunos, setAlunos, deletarAluno, setAlunoSelecionado } =
    useAlunoContext();

  useEffect(() => {
    const mostrarAlunos = async () => {
      try {
        const resposta = await fetch(
          "https://trabalho-finaldw-backend.onrender.com/usuarios"
        );
        const data = await resposta.json();
        setAlunos(data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };

    mostrarAlunos();
  }, [setAlunos]);

  // Função para deletar aluno
  const handleDeletar = async (id) => {
    try {
      const resposta = await fetch( `https://trabalho-finaldw-backend.onrender.com/usuarios/${id}`, { 
        method: "DELETE" 
      }
      );

      if (resposta.ok) {
        deletarAluno(id); 
      } else {
        throw new Error("Erro ao deletar aluno.");
      }
    } catch (error) {
      console.error("Erro ao deletar aluno:", error);
      alert("Erro ao deletar aluno.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-64 bg-gradient-to-l from-purple-500 to-purple-600 text-white flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-purple-600 text-xl font-bold">
              A
            </div>
            <div>
              <h1 className="text-lg font-bold">Bem vindo</h1>
              <p className="text-sm text-purple-200">sistema de edição</p>
            </div>
          </div>
          <nav className="mt-10">
            <ul>
              <li>
                <a className="flex items-center px-4 py-2 text-purple-600 bg-white rounded-lg font-semibold">
                  <span>Alunos</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="flex justify-center w-full bg-purple-700 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
            Sair
          </p>
        </div>
      </div>

      <div className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-600">Lista de Alunos</h1>
          <Link
            to="/cadastro"
            className="bg-purple-700 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
            Adicionar Estudante
          </Link>
        </header>

        {alunos.length === 0 ? (
          <div className="bg-gray-100 border border-gray-300 rounded-lg shadow p-6">
            <p className="text-gray-500 text-center">Nenhum aluno cadastrado.</p>
          </div>
        ) : (
          <>
            <div className="p-6 flex">
              <p className="text-gray-500 text-center flex-1 mr-4">Nome</p>
              <p className="text-gray-500 text-center flex-1 mr-4">Email</p>
              <p className="text-gray-500 text-center flex-1 mr-4">Telefone</p>
              <p className="text-gray-500 text-center flex-1 mr-32">Endereço</p>
            </div>

            {alunos.map((aluno) => (
              <div key={aluno.id} className="bg-gray-100 border border-gray-300 rounded-lg shadow p-6 mb-2 flex items-center">
                <p className="text-gray-500 text-center flex-1 mr-4"> {aluno.nome}</p>
                <p className="text-gray-500 text-center flex-1 mr-4"> {aluno.email}</p>
                <p className="text-gray-500 text-center flex-1 mr-4"> {aluno.telefone}</p>
                <p className="text-gray-500 text-center flex-1 mr-4"> {aluno.endereco}</p>

                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => setAlunoSelecionado(aluno)}
                    className="text-xs p-1 h-9 gap-2 mr-1"
                  >
                    <Link to={`/edicao`}>
                      <Pencil size={20} color="purple" />
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDeletar(aluno.id)}
                    className="text-xs p-1 h-9 gap-2 mr-4"
                  >
                    <Trash size={20} color="purple" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
