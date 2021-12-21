import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({
  currentUser: {},
  isLoggedIn: false,
  registerUser: () => {},
  registerMessage: "",
  authUser: () => {},
  authMessage: "",
  logoutUser: () => {},
  generatedUsername: () => {},
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registerMessage, setRegisterMessage] = useState("");
  const [authMessage, setAuthMessage] = useState("");

  const isLoggedIn = currentUser;

  const registerUserHandler = (userEmail, userPassword) => {
    axios({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDj4crYXVWs0_YD69hakAWSao3x0pCAxHU",
      data: {
        email: userEmail,
        password: userPassword,
        returnSecureToken: true,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setRegisterMessage("Account created succesfully!");
        }
      })
      .catch((error) => {
        setRegisterMessage("Something went wrong. Try again.");
      });
  };

  const authenticateUserHandler = (userEmail, userPassword) => {
    axios({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDj4crYXVWs0_YD69hakAWSao3x0pCAxHU",
      data: {
        email: userEmail,
        password: userPassword,
        returnSecureToken: true,
      },
    })
      .then((response) => {
        setCurrentUser({
          idToken: response.data.idToken,
          email: response.data.email,
        });
      })
      .catch((err) => {
        setAuthMessage("Something went wrong! Check your login information!");
      });
  };

  const logoutUserHandler = () => {
    setCurrentUser(null);
  };

  const generatedUsername = (email) => {
    return email?.split("@").at(0) + "--todos";
  };

  // hiding the error message after 5s
  if (registerMessage || authMessage) {
    setTimeout(() => {
      setRegisterMessage("");
      setAuthMessage("");
    }, 5000);
  }

  const authValue = {
    currentUser,
    isLoggedIn,
    registerUser: registerUserHandler,
    registerMessage,
    authUser: authenticateUserHandler,
    authMessage,
    logoutUser: logoutUserHandler,
    generatedUsername,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
