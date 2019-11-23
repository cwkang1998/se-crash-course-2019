import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={4}>
        <List className={classes.listContainer}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to="/thread">{"Brunch this weekend?"}</Link>}
              secondary={"Date"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to="/thread">{"Summer BBQ"}</Link>}
              secondary={"Date"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to="/thread">{"Oui Oui"}</Link>}
              secondary={"Date"}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item sm={8}>
        <List className={classes.listContainer}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to="/thread">{"Brunch this weekend?"}</Link>}
              secondary={"Date"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to="/thread">{"Summer BBQ"}</Link>}
              secondary={"Date"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to="/thread">{"Oui Oui"}</Link>}
              secondary={"Date"}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
