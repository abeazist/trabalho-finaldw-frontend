import React, { useState } from "react";
import { useAlunoContext } from "../Context/AlunoContext"

export default function Editar(){

    const [nome, setNome] = useState("Ana")
    const [email, setEmail] = useState("ana@gmail.com")
    const [telefone, setTelefone] = useState("999022221")
    const [endereco, setEndereco] = useState("rua x, n° 20")

    return(
        <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
            <div className="flex flex-col items-center rounded-3xl bg-white h-[550px] w-[450px] p-6">
                <div className="flex  justify-center items-center gap-2 mt-4 w-full">
                    <div className="bg-violet-900 w-1 h-6"></div>
                    <h1 className="text-2xl font-bold">EDITAR ALUNO</h1>
                </div>
                <p className="  mt-4 text-black ">EDITAR</p>
                <p className="text-gray-400 text-xs text-center">EDITE OS DADOS A SEGUIR PARA CONCLUIR AS ALTERAÇÕES</p>
                <br />

                <div className= " w-full">
                    <label className=" text-gray-500 block text-sm mb-1" htmlFor="nome">Nome</label>
                    <input  
                        className=" w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" 
                        type="text" 
                        id = "nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label className=" text-gray-500 block text-sm mb-1" htmlFor="email">Email</label>
                    <input 
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" 
                        type="email" 
                        id = "email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className=" text-gray-500 block text-sm mb-1" htmlFor="telefone">Telefone </label>
                    <input 
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" 
                        type="text" 
                        id = "telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />

                    <label className=" text-gray-500 block text-sm mb-1" htmlFor="text">Endereço</label>
                    <input 
                        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" 
                        type="text" 
                        id = "endereco"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />

                    <button className=" text-xs w-44 bg-purple-900 text-white p-1 h-9 ml-3 rounded-sm">CANCELAR</button>
                    <button className=" text-xs w-44 bg-purple-900 text-white p-1 h-9 ml-5 mr-3 rounded-sm">CONFIRMAR</button>
                </div>

            </div>

        </div>
    );

    
}