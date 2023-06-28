import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
           
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route path="/" element={<Inicio />}></Route>
                            <Route path="/favoritos" element={<Favoritos />}></Route>
                            <Route path='/:id' element={<Player />} />
                            <Route path='*' element={<NaoEncontrada />} />                    
                        </Route>
                    </Routes>
            
        </BrowserRouter>
    )
}

export default AppRoutes;