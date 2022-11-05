import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Container from "../UI/Container";
import useInput from "../../hooks/use-input";

const SignIn = () => {
  const {
    inputValue: userEmail,
    valueChangeHandler: userEmailChangeHandler,
    valueReset: resetUserEmailInput,
  } = useInput();

  const {
    inputValue: userPassword,
    valueChangeHandler: userPasswordChangeHandler,
    valueReset: resetUserPasswordInput,
  } = useInput();

  const { signInUser, responseMessage } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    signInUser(userEmail, userPassword);

    resetUserEmailInput();
    resetUserPasswordInput();
  };

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
              min="7"
              value={userPassword}
              onChange={userPasswordChangeHandler}
            />
          </div>

          <div className="form-actions">
            <button type="submit">Sign In</button>
          </div>
          <p className="form-status-message">{responseMessage}</p>
        </form>
      </section>
    </Container>
  );
};

export default SignIn;
