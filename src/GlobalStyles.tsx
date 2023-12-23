import { createGlobalStyle } from 'styled-components';

export const primaryColor = '#859ec8';
export const secondaryColor = '#ffffdd';
export const accentColor = '#8080a2';
export const lightColor = '#ebffff';
export const textColor = '#FFFFFF';

const GlobalStyles = createGlobalStyle `

    * {
    margin: 0;
    padding: 0;
    color: ${textColor}


    }

    html,
    body {
        background-color: ${primaryColor};
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    p,
    h1,
    h2,
    h3,
    li,
    ul,
    a {
        color: ${textColor};
        font-family: 'Fira Code';
    
    }

    p,
    li,
    ul,
    a {
        @media (max-width: 580px) {
            font-size: 0.8rem;
        }
    }



    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; 
    }
    ::-webkit-scrollbar-thumb {
            background: #FF0000;
        }
`

export default GlobalStyles;