import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  noLinkDeco: {
    textDecoration: "inherit",
    color: "inherit"
  }
}));

export default function MyAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const {
    homeURL,
    createThreadURL,
    displayLogin,
    handleLoginBtn,
    handleLogoutBtn
  } = props;

  const handleCreateThread = () => {
    history.push(createThreadURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={homeURL} className={classes.noLinkDeco}>
              CS Forum
            </Link>
          </Typography>
          {displayLogin ? (
            <Button color="inherit" variant="outlined" onClick={handleLoginBtn}>
              Login
            </Button>
          ) : (
            <React.Fragment>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.menuButton}
                endIcon={<AddIcon />}
                onClick={handleCreateThread}
              >
                Create New Thread
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleLogoutBtn}
              >
                Logout
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
