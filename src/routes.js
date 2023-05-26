import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from './componentes/menu';
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "componentes/post";
import NaoEncontrado from "paginas/paginanaoencotrada";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Sobremim" element={<SobreMim/>} />
        </Route>

        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
