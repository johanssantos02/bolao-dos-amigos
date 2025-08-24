import { Fragment, useEffect } from "react";
import { Header } from "../../shared/components/header/header";
import { BodyCentral } from "../../shared/components/bodyCentral/bodyCentral";
import { ContainerBody } from "../../shared/components/bodyCentral/style";
import { TituloPage } from "../jogadores/style";
import { TabelaDados, type IHeaderConfig } from "../../shared/components/Tabela/tabela";
import { ContainerCentralPaginaInicial, ContainerJogosAtuais, ContainerTituloTable, ContainerTituloTableJogos } from "./style";

export const PaginaInicial = () => {

    const dadosHeader: IHeaderConfig[] = [
        { label: "Ranking", key: "nome" },
        { label: "Nome", key: "nome" },
        { label: "Valor", key: "valor" },
        { label: "Resultado", key: "nome" }
    ];


    useEffect(() => {
        fetch('http://localhost:4000/apostas')
            .then(res => res.json())
            .then(data => {
                console.log('Apostas:', data);
                // use o data no seu estado
            })
            .catch(err => {
                console.error('Erro ao buscar apostas:', err);
            });
    }, []);
    return (
        <Fragment>
            <Header />
            <BodyCentral>
                <ContainerBody>
                    <ContainerCentralPaginaInicial>
                        <ContainerTituloTable>
                            <TituloPage className="titulo">Tabela de palpites</TituloPage>
                            <TabelaDados
                                // dadosJogadores={dados}
                                dadosHeader={dadosHeader}
                                classname="tabelaPaginaInicial"
                            />
                        </ContainerTituloTable>
                        <ContainerTituloTableJogos>
                            <TituloPage className="titulo">Jogos selecionados</TituloPage>
                            <ContainerJogosAtuais>
                                <h2>ran</h2>
                            </ContainerJogosAtuais>
                        </ContainerTituloTableJogos>
                    </ContainerCentralPaginaInicial>
                </ContainerBody>

            </BodyCentral>
        </Fragment>

    )
}