import styled from "styled-components";


export const HeaderModal = styled.header`

    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--verde-claro);
    color: white;
    border-radius: 25px 25px 0 0;
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
    overflow-y: auto;

    .botaoVincularJogo{
        width: 40%;
        height: 40px;
        margin: 0 auto;
    }
    .botaoVincularParticipantes{
        width: 55%;
        height: 40px;
        margin: 30px auto;
        position: relative;
        cursor: pointer;
        /* display: block; */
    }


`
export const ContainerInputsInline = styled.div`

    width: 100%;
    height: 250px;
    /* margin-top: 120px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`
export const Ul = styled.ul`

    width: 100%;
    height: 30px;
    border: solid 1px #ccc;
    /* display: flex;
    align-items: center;
    justify-content: center; */

`
export const Li = styled.li`
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerDados = styled.div`

    width: 100%;
    height: calc(100% - 5em);

    h3{
        background-color: #dfddddff;
        height: 30px;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    h2{
        text-align: center;
        margin-top: 20px;
        font-size: 1.3em;
    }

    .containerPalpite{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        align-items: center;
        height: 30px;
        padding: 0 20px;

        span{
            font-size: 18px;
        }
    }

    .containerPalpite:nth-child(odd) {
        background-color: #dfddddff;
    }

    .containerPalpite:nth-child(even) {
        background-color: #ffffff;
    }
    /* margin-top: 10px; */
`