import styled from "styled-components";



export const Tabela = styled.table`
    width: 60%;
    margin: 0 auto;
    /* border: solid 1px black; */
    /* border-collapse: collapse; */
    border-spacing: 0 5px;
`
export const THead = styled.thead`
    width: 100%;
    background-color: var(--verde-header);
    color: white;
`
export const Tr = styled.tr`
    /* width: 100%; */
    /* background-color: yellow; */

    .headerJogadores{

        color: white;
        font-size: 1.3em;
        font-weight: 500;
        &:nth-of-type(1){
            width: 80%;
            /* border: solid 1px black; */
            
        }
        &:nth-of-type(2){
            width: 20%;
            /* border: solid 1px black; */
        }
    }

    .tdJogadores{

        background-color: rgba(163, 181, 182, 0.5);
        text-align: center;
        font-size: 14px;
        color: white;
        text-transform: uppercase;
        &:nth-of-type(1){
            width: 80%;
            /* border: solid 1px black; */
            height: 40px;
            margin-top: 5px;
        }
        &:nth-of-type(2){
            width: 20%;
            /* border: solid 1px black; */
            height: 40px;
            margin-top: 5px;
        }
    }

    .tdBolao{

        background-color: rgba(163, 181, 182, 0.5);
        text-align: center;
        font-size: 13px;
        color: white;
        text-transform: uppercase;
        width: 25%;
        /* border: solid 1px black; */
        height: 35px;
        margin-top: 5px;
        
    }

`
export const Th = styled.th`
    /* width: 100%; */
    height: 35px;
    font-size: 1em;
    font-weight: 500;
`
export const TBody = styled.tbody`
    width: 100%;
    height: 100%;
    background-color: #025951c0;
`
export const Td = styled.td`
    height: 35px;
    /* border: solid 1px black; */
`