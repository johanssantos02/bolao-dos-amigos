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
    margin: 10px auto;

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