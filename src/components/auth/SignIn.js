import { useState, useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import Container from "../UI/Container";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const userEmailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const userPasswordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    authCtx.authUser(userEmail, userPassword);

    console.log(authCtx.currentUser);
  };

  console.log(authCtx.currentUser);

  return (
    <Container>
      <section className="auth-form-content">
        <form onSubmit={submitHandler} className="sign-up-form">
          <div className="form-header">
            <h2>Sign In</h2>
          </div>

          <div className="form-control">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              value={userEmail}
              onChange={userEmailChangeHandler}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Your password</label>
            <input
              id="password"
              type="password"
              value={userPassword}
              onChange={userPasswordChangeHandler}
            />
          </div>

          <div className="form-actions">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default SignIn;
