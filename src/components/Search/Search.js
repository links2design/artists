import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "8px 5px 8px 10px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Search = ({
  formsubmit,
  name,
  placeholder,
  inputprops,
  onChange,
  buttnlabel,
  searchKey,
  ...props
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={formsubmit}>
      <Paper className={classes.root}>
        <InputBase
          type="text"
          name={name}
          value={searchKey}
          placeholder={placeholder}
          inputProps={{ "aria-label": { inputprops } }}
          onChange={onChange}
          autoComplete="off"
          className={classes.input}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          type="submit"
          aria-label={buttnlabel}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

export default Search;
