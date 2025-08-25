import { Fragment } from "react/jsx-runtime"
import { Header } from "../../shared/components/header/header"
import { ButtonCadastrar, ContainerButton, TituloPage } from "./style"
import { ContainerBody } from "../../shared/components/bodyCentral/style"
import { ApiServiceBolao } from "../../shared/services/ApiServiceBolao"
import { useEffect, useState } from "react"
import type { IObterApostasData } from "../../shared/services/ApiServiceBolao/ControllerApostas/ObterApostas/obterApostas"
import type { IObterJogadoresData } from "../../shared/services/ApiServiceBolao/ControllerJogadores/obterJogadores/obterJogadores"
import { TabelaDados, type IHeaderConfig } from "../../shared/components/Tabela/tabela"
import { FaPlus } from "react-icons/fa"
import ModalCadastrar from "../../shared/components/modal/modal"

export const Jogadores = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "Jogadores", key: "nome" },
        { label: "Ações", key: "actions" }
    ];

    const [
        modalCadastrarNovoJogadorEstaAberta,
        setModalCadastrarNovoJogadorEstaAberta
    ] = useState(false)

    const [
        dados,
        setDados
    ] = useState<IObterJogadoresData[]>([])

    const handleObterJogadores = async() => {
        try {
            const response = await ApiServiceBolao.ControllerJogadores.ObterJogadores()
            if (response) {
                setDados(response.data)
            }
            return response
        } catch (error) {

        }
    }

    useEffect(() => {
        handleObterJogadores()
    }, [])
    useEffect(() => {
        console.log("IRUUUUU", dados)
    }, [dados])

    return (
        <Fragment>
            <Header />
            <ContainerBody>
                <TituloPage>Jogadores</TituloPage>
                <ContainerButton>
                    <ButtonCadastrar
                    onClick={() => setModalCadastrarNovoJogadorEstaAberta(true)}
                    >
                        Novo Jogador
                        <FaPlus size={20} color="white"/>
                    </ButtonCadastrar>
                </ContainerButton>
                <TabelaDados
                    dadosJogadores={dados}
                    dadosHeader={dadosHeader}
                />
            </ContainerBody>

            {modalCadastrarNovoJogadorEstaAberta && (
                <ModalCadastrar
                    openModal={modalCadastrarNovoJogadorEstaAberta}
                    closeModal={() => setModalCadastrarNovoJogadorEstaAberta(false)}
                    onSucess={() => handleObterJogadores()}
                />
            )}

        </Fragment>
    )
}