import { useNavigate } from "react-router-dom"
import { ContainerHeader, ContainerLogo, NavBar } from "./style"
import { PaginaInicial } from "../../../pages/paginaInicial/paginaInicial"


export const Header = () => {

    const Navigate = useNavigate()


    return (
        <ContainerHeader>
            <ContainerLogo>
                <h3>
                    Bolão dos amigos
                </h3>
            </ContainerLogo>

            <NavBar>
                <h4 onClick={() => Navigate("/")}>
                    Inicio
                </h4>
                <h4 onClick={() => Navigate("/Historico-apostas")}>
                    Histórico
                </h4>
                <h4 onClick={() => Navigate("/Participantes")}>
                    Cadastrar Participantes
                </h4>
                <h4 onClick={() => Navigate("/Times")}>
                    Cadastrar Times
                </h4>
            </NavBar>
        </ContainerHeader>
    )
}