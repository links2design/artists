import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import LoginForm from "./LoginForm";
import useStyles from "./styles";
import Link from "../common/Link";
import Box from "@material-ui/core/Box";

const Login = () => {
  const classes = useStyles();

  return (
    <Fade in>
      <Container>
        <Box className={classes.wrap}>
          <Typography variant="h1" className={classes.title}>
            Welcome Back
          </Typography>
          <Typography className={classes.subTitle}>
            Your content is ready for you.
          </Typography>
          <LoginForm />
          <Typography>
            <Link to="/forgot-password">Forgot Password?</Link>
          </Typography>
        </Box>
      </Container>
    </Fade>
  );
};

export default Login;
