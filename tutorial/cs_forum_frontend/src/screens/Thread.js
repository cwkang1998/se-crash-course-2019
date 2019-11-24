import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AuthContext from "../context/AuthContext";

const useStyles = makeStyles(theme => ({
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  replyBox: {
    padding: theme.spacing(2)
  }
}));

function Thread({ match }) {
  const threadID = match.params.id;
  const classes = useStyles();
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [threadData, setThreadData] = useState({
    owner_name: "",
    title: "",
    content: "",
    created_at: new Date().toUTCString()
  });
  const [threadPosts, setThreadPosts] = useState([]);
  const [replyContent, setReplyContent] = useState("");
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchThreadData = async () => {
      let req = await fetch(`http://localhost:8000/thread/${threadID}`);
      if (req.status === 200) {
        let newData = await req.json();
        setThreadData(newData);
        console.log(newData);
      }
    };

    const fetchThreadPosts = async () => {
      let req = await fetch(
        `http://localhost:8000/thread/post/?thread_id=${threadID}`
      );
      if (req.status === 200) {
        let newData = await req.json();
        setThreadPosts(newData);
        console.log(newData);
      }
    };

    fetchThreadData();
    fetchThreadPosts();
  }, [threadID, updated]);

  const handleReply = async () => {
    let req = await fetch("http://localhost:8000/thread/post/", {
      method: "post",
      headers: {
        Authorization: `Token ${authToken}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        thread_id: threadID,
        content: replyContent
      })
    });
    if (req.status === 201) {
      let data = await req.json();
      console.log(data);
      setReplyContent("");
      setUpdated(!updated);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <List className={classes.listContainer}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<strong>{threadData.title}</strong>}
              secondary={
                <React.Fragment>
                  {`${threadData.owner_name} (${new Date(
                    threadData.created_at
                  ).toString()})`}
                  <Typography variant="body2" color="textPrimary">
                    {threadData.content}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
          {threadPosts.map(({ id, content, username, updated_at }) => (
            <React.Fragment key={id}>
              <ListItem alignItems="flex-start" key={id}>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      {`${username} (${new Date(updated_at).toString()})`}
                      <Typography variant="body2" color="textPrimary">
                        {content}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}

          {authToken ? (
            <ListItem alignItems="flex-start">
              <TextField
                label="Replies"
                multiline
                fullWidth
                value={replyContent}
                onChange={event => {
                  setReplyContent(event.target.value);
                }}
              />
              <Button color="primary" onClick={handleReply}>
                Reply
              </Button>
            </ListItem>
          ) : (
            ""
          )}
        </List>
      </Grid>
    </Grid>
  );
}

export default withRouter(Thread);
