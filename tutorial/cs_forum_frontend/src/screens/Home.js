import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Home(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let req = await fetch("http://localhost:8000/thread");
      if (req.status === 200) {
        let newData = await req.json();
        setData(newData);
        console.log(newData);
      }
      console.log(req);
    }
    fetchData();
  }, []);

  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        <List className={classes.listContainer}>
          {data.map(({ id, title, created_at }) => (
            <React.Fragment key={id}>
              <ListItem alignItems="flex-start" key={id}>
                <ListItemText
                  primary={<Link to={`/thread/${id}`}>{title}</Link>}
                  secondary={new Date(created_at).toString()}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
