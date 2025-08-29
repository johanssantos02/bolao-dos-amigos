import styled from "styled-components";

export const ContainerCentralPaginaInicial = styled.div`

    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    border: 1px solid black;
    gap: 15px;
    /* align-items: center; */

    .tabelaPaginaInicial{
        width: 100%;
        max-height: 65vh;
        border: white 1px solid;

        thead{
            tr{
                
                th{
                    height: 30px;
                    font-size: 1em;
                    &:nth-of-type(1){
                        /* background-color: red; */
                        width: calc(100% / 4);
                    }
                }
            }
        }
    }


`

export const ContainerJogosAtuais = styled.div`

    width: 80%;
    height: 65vh;
    background-color: var(--verde-escuro);
    margin: 0 auto;

`

export const ContainerTituloTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 60%;
    border: solid 1px red;

    .titulo{
        font-size: 1.5em;
        margin: 10px auto;
        width: 100%;
        font-weight: 400;
    }

`
export const ContainerTituloTableJogos = styled.div`

    display: flex;
    flex-direction: column;
    width: 30%;
    border: solid 1px red;

     .titulo{
        font-size: 1.5em;
        margin: 5px auto;
        width: 100%;
        font-weight: 400;
    }

`
export const ContainerFiltrosTabela = styled.div`

    width: 91%;
    height: 50px;
    border: solid 1px yellow;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .botaoCadastrarJogos{
        background-color: var(--verde-claro);
        width: 220px;
        height: 40px;
    }


`
export const ButtonPageInitial = styled.button`

    width: 18%;
    height: 35px;
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    border: none;
    border-radius: 4px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background-color: #02735E;
    color: white;
    font-size: 1em;
    position: absolute;
    right: 2em;
`

export const ContainerTituloAndButton = styled.div`

    width: 91%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    border: solid 1px red;
    margin: 0 auto;
`