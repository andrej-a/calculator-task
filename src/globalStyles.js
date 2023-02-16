import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url("https://fonts.cdnfonts.com/css/helvetica-neue-9");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Helvetica Neue';
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
`;
