import React from 'react';

export default function Menu() {
      return (
        <div className="min-h-screen bg-white flex">
          {/* Sidebar */}
          <aside className="w-64 bg-gradient-to-l from-purple-500 to-purple-600  text-white flex flex-col justify-between p-6">
            {/* Perfil */}
            <div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-purple-600 text-xl font-bold">
                  A
                </div>
                <div>
                  <h1 className="text-lg font-bold">Bem vindo</h1>
                  <p className="text-sm text-purple-200">sistema dos alunos</p>
                </div>
              </div>
              <nav className="mt-10">
                <ul>
                  <li>
                    <a
                      className="flex items-center px-4 py-2 text-purple-600 bg-white rounded-lg font-semibold"
                    >
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
              <button className="bg-purple-700 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                Adicionar Estudante
              </button>
            </header>
    
            <div className="bg-gray-100 border border-gray-300 rounded-lg shadow p-6">
              <p className="text-gray-500 text-center">Nenhum aluno cadastrado.</p>
            </div>
          </main>
        </div>
      );
    }
    
