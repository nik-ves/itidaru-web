import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import MainNavigation from "./components/navigation/MainNavigation";
import TodoList from "./components/todos/TodoList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/my-todos">
          <TodoList />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
