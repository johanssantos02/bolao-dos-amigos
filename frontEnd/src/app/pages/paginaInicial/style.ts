import styled from "styled-components";

export const ContainerCentralPaginaInicial = styled.div`

    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    gap: 15px;
    /* align-items: center; */

    .tabelaPaginaInicial {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  height: calc(100% - 5.5vh);
}

.tabelaPaginaInicial thead {
  display: table;
  /* width: calc(100% - 6px); */
  table-layout: fixed;
}

.tabelaPaginaInicial tbody {
  display: block;
  max-height: 560px;
  overflow-y: auto;
  width: calc(100% - 0px);

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.tabelaPaginaInicial tbody::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.tabelaPaginaInicial tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.tabelaPaginaInicial th,
.tabelaPaginaInicial td {
  padding: 5px 10px;
  text-align: center;
  border: 1px solid #ddd;
}

/* larguras fixas por coluna */
.tabelaPaginaInicial th:nth-of-type(1),
.tabelaPaginaInicial td:nth-of-type(1) {
  width: 20%;
  
}

.tabelaPaginaInicial th:nth-of-type(2),
.tabelaPaginaInicial td:nth-of-type(2) {
  width: 50%;
}

.tabelaPaginaInicial th:nth-of-type(3),
.tabelaPaginaInicial td:nth-of-type(3) {
  width: 25%;
}


`

export const ContainerJogosAtuais = styled.div`

    width: 80%;
    height: 65vh;
    background-color: rgba(2, 89, 81, 0.8);
    margin: 0 auto;
    overflow-y:auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2{
        font-weight: 400;
    }
`

export const ContainerTituloTable = styled.div`

    display: flex;
    flex-direction: column;
    width: 60%;

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
    /* overflow-y: scroll; */
     .titulo{
        font-size: 1.5em;
        margin: 5px auto;
        width: 100%;
        font-weight: 600;
    }

`
export const ContainerFiltrosTabela = styled.div`

    width: 91%;
    height: 50px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .botaoCadastrarJogos{
        background-color: #FFD500;
        width: 200px;
        height: 35px;
        position: relative;
        right: 0;
        margin-right: 0;
        font-size: 18px;
        cursor: pointer;
        color: black;
        border-radius: 10px;
    }
    .botaoCadastrarJogadores{
        background-color: var(--verde-claro);
        width: 200px;
        height: 35px;
        position: relative;
        right: 0;
        margin-right: 0;
        font-size: 18px;
        cursor: pointer;
        color: black;
        border-radius: 10px;
    }
    .botaoFinalizarBolao{
        background-color: #FF1A1A;
        width: 200px;
        height: 35px;
        position: relative;
        right: 0;
        margin-right: 0;
        font-size: 18px;
        cursor: pointer;
        color: black;
        border-radius: 10px;
    }


`
export const ButtonPageInitial = styled.button`

    width: 18%;
    height: 40px;
    margin-right: 8%;
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
    border-radius: 10px;
`

export const ContainerTituloAndButton = styled.div`

    width: 91%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 0 auto;
`