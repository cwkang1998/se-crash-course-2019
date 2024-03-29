import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthContext from "./context/AuthContext";

function MainApp() {
  const [authToken, setAuthToken] = useState("");
  return (
    <AuthContext.Provider
      value={{
        authToken: authToken,
        setAuthToken: setAuthToken
      }}
    >
      <App />
    </AuthContext.Provider>
  );
}

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
