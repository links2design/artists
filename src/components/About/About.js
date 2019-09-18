import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import useStyles from "./styles";
import Link from "../common/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const About = ({}) => {
  const classes = useStyles();

  return (
    <Fade in>
      <Container>
        <h3>About Us</h3>
      </Container>
    </Fade>
  );
};

export default About;
