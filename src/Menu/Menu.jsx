import React from 'react';
import { Trash, Pencil } from "@phosphor-icons/react";
import { Link, Outlet } from 'react-router-dom';

export function Menu() {
  console.log("Componente Menu carregado");

      return (
        
        <div className="min-h-screen bg-white flex">
          <aside className="w-64 bg-gradient-to-l from-purple-500 to-purple-600  text-white flex flex-col justify-between p-6">
            
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
              <p className=" flex justify-center w-full bg-purple-700 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                Sair
              </p>
            </div>
          </aside>
    
          <main className="flex-1 p-10">
            
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-purple-600">Lista de Alunos</h1>
              <Link to="/cadastro" className="bg-purple-700 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
              Adicionar Estudante
              </Link>
            </header>
    

            {/* QUANDO NAO HOUVER ALUNOS */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg shadow p-6">
              <p className="text-gray-500 text-center">Nenhum aluno cadastrado.</p>
            </div>


            {/* QUANDO HOUVER ALUNOS */}

            <div className="p-6 flex">
              <p className="text-gray-500 text-center flex-1 mr-4">Nome</p>
              <p className="text-gray-500 text-center flex-1 mr-4">Email</p>
              <p className="text-gray-500 text-center flex-1 mr-4">Telefone</p>
              <p className="text-gray-500 text-center flex-1 mr-32">Endereço</p>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg shadow p-6 mb-2 flex items-center">
              <p className="text-gray-500 text-center flex-1 mr-4">Ana Julia Defendi da Silva</p>
              <p className="text-gray-500 text-center flex-1 mr-4">ana@gmail.com</p>
              <p className="text-gray-500 text-center flex-1 mr-4">999022221</p>
              <p className="text-gray-500 text-center flex-1 mr-4">rua x, n° 20</p>

              <div className="flex gap-4 items-center">
                <button className="text-xs p-1 h-9 gap-2 mr-1">
                  <a href="/edicao">
                    <Pencil size={20} color="purple" /> 
                  </a>
                </button>
                <button className="text-xs p-1 h-9 gap-2 mr-4">
                  <Trash size={20} color="purple" /> 
                </button>
              </div>
            </div>

          </main>
        </div>
      );
    }
    
