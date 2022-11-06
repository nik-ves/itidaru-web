import { Fragment, useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

import MainNavigation from "./components/navigation/MainNavigation";
import TodoList from "./components/todos/TodoList";

import Home from "./pages/Home";
import Auth from "./components/auth/Auth";

import GlobalStyles from "./GlobalStyles";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Fragment>
      <MainNavigation />

      {/* <GlobalStyles darkTheme={true} /> */}

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/my-todos" exact>
          {isLoggedIn && <TodoList />}
          {!isLoggedIn && <Redirect to="/" />}
        </Route>

        <Route path="/auth" exact>
          {!isLoggedIn && <Auth />}
          {isLoggedIn && <Redirect to="/" />}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
