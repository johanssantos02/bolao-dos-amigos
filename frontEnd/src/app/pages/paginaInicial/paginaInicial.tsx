import { Fragment, useEffect, useState } from "react";
import { Header } from "../../shared/components/header/header";
import { BodyCentral } from "../../shared/components/bodyCentral/bodyCentral";
import { ContainerBody } from "../../shared/components/bodyCentral/style";
import { TituloPage } from "../jogadores/style";
import { TabelaDados, type IHeaderConfig } from "../../shared/components/Tabela/tabela";
import { ButtonPageInitial, ContainerCentralPaginaInicial, ContainerFiltrosTabela, ContainerJogosAtuais, ContainerTituloAndButton, ContainerTituloTable, ContainerTituloTableJogos } from "./style";
import ModalListaDeBolao from "../../shared/components/modalListaDeBolao/modalListaDeBolao";
import type { IObterBolaoData } from "../../shared/services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao";
import { toast } from "react-toastify";
import { FaGear } from "react-icons/fa6";
import ModalDeVinculos from "../../shared/components/modalDeVinculos/modalDeVinculos";
import { ApiServiceBolao } from "../../shared/services/ApiServiceBolao"; import type { IObterPartidasData } from "../../shared/services/ApiServiceBolao/ControllerPartidas/obterPartidas";
import { IoFootball } from "react-icons/io5";
import type { IObterParticipantesData } from "../../shared/services/ApiServiceBolao/ControllerParticipantesBolao/obterParticipantesBolao";
import ModalVencedor from "../../shared/components/modalAtualizarTimeVencedor/modalCadastrarPalpites";

export interface ITipoDeVinculoProps {
    nomeVinculo: string,
    idVinculo: number
}


