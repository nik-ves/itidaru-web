import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import Container from "../UI/Container";
import useInput from "../../hooks/use-input";

import {
  Actions,
  Content,
  Control,
  Form,
  Input,
  Label,
  RequestBtn,
  ResponseMessage,
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
            <Label htmlFor="email">Your email</Label>
            <Input
              id="email"
              type="text"
              value={userEmail}
              onChange={userEmailChangeHandler}
            />
          </Control>

          <Control>
            <Label htmlFor="password">Your password</Label>
            <Input
              id="password"
              type="password"
              min="7"
              value={userPassword}
              onChange={userPasswordChangeHandler}
            />
          </Control>

          <Actions>
            <RequestBtn type="submit">Sign In</RequestBtn>
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

          <ResponseMessage>{responseMessage}</ResponseMessage>
        </Form>
      </Content>
    </Container>
  );
};

export default Auth;
