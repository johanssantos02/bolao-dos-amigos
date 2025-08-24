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
                    Bolão
                </h4>
                <h4 onClick={() => Navigate("/Historico-apostas")}>
                    Histórico
                </h4>
                <h4 onClick={() => Navigate("/Jogadores")}>
                    Cadastrar Jogador
                </h4>
            </NavBar>
        </ContainerHeader>
    )
}