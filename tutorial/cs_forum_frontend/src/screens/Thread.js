import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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
  },
  replyBox: {
    padding: theme.spacing(2)
  }
}));

export default function Thread(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <List className={classes.listContainer}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<strong>Brunch this weekend?</strong>}
              secondary={
                <React.Fragment>
                  date
                  <Typography variant="body2" color="textPrimary">
                    I'll be in your neighborhood doing errands this…
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  date
                  <Typography variant="body2" color="textPrimary">
                    I'll be in your neighborhood doing errands this…
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  date
                  <Typography variant="body2" color="textPrimary">
                    I'll be in your neighborhood doing errands this…
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <TextField label="Replies" multiline fullWidth />
            <Button color="primary">Reply</Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
