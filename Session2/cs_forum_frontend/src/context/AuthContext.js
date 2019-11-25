import React from "react";

const AuthContext = React.createContext({
  authToken: "",
  setAuthToken: function(token) {
  }
});

export default AuthContext;
