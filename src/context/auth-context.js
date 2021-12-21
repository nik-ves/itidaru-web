import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({
  currentUser: {},
  isLoggedIn: false,
  registerUser: () => {},
  authUser: () => {},
  logoutUser: () => {},
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

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
    }).then((response) =>
      setCurrentUser({
        idToken: response.data.idToken,
        email: response.data.email,
      })
    );
  };

  const logoutUserHandler = () => {
    setCurrentUser(null);
  };

  const authValue = {
    currentUser,
    isLoggedIn,
    registerUser: registerUserHandler,
    authUser: authenticateUserHandler,
    logoutUser: logoutUserHandler,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
