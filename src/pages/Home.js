import { Link } from "react-router-dom";
import Container from "../components/UI/Container";

const Home = () => {
  return (
    <Container>
      <section className="welcome-text">
        <div className="welcome-text-header">
          <h1>Welcome!</h1>
        </div>

        <div>
          <p>
            To see or make todos, you need to <Link to="/sign-up">sign up</Link>
            , or <Link to="/sign-in">sign in</Link> if you already have an
            account.
          </p>
          <p>After authentication, you can start making your todos.</p>
          <p>
            Each todo will be saved on Firebase server and your todos will be
            waiting you next time you log in.
          </p>
          <p>
            This version only allowes creating and removing todos, but in the
            future more features will be added.
          </p>
          <div className="welcome-text-footer">
            <p>
              Made by{" "}
              <a href="https://nikves.com" target="_blank" rel="noreferrer">
                nikves
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
