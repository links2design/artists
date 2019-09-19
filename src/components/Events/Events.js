import React from "react";
import useStyles from "./styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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
