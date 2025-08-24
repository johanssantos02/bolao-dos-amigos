import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --verde-escuro: #034159;
    --verde-header: #038C3E;
    --verde-claro: #0CF25D;
    --branco: #ffffff;
    --cinza-claro: #f5f5f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: var(--cinza-claro);
    color: var(--verde-escuro);
  }
`;