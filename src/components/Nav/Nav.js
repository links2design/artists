import React from "react";
import useStyles from "./styles";
import Link from "../common/Link";

const Nav = () => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

export default Nav;
