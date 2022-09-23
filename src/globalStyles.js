import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`

  @font-face {
    font-family: 'HelveticaNeue Regular';
    src: url("./assets/fonts/HelveticaNeueRegular.ttf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'HelveticaNeue Regular';
    font-weight: 400;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #c06c84da, #6c5b7bda);
  }
`
