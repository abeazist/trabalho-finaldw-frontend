import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { AlunoProvider } from "./Context/AlunoContext";

import { Menu } from './SistemaEdicao/SistemaEdicao';
import { Cadastro } from './CriarCadastro/Cadastro'; 
import Editar from "./Editar/Editar";

const rotas = createBrowserRouter(
createRoutesFromElements(
  <Route path="/">
    <Route path="" element={<Menu />} />
    <Route path="cadastro" element={<Cadastro />} />
    <Route path="edicao" element={<Editar />} />
  </Route>
)
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlunoProvider>
      <RouterProvider router={rotas} />
    </AlunoProvider>
  </StrictMode>
)



