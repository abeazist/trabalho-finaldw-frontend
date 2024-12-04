<<<<<<<< HEAD:src/CriarCadastro/Cadastro.jsx

export default function Cadastro() {
========
export default function CriarConta() {
>>>>>>>> 5dba2d5bbb3e91eccc88c403867384b5f9ab2677:src/componentes/CriarConta/CriarConta.jsx
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
      <div className="flex flex-col items-center rounded-3xl bg-white h-[480px] w-[430px] p-6">
        <div className="flex  justify-center items-center gap-2 mt-4 w-full">
          <div className="bg-violet-900 w-1 h-6"></div>
          <h1 className="text-2xl font-bold">CADASTRO ALUNOS</h1>
        </div>
<<<<<<<< HEAD:src/CriarCadastro/Cadastro.jsx
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

          <button className=" text-xs w-full bg-purple-900 text-white p-1 h-9 rounded-sm">CADASTRAR</button>
========
        <p className="  mt-8 text-black font-bold">LOGIN</p>
        <p className="text-gray-400 text-xs text-center">INSIRA SUAS CREDENCIAIS PARA ACESSAR SUA CONTA</p>
        <br />

        <div className= " w-full">
          <label className=" text-gray-500 block text-sm mb-1 mt-8" htmlFor="email">Email</label>
          <input  className=" w-full border border-gray-300 rounded-md p-2 mb-8 focus:outline-none placeholder:text-sm" placeholder="Entre com o seu email" type="text" />

          <label className=" text-gray-500 block text-sm mb-1" htmlFor="email">Senha</label>
          <input className="w-full border border-gray-300 rounded-md p-2 mb-8 focus:outline-none placeholder:text-sm" placeholder="Entre com a sua senha" type="password" />

          <button className=" text-xs w-full bg-purple-900 text-white p-1 h-9 rounded-sm">ENTRAR</button>
          <p className=" flex justify-center text-sm text-gray-500 p-1 mt-4">Esqueçeu a senha? <p className="text-white">a</p><a className=" text-purple-400 text-decoration-line: underline" href=""> Redefinir senha</a></p>
>>>>>>>> 5dba2d5bbb3e91eccc88c403867384b5f9ab2677:src/componentes/CriarConta/CriarConta.jsx
        </div>

      </div>

    </div>
  );
}
