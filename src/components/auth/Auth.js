import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import Container from "../UI/Container";
import useInput from "../../hooks/use-input";
import ResponseMessage from "../UI/ResponseMessage";
import {
  Actions,
  Content,
  Control,
  Form,
  Input,
  Label,
  RequestBtn,
  Title,
  SwitchFormMessage,
} from "./Auth.styles";

const Auth = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const { signInUser, signUpUser, responseMessage } = useContext(AuthContext);

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

  const submitHandler = (event) => {
    event.preventDefault();

    if (signUpForm) {
      signUpUser(userEmail, userPassword);
    } else {
      signInUser(userEmail, userPassword);
    }

    resetUserEmailInput();
    resetUserPasswordInput();
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={submitHandler}>
          <Title>{signUpForm ? "Sign Up" : "Sign In"}</Title>

          <Control>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userEmail}
              onChange={userEmailChangeHandler}
              placeholder="example@example.com"
            />
          </Control>

          <Control>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              min="7"
              value={userPassword}
              onChange={userPasswordChangeHandler}
            />
          </Control>

          <Actions>
            <RequestBtn type="submit">
              {signUpForm ? "Sign up" : "Sign in"}
            </RequestBtn>
          </Actions>

          <SwitchFormMessage
            onClick={() => {
              setSignUpForm(!signUpForm);
            }}
          >
            {signUpForm
              ? "Already have an account? Sign in here!"
              : "No account? Create one here!"}
          </SwitchFormMessage>

          {responseMessage && (
            <ResponseMessage>{responseMessage}</ResponseMessage>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default Auth;
