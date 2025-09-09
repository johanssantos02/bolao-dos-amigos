import { Fragment } from "react/jsx-runtime"
import { Header } from "../../shared/components/header/header"
import { ButtonCadastrar, ContainerButton, TituloPage } from "./style"
import { ContainerBody } from "../../shared/components/bodyCentral/style"
import { ApiServiceBolao } from "../../shared/services/ApiServiceBolao"
import { useEffect, useState } from "react"
import { TabelaDados, type IHeaderConfig } from "../../shared/components/Tabela/tabela"
import { FaPlus } from "react-icons/fa"
import ModalCadastrar from "../../shared/components/modal/modal"
import type { IListarTimesData } from "../../shared/services/ApiServiceBolao/ControllerTimes/ListarTimes/listarTimes"

export const Times = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "Participante", key: "nome" },
        { label: "Ações", key: "actions" }
    ];

    const [
        modalCadastrarNovoJogadorEstaAberta,
        setModalCadastrarNovoJogadorEstaAberta
    ] = useState(false)

    const [
        dadosTimes,
        setDadosTimes
    ] = useState<IListarTimesData[]>([])

    const handleObterTimes = async() => {
        try {
            const response = await ApiServiceBolao.ControllerTimes.ListarTimes()
            if (response) {
                setDadosTimes(response)
            }
            return response
        } catch (error) {
            
        }
    }

    useEffect(() => {
        handleObterTimes()
    }, [])

    return (
        <Fragment>
            <Header />
            <ContainerBody>
                <TituloPage>Times</TituloPage>
                <ContainerButton>
                    <ButtonCadastrar
                    onClick={() => setModalCadastrarNovoJogadorEstaAberta(true)}
                    >
                        Novo Time
                        <FaPlus size={20} color="white"/>
                    </ButtonCadastrar>
                </ContainerButton>
                <TabelaDados
                    dadosTimes={dadosTimes}
                    dadosHeader={dadosHeader}
                />
            </ContainerBody>

            {modalCadastrarNovoJogadorEstaAberta && (
                <ModalCadastrar
                    openModal={modalCadastrarNovoJogadorEstaAberta}
                    closeModal={() => setModalCadastrarNovoJogadorEstaAberta(false)}
                    onSucess={() => handleObterTimes()}
                    tipoDeCadastro={2}
                />
            )}

        </Fragment>
    )
}