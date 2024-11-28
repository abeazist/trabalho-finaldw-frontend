export default function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
      <div className="flex flex-col items-center rounded-3xl bg-white h-96 w-80 p-6">
        <div className="flex  justify-center items-center gap-2 w-full">
          <div className="bg-violet-500 w-1 h-6"></div>
          <h1 className="text-2xl font-bold">CRUD OPERAÇÕES</h1>
        </div>
        <p className=" py-2 mt-4 text-black ">LOGIN</p>
        <p className="text-gray-400 text-xs">INSIRA SUAS CREDENCIAIS PARA ACESSAR SUA CONTA</p>
      </div>
    </div>
  );
}
