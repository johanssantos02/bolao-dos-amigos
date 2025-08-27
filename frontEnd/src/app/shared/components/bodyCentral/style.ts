import styled from "styled-components";
import backImg from "../../assets/estadio-de-futebol-a-noite.webp"



export const ContainerBody = styled.div`

    width: 100%;
    height: auto;
    min-height: 100vh;
    overflow: auto;
    position: relative;

     &::before {
    content: '';
    position: absolute; /* Essencial para o posicionamento */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    opacity: 1; /* Ajuste este valor para a opacidade desejada (0 a 1) */
    z-index: -1;
     }

`