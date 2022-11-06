import { Link, NavLink } from "react-router-dom";
import Container from "../UI/Container";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

import {
  Content,
  Links,
  Logo,
  LogoutBtn,
  Wrapper,
} from "./MainNavigation.styles";

const MainNavigation = () => {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <Wrapper>
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
          </Links>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default MainNavigation;