export const PaginaInicial = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "idJogador", key: "nome" },
        { label: "Nome", key: "nome" },
        // { label: "Valor", key: "valor" },
        { label: "Resultado", key: "nome" }
    ];

    const [
        modalSelecionarBolaoEstaAberta,
        setModalSelecionarBolaoEstaAberta
    ] = useState(false)

    const [
        bolaoSelecionado,
        setBolaoSelecionado
    ] = useState<IObterBolaoData>({} as IObterBolaoData);

    const [
        partidasBolao,
        setPartidasBolao
    ] = useState<IObterPartidasData[]>([]);

    const [
        modalDeVinculosEstaAberta,
        setModalDeVinculosEstaAberta
    ] = useState(false);

    const [
        modalCadastrarResultadosEstaAberta,
        setModalCadastrarResultadosEstaAberta
    ] = useState(false)

    const [
        tipoDeVinculoSelecionado,
        setTipoDeVinculoSelecionado
    ] = useState<ITipoDeVinculoProps>({
        idVinculo: 0,
        nomeVinculo: ""
    });

    const [
        participantesBolao,
        setParticipantesBolao
    ] = useState<IObterParticipantesData[]>([]);

    const handleObterParticipantes = async () => {

        if (!bolaoSelecionado) return;
        try {
            const response = await ApiServiceBolao.ControllerParticipantesBolao.ObterParticipantesDoBolao(
                bolaoSelecionado.idBolao
            )
            toast.success("Jogadores encontrados")
            setParticipantesBolao(response)
            return response
        } catch (error) {
            toast.error('error')
        }
    }
    const handleObterPartidas = async () => {

        if (!bolaoSelecionado) return;
        try {
            const response = await ApiServiceBolao.ControllerPartidas.ObterPartidas(
                bolaoSelecionado.idBolao
            )
            toast.success("Partidas encontradas!")
            setPartidasBolao(response)
            return response
        } catch (error) {
            toast.error('error')
        }
    }

    useEffect(() => {
        handleObterParticipantes()
        handleObterPartidas()
    }, [bolaoSelecionado])

    useEffect(() => {

        const dadosStorage = localStorage.getItem("idBolao")
        if (!dadosStorage) return;
        const dados = JSON.parse(dadosStorage)
        setBolaoSelecionado(dados)
    }, [])

    useEffect(() => {
        console.log('dados jogadores', participantesBolao)
    }, [participantesBolao])

    useEffect(() => {
        const dadosStorage = JSON.stringify(bolaoSelecionado)
        localStorage.setItem("idBolao", dadosStorage)
    }, [bolaoSelecionado])


    return (
        <Fragment>
            <Header />
            <BodyCentral>
                <ContainerBody>
                    <ContainerTituloAndButton>
                        <TituloPage className="titulo">Tabela de palpites</TituloPage>
                        <ButtonPageInitial
                            onClick={() => {
                                setModalSelecionarBolaoEstaAberta(true)
                            }}
                        >Selecionar Bolão
                        </ButtonPageInitial>
                        <FaGear
                            size={35}
                            color="white"
                            style={{
                                left: "20%",
                                position: "absolute"

                            }}
                        />
                    </ContainerTituloAndButton>
                    <ContainerFiltrosTabela>
                        <ButtonPageInitial
                            className="botaoCadastrarJogos"
                            onClick={() => {
                                setModalDeVinculosEstaAberta(true)
                                setTipoDeVinculoSelecionado({
                                    nomeVinculo: "partida",
                                    idVinculo: 1
                                })
                            }}
                        >
                            <IoFootball size={25} color="black" />
                            Vincular Partidas
                        </ButtonPageInitial>
                        <ButtonPageInitial
                            className="botaoCadastrarJogadores"
                            onClick={() => {
                                setModalDeVinculosEstaAberta(true)
                                setTipoDeVinculoSelecionado({
                                    nomeVinculo: "jogador",
                                    idVinculo: 2
                                })
                            }}
                        >
                            Vincular Participantes
                        </ButtonPageInitial>
                        <ButtonPageInitial
                            className="botaoFinalizarBolao"
                            onClick={() => {

                            }}
                        >
                            Finalizar Bolão
                        </ButtonPageInitial>

                    </ContainerFiltrosTabela>
                    <ContainerCentralPaginaInicial>
                        <ContainerTituloTable>

                            <TabelaDados
                                dadosJogadoresBolao={participantesBolao}
                                dadosHeader={dadosHeader}
                                classname="tabelaPaginaInicial"
                                dadosBolaoSelecionado={bolaoSelecionado}
                            />
                        </ContainerTituloTable>
                        <ContainerTituloTableJogos>
                            <ContainerJogosAtuais>
                                <TituloPage className="titulo">Jogos selecionados</TituloPage>
                                {partidasBolao.map((p) => (

                                    <h2 style={{ color: "white", marginLeft: "20px" }}>{p.nomeTime1} vs {p.nomeTime2}</h2>

                                ))}
                            </ContainerJogosAtuais>
                        </ContainerTituloTableJogos>
                    </ContainerCentralPaginaInicial>
                    <ButtonPageInitial
                        className="botaoCadastrarResultados"
                        onClick={() => setModalCadastrarResultadosEstaAberta(true)}
                    >
                        Cadastrar Resultados das Partidas
                    </ButtonPageInitial>
                </ContainerBody>
                {modalSelecionarBolaoEstaAberta && (
                    <ModalListaDeBolao
                        openModal={modalSelecionarBolaoEstaAberta}
                        closeModal={() => setModalSelecionarBolaoEstaAberta(false)}
                        selecionarBolao={setBolaoSelecionado}
                    />
                )}
                {modalDeVinculosEstaAberta && (
                    <ModalDeVinculos
                        openModal={modalDeVinculosEstaAberta}
                        closeModal={() => setModalDeVinculosEstaAberta(false)}
                        tipoDeVinculo={tipoDeVinculoSelecionado}
                        dadosBolao={bolaoSelecionado}
                        onSuccess={handleObterPartidas}

                    />
                )}
                {modalCadastrarResultadosEstaAberta && (
                    <ModalVencedor
                    openModal={modalCadastrarResultadosEstaAberta}
                    closeModal={() => setModalCadastrarResultadosEstaAberta(false)}
                    onSuccess={() => {}}
                    dadosBolao={bolaoSelecionado}
                    // dadosJogador={() => {}}
                    />
                )}
            </BodyCentral>
        </Fragment>

    )
}