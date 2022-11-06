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

/* =====  ===== */

.welcome-text {
  max-width: 100%;
  width: 80rem;
  margin: 10rem auto;
  background-color: var(--main-color);
  color: var(--text-color);
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
}

.welcome-text h1 {
  text-align: center;
  font-size: 4rem;
}

.welcome-text p {
  font-size: 2rem;
  margin-top: 1.5rem;
}

.welcome-text a {
  color: var(--text-color);
  border-bottom: 1px solid white;
}

.welcome-text-header {
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
  margin-bottom: 5rem;
}

.welcome-text-footer {
  padding-top: 1rem;
  border-top: 1px solid grey;
  margin-top: 5rem;
  text-align: center;
}

@media only screen and (max-width: 800px) {
  html {
    font-size: 50%;
  }
  .welcome-text {
    margin: 5rem auto;
  }
}
`;

export default GlobalStyles;
