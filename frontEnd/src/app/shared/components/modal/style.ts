import styled from "styled-components";



export const HeaderModal = styled.div`

    width: 100%;
    height: 65px;
    background-color: var(--verde-claro);
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        text-align: center;
    }

`

export const InputComLabel = styled.div`

    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;

`

export const Label = styled.label`

`
export const Input = styled.input`
    width: 80%;
    height: 35px;
    border: solid 1px black;
    border-radius: 4px;
    padding-left: 10px;
     
    &::placeholder{
    }
`

export const ButtonConfirmarCadastro = styled.button`
    width: 100%;
    height: 35px;
    color: white;
    background-color: var(--verde-escuro);
    border: none;
    border-radius: 5px;
`