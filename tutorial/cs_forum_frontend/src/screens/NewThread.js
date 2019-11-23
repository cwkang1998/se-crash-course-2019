import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formEle: {
    marginBottom: theme.spacing(2)
  }
}));

export default function NewThread(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item justify="center" sm={6}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          className={classes.formEle}
        />
        <TextField
          label="Content"
          multiline
          rows="4"
          variant="outlined"
          fullWidth
          className={classes.formEle}
        />
        <Button color="primary" variant="contained" fullWidth>
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
