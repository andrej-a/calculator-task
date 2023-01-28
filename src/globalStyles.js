import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @font-face {
    font-family: 'HelveticaNeue Regular';
    src: url("./src/assets/fonts/HelveticaNeueRegular.ttf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'HelveticaNeue Regular';
  }

  html, body {
    width: 100vw;
    min-height: 100vh;
    height: auto;
    overflow-x: hidden;
  }

  body {
    & > #root {
      width: 100%;
      min-height: 100vh;
      height: auto;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #c06c84da, #6c5b7bda);

  }

* {
  scrollbar-width: auto;
  scrollbar-color: #434343 transparent;
}

*::-webkit-scrollbar {
  width: 11px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #434343;
  border-radius: 8px;
}
`
