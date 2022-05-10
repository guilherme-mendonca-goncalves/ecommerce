import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }

    html {
      height: 100%;
    }

    body {
      background-color: ${theme.colors.light};
      height: 100%;
      font-family: Arial;
    }

    #__next {
      height: 100%;
    }

    a {
      color: ${theme.colors.gray}
    }

    ul {
      list-style: none;
    }
  `}
`;

export default GlobalStyle;
