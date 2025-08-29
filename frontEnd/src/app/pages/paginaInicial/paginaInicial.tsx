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

export const PaginaInicial = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "Ranking", key: "nome" },
        { label: "Nome", key: "nome" },
        { label: "Valor", key: "valor" },
        { label: "Resultado", key: "nome" }
    ];

    const [
        modalSelecionarBolaoEstaAberta,
        setModalSelecionarBolaoEstaAberta
    ] = useState(false)
    const [bolaoSelecionado, setBolaoSelecionado] = useState<IObterBolaoData>({} as IObterBolaoData);

    useEffect(() => {
        toast.success(bolaoSelecionado.nomeBolao)
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
                    </ContainerTituloAndButton>
                    <ContainerFiltrosTabela>
                        <ButtonPageInitial
                            className="botaoCadastrarJogos"
                            onClick={() => {

                            }}
                        >

                        </ButtonPageInitial>
                        <ButtonPageInitial
                            className="botaoCadastrarJogos"
                            onClick={() => {

                            }}
                        >

                        </ButtonPageInitial>

                    </ContainerFiltrosTabela>
                    <ContainerCentralPaginaInicial>
                        <ContainerTituloTable>

                            <TabelaDados
                                // dadosJogadores={dados}
                                dadosHeader={dadosHeader}
                                classname="tabelaPaginaInicial"
                            />
                        </ContainerTituloTable>
                        <ContainerTituloTableJogos>
                            <ContainerJogosAtuais>
                                <TituloPage className="titulo">Jogos selecionados</TituloPage>
                                <h2>ran</h2>
                            </ContainerJogosAtuais>
                        </ContainerTituloTableJogos>
                    </ContainerCentralPaginaInicial>
                </ContainerBody>
                {modalSelecionarBolaoEstaAberta && (
                    <ModalListaDeBolao
                        openModal={modalSelecionarBolaoEstaAberta}
                        closeModal={() => setModalSelecionarBolaoEstaAberta(false)}
                        selecionarBolao={setBolaoSelecionado}
                    />
                )}
            </BodyCentral>
        </Fragment>

    )
}