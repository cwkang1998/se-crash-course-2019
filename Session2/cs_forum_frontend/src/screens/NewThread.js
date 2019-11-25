import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

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
  const history = useHistory();
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = async () => {
    let req = await fetch("http://localhost:8000/thread/", {
      method: "post",
      headers: {
        Authorization: `Token ${authToken}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content
      })
    });
    if (req.status === 201) {
      let data = await req.json();
      console.log(data);
      history.push(`/thread/${data.id}`);
    }
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item sm={6}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={event => setTitle(event.target.value)}
          fullWidth
          className={classes.formEle}
        />
        <TextField
          label="Content"
          variant="outlined"
          value={content}
          onChange={event => setContent(event.target.value)}
          multiline
          rows="4"
          fullWidth
          className={classes.formEle}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleCreate}
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
