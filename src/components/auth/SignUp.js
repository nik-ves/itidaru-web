import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Container from "../UI/Container";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { registerUser, registerMessage } = useContext(AuthContext);

  const userEmailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const userPasswordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    registerUser(userEmail, userPassword);
  };

  return (
    <Container>
      <section className="auth-form-content">
        <form onSubmit={submitHandler} className="sign-up-form">
          <div className="form-header">
            <h2>Sign Up</h2>
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
            <button type="submit">Sign Up</button>
          </div>
          <p className="form-status-message">{registerMessage}</p>
        </form>
      </section>
    </Container>
  );
};

export default SignUp;
