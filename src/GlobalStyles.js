import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --main-color: ${(props) => (props.darkTheme ? "#0d1117" : "#003366")};
  --secondary-color: ${(props) => (props.darkTheme ? "#161b22" : "#fff")};
  --text-color: #fff;
  --accent-color: #dc843a;
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
