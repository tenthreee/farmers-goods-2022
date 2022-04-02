import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorForText};
  }
`;
