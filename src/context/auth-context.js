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

  const registerUserHandler = async (userEmail, userPassword) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDj4crYXVWs0_YD69hakAWSao3x0pCAxHU",
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
      setRegisterMessage(error.response.data.error.message);
    }
  };

  const authenticateUserHandler = async (userEmail, userPassword) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDj4crYXVWs0_YD69hakAWSao3x0pCAxHU",
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
      setAuthMessage(error.response.data.error.message);
    }
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
