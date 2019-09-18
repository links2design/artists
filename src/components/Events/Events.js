import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 2px 3px #e0e0e0",
    "& > li ": {
      minHeight: 50,
      "& > div": {
        width: "50%"
      }
    }
  },
  title: {
    fontSize: 14,
    padding: "6px 0 10px 15px",
    textTransform: "uppercase",
    fontWeight: 500
  }
}));

const Event = ({ country, city, venue, date, ...props }) => {
  const classes = useStyles();
  return (
    <Box>
      <List className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Event Details
        </Typography>
        <Divider />
        <ListItem>
          <ListItemText primary="Country" secondary={country} />
          <ListItemText primary="City" secondary={city} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Venu" secondary={venue} />
          <ListItemText primary="Date" secondary={date} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Event;
