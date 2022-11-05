import { Fragment, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

import MainNavigation from "./components/navigation/MainNavigation";
import TodoList from "./components/todos/TodoList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./pages/Home";

import GlobalStyles from "./GlobalStyles";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Fragment>
      <MainNavigation />

      <GlobalStyles />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/sign-in" exact>
          {!isLoggedIn && <SignIn />}
          {isLoggedIn && <Redirect to="/" />}
        </Route>

        <Route path="/sign-up" exact>
          {!isLoggedIn && <SignUp />}
          {isLoggedIn && <Redirect to="/" />}
        </Route>

        <Route path="/my-todos" exact>
          {isLoggedIn && <TodoList />}
          {!isLoggedIn && <Redirect to="/" />}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
