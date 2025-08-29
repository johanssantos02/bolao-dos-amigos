import styled from "styled-components";


export const HeaderModal = styled.header`

    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--verde-claro);
    color: white;
    border-radius: 5px 5px 0 0;
`

export const Bolao = styled.li`

    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    border-bottom: solid 1px #ccc;
    text-align: center;
    font-size: 18px;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: #ccc;
    }

`

export const BodyModal = styled.div`

    height: calc(100% - 4.1em);
    width: 100%;
    overflow-y: scroll;


`