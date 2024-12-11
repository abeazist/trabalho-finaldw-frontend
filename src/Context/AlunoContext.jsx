import React, { createContext, useContext, useState } from "react";

const AlunoContext = createContext();

export function useAlunoContext() {
  return useContext(AlunoContext);
}

export function AlunoProvider({ children }) {
  const [alunos, setAlunos] = useState([]); 
  const [alunoSelecionado, setAlunoSelecionado] = useState(""); 
  
  const deletarAluno = (id) => {
    setAlunos(alunos.filter((aluno) => aluno.id !== id));

  };

  return (
    <AlunoContext.Provider
      value={{
        alunos,
        setAlunos,
        alunoSelecionado,
        setAlunoSelecionado,
        deletarAluno,
      }}
    >
      {children}
    </AlunoContext.Provider>
  );
}
