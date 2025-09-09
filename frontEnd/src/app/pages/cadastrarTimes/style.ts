import styled from "styled-components";



export const TituloPage = styled.h1`

    width: 20%;
    height: 30px;
    /* border: solid 1px red; */
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    color: white;
    font-weight: 400;
    font-size: 1.5em;
`
export const ContainerButton = styled.div`

    width: 60%;
    height: auto;
    display: flex;
    justify-content: end;
    margin: 10px auto;
    
`

export const ButtonCadastrar = styled.button`

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
    background-color: var(--verde-claro);
    color: white;
    font-size: 1em;
`