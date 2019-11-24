import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import LoginDialog from "./components/LoginDialog";
import Home from "./screens/Home";
import Thread from "./screens/Thread";
import NewThread from "./screens/NewThread";
import AuthContext from "./context/AuthContext";

function App() {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [loginOpen, setLoginOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [displayLogin, setDisplayLogin] = useState(true);
  const [pass, setPass] = useState("");

  const handleLoginBtn = () => {
    setLoginOpen(true);
  };

  const handleLoginDialogClose = () => {
    setLoginOpen(false);
  };

  const login = async () => {
    let req = await fetch("http://localhost:8000/account/login/", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: pass
      })
    });
    if (req.status === 200) {
      let data = await req.json();
      console.log(data);
      setAuthToken(data.token);
      setDisplayLogin(false);
      setLoginOpen(false);
      setUsername("");
      setPass("");
    }
    console.log(req);
  };

  const logout = () => {
    setAuthToken("");
    setDisplayLogin(true);
  };

  return (
    <Router>
      <MyAppBar
        homeURL="/"
        createThreadURL="/newthread"
        displayLogin={displayLogin}
        handleLoginBtn={handleLoginBtn}
        handleLogoutBtn={logout}
      >
        <LoginDialog
          open={loginOpen}
          handleClose={handleLoginDialogClose}
          handleLogin={login}
          username={username}
          setUsername={setUsername}
          password={pass}
          setPassword={setPass}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/thread/:id">
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
