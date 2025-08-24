import { Fragment } from "react/jsx-runtime"
import { Header } from "../../shared/components/header/header"
import { TituloPage } from "./style"
import { ContainerBody } from "../../shared/components/bodyCentral/style"
import { ApiServiceBolao } from "../../shared/services/ApiServiceBolao"
import { useEffect, useState } from "react"
import type { IObterApostasData } from "../../shared/services/ApiServiceBolao/ControllerApostas/ObterApostas/obterApostas"
import type { IObterJogadoresData } from "../../shared/services/ApiServiceBolao/ControllerJogadores/obterJogadores/obterJogadores"
import { TabelaDados, type IHeaderConfig } from "../../shared/components/Tabela/tabela"

export const Jogadores = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "Jogadores", key: "nome" },
        { label: "Ações", key: "actions" }
    ];

    const [
        dados,
        setDados
    ] = useState<IObterJogadoresData[]>([])

    const handleObterJogadores = async () => {
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
                <TabelaDados
                    dadosJogadores={dados}
                    dadosHeader={dadosHeader}
                />
            </ContainerBody>

        </Fragment>
    )
}