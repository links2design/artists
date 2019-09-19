import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  title: {
    cursor: "pointer"
  }
}));

const Artist = ({ imgUrl, name, fbUrl, data, getData, ...props }) => {
  const classes = useStyles();
  return (
    <Box>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <Typography variant="h3" onClick={getData} className={classes.title}>
        {name}
      </Typography>
      <a href={fbUrl} target="_blank" rel="noopener noreferrer">
        {fbUrl}
      </a>
    </Box>
  );
};

export default Artist;
