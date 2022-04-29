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
      background-color: ${theme.colors.white};
      height: 100%;
    }
    #__next {
      height: 100%;
    }
    a {
      color: ${theme.colors.gray}
    }
  `}
`;

export default GlobalStyle;
