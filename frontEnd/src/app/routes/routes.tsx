import { Route, Routes } from "react-router-dom"
import { PaginaInicial } from "../pages/paginaInicial/paginaInicial"
import { Historico } from "../pages/historicoDeApostas/historico"
import { Jogadores } from "../pages/jogadores/jogadores"


export default function Rotas() {


    return (
        <Routes>

            <Route path="/pagina-inicial" element={<PaginaInicial />}/>

            <Route path="/Historico-apostas" element={<Historico/>}/>

            <Route path="/Jogadores" element={<Jogadores/>}/>

            <Route path="*" element={<PaginaInicial/>}/>

        </Routes>

    )
}