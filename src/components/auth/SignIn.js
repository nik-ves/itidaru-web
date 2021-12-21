import Container from "../UI/Container";

const SignIn = () => {
  return (
    <Container>
      <section className="auth-form-content">
        <form className="sign-up-form">
          <div className="form-header">
            <h2>Sign In</h2>
          </div>

          <div className="form-control">
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Your password</label>
            <input id="password" type="password" />
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
