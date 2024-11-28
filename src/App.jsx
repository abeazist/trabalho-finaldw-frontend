export default function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
      <div className="flex flex-col items-center rounded-3xl bg-white h-96 w-80 p-6">
        <div className="flex  justify-center items-center gap-2 w-full">
          <div className="bg-violet-900 w-1 h-6"></div>
          <h1 className="text-2xl font-bold">CRUD OPERAÇÕES</h1>
        </div>
        <p className="  mt-4 text-black ">LOGIN</p>
        <p className="text-gray-400 text-xs text-center">INSIRA SUAS CREDENCIAIS PARA ACESSAR SUA CONTA</p>
        <br />

        <div className= " w-full">
          <label className=" text-gray-500 block text-sm mb-1" htmlFor="email">Email</label>
          <input  className=" w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" type="text" />

          <label className=" text-gray-500 block text-sm mb-1" htmlFor="email">Senha</label>
          <input className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none" type="password" />

          <button className="w-full bg-purple-900 text-white p-1 h-9 rounded-sm">ENTRAR</button>
          <p className=" flex justify-center text-gray-500">Esqueçeu a senha? <p className="text-white">a</p><a className=" text-purple-400 text-decoration-line: underline" href=""> Redefinir senha</a></p>
        </div>

      </div>

    </div>
  );
}
