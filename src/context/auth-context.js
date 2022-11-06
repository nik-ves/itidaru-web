import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({
  currentUser: {},
  isLoggedIn: false,
  signUpUser: () => {},
  signInUser: () => {},
  logoutUser: () => {},
  responseMessage: "",
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const isLoggedIn = currentUser;

  const signUpUserHandler = async (userEmail, userPassword) => {
    try {
      const response = await axios({
        method: "POST",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
        data: {
          email: userEmail,
          password: userPassword,
          returnSecureToken: true,
        },
      });

      setCurrentUser({
        idToken: response.data.idToken,
        email: response.data.email,
      });
    } catch (error) {
      checkAndSetResponseMessage(error.response.data.error.message);
    }
  };

  const signInUserHandler = async (userEmail, userPassword) => {
    try {
      const response = await axios({
        method: "POST",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
        data: {
          email: userEmail,
          password: userPassword,
          returnSecureToken: true,
        },
      });

      setCurrentUser({
        idToken: response.data.idToken,
        email: response.data.email,
      });
    } catch (error) {
      checkAndSetResponseMessage(error.response.data.error.message);
    }
  };

  const logoutUserHandler = () => {
    setCurrentUser(null);
  };

  const checkAndSetResponseMessage = (message) => {
    switch (message) {
      case "WEAK_PASSWORD : Password should be at least 6 characters":
        setResponseMessage(
          "Your password needs to be at least 6 characters long!"
        );
        break;

      case "EMAIL_EXISTS":
        setResponseMessage("This email is already in use!");
        break;

      case "INVALID_PASSWORD":
        setResponseMessage("Password is incorrect!");
        break;

      case "EMAIL_NOT_FOUND":
        setResponseMessage("User with this emails was not found!");
        break;

      case "INVALID_EMAIL":
        setResponseMessage("Please enter a valid email!");
        break;

      case "MISSING_PASSWORD":
        setResponseMessage("Please enter a password!");
        break;

      default:
        setResponseMessage("Something went wrong. Try again later.");
        break;
    }
  };

  // Hiding the error message after 5s
  if (responseMessage) {
    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
  }

  const authValue = {
    currentUser,
    isLoggedIn,
    signUpUser: signUpUserHandler,
    signInUser: signInUserHandler,
    logoutUser: logoutUserHandler,
    responseMessage,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
