import React from "react";
import { Link } from "react-router-dom";

export function Cadastro() {


  // const [nome, setNome] = useState("")
  // const [email, setEmail] = useState("")
  // const [telefone, setTelefone] = useState("")
  // const [endereco, setEndereco] = useState("")

  // const [tarefaNova, setTarefaNova] = useState("");
  const { adicionarTarefa } = useContext(TarefasContext);



  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
      <div className="flex flex-col items-center rounded-3xl bg-white h-[550px] w-[450px] p-6">
        <div className="flex  justify-center items-center gap-2 mt-4 w-full">
          <div className="bg-violet-900 w-1 h-6"></div>
          <h1 className="text-2xl font-bold">CADASTRO ALUNOS</h1>
        </div>
        <p className="  mt-4 text-black ">CADASTRAR</p>
        <p className="text-gray-400 text-xs text-center">INSIRA OS CAMPOS A SEGUIR PARA CRIAR SUA CONTA</p>
        <br />

        <div className= " w-full">
          <label className=" text-gray-500 block text-sm mb-1" htmlFor="nome">Nome</label>
          <input  className=" w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" type="text" />

          <label className=" text-gray-500 block text-sm mb-1" htmlFor="email">Email</label>
          <input className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" type="text" />

          <label className=" text-gray-500 block text-sm mb-1" htmlFor="telefone">Telefone </label>
          <input className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" type="text" />

          <label className=" text-gray-500 block text-sm mb-1" htmlFor="text">Endereço</label>
          <input className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" type="text" />

          <button
          onClick={() =>{
            adicionarTarefa
          }}
          className=" text-xs w-full bg-purple-900 text-white p-1 h-9 rounded-sm">CADASTRAR</button>
          <a className="flex justify-center text-purple-600 py-1 text-sm" href="/"><p>IR PARA O SISTEMA DE EDIÇÃO</p></a>
        </div>

      </div>

    </div>
  );
}
