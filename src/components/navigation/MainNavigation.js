import { Link, NavLink } from "react-router-dom";
import Container from "../UI/Container";
import { AuthContext } from "../../context/auth-context";
import { useContext, useState } from "react";
import GlobalStyles from "../../GlobalStyles";

import {
  Content,
  Links,
  Logo,
  LogoutBtn,
  Wrapper,
  MoonBtn,
  SunBtn,
} from "./MainNavigation.styles";

const MainNavigation = () => {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Wrapper>
      <GlobalStyles darkTheme={darkMode} />

      <Container>
        <Content>
          <Link to="/">
            <Logo>Itidaru</Logo>
          </Link>

          <Links>
            {!isLoggedIn && (
              <li>
                <NavLink to="/auth">Auth</NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/my-todos">My Todos</NavLink>
              </li>
            )}
            {isLoggedIn && <LogoutBtn onClick={logoutUser}>Logout</LogoutBtn>}
            <li onClick={darkModeHandler}>
              {darkMode && <SunBtn />} {!darkMode && <MoonBtn />}
            </li>
          </Links>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default MainNavigation;
