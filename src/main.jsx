import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Cadastro from './CriarCadastro/cadastro';
import Menu from './Menu/Menu';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cadastro />
    <Menu/>
  </StrictMode>,
)
