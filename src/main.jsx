import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { Cadastro } from './CriarCadastro/Cadastro'; 

export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/CriarCadastro/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
