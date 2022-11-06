import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --main-color: #0d1117;
  --secondary-color: #161b22;
  --text-color: #fff;
  
  /* --main-color: ${(props) =>
    props.darkTheme ? "palevioletred" : "white"}; */

  /* #161b22 svetlija */
  /* #0d1117 tamnija */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: scroll;
  font-size: 62.5%;
}

body {
  background-color: var(--secondary-color);
  font-family: "Courier New", Courier, monospace;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  font: inherit;
}

@media only screen and (max-width: 800px) {
  html {
    font-size: 50%;
  }
}
`;

export default GlobalStyles;
