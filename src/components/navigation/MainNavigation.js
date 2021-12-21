import { NavLink } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./MainNavigation.module.css";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

const MainNavigation = () => {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <section className={classes["main-navigation"]}>
      <Container>
        <div className={classes["navigation-content"]}>
          <div className={classes["navigation-logo-box"]}>
            <h1>Todos</h1>
          </div>

          <ul className={classes["navigation-links"]}>
            <li>
              <NavLink to="/" exact activeClassName={classes["active"]}>
                Home
              </NavLink>
            </li>

            {!isLoggedIn && (
              <li>
                <NavLink
                  to="/sign-in"
                  exact
                  activeClassName={classes["active"]}
                >
                  Sign In
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li className={classes["signup-item"]}>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/my-todos" activeClassName={classes["active"]}>
                  My Todos
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className={classes["logout-item"]} onClick={logoutUser}>
                Logout
              </li>
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default MainNavigation;
