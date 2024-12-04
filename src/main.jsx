import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";


import { Menu } from './Menu/Menu';
import { Cadastro } from './CriarCadastro/Cadastro'; 

const rotas = createBrowserRouter(
createRoutesFromElements(
  <Route path="/">
    <Route path="" element={<Menu />} />
    <Route path="cadastro" element={<Cadastro />} />
  </Route>
)
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router= {rotas}/>
  </StrictMode>
)



