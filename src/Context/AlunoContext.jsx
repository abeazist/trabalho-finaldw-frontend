import React, { createContext, useContext, useState } from "react";

const AlunoContext = createContext();

export function useAlunoContext(){
    return useContext(AlunoContext)
} 

export function AlunoProvider ({ children }) {
    const [alunoSelecionado, setAlunoSelecionado] = useState("")

    return (
        <AlunoContext.Provider value={{ alunoSelecionado, setAlunoSelecionado }}>
            {children}
        </AlunoContext.Provider>
    )
}
