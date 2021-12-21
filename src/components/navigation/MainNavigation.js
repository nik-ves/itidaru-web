import { NavLink } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <section className={classes["main-navigation"]}>
      <Container>
        <div className={classes["navigation-content"]}>
          <div className={classes["navigation-logo-box"]}>
            <h1>Todos</h1>
          </div>

          <ul className={classes["navigation-links"]}>
            <li>
              <NavLink to="/sign-in" activeClassName={classes["active"]}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" activeClassName={classes["active"]}>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-todos" activeClassName={classes["active"]}>
                My Todos
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default MainNavigation;
