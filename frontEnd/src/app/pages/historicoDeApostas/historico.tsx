import { Fragment } from "react/jsx-runtime"
import { Header } from "../../shared/components/header/header"
import { BodyCentral } from "../../shared/components/bodyCentral/bodyCentral"
import { TabelaDados, type IHeaderConfig } from "../../shared/components/Tabela/tabela"
import { TituloPage } from "../jogadores/style"
import { ApiServiceBolao } from "../../shared/services/ApiServiceBolao"
import { useEffect, useState } from "react"
import type { IObterBolaoData } from "../../shared/services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao"
import { ContainerHistorico } from "./style"


export const Historico = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "IdBolao", key: "id" },
        { label: "NomeBolao", key: "nome" },
        { label: "Data de Criação", key: "data" },
        { label: "Situação Bolão", key: "actions" },

    ];

    const [
        dadosBolao,
        setDadosBolao
    ] = useState<IObterBolaoData[]>([])

    const handleObterDadosBolao = async () => {
        try {
            const response = await ApiServiceBolao.ControllerBolao.ObterBolao()
            setDadosBolao(response)
            return response
        } catch (error) {

        }
    }

    useEffect(() => {
        handleObterDadosBolao()
    }, [])

    return (
        <Fragment>
            <Header />
            <BodyCentral>
                <ContainerHistorico>
                    <TituloPage>Historico de bolão</TituloPage>
                    <TabelaDados
                        dadosHeader={dadosHeader}
                        dadosBolao={dadosBolao}
                        classname="tabelaHistorico"
                    />
                </ContainerHistorico>
            </BodyCentral>
        </Fragment>
    )
}