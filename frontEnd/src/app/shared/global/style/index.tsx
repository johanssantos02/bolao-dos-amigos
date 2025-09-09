import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --verde-escuro: #034159;
    --verde-escuro-transparente: rgba(3, 65, 89, 0.8);
    --verde-header: #038C3E;
    --verde-header-transparente: rgba(3, 140, 62, 0.8);
    --verde-claro: #0CF25D;
    --verde: #025951;
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