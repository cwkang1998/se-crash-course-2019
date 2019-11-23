import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import LoginDialog from "./components/LoginDialog";
import Home from "./screens/Home";
import Thread from "./screens/Thread";
import NewThread from "./screens/NewThread";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginBtn = () => {
    setLoginOpen(true);
  };

  const handleLoginDialogClose = () => {
    setLoginOpen(false);
  };

  const login = () => {};

  return (
    <Router>
      {/* Shared App Bar here */}
      <MyAppBar
        homeURL="/"
        createThreadURL="/newthread"
        handleLoginBtn={handleLoginBtn}
      >
        <LoginDialog
          open={loginOpen}
          handleClose={handleLoginDialogClose}
          handleLogin={login}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/thread">
            <Thread />
          </Route>
          <Route path="/newthread">
            <NewThread />
          </Route>
        </Switch>
      </MyAppBar>
    </Router>
  );
}

export default App;
