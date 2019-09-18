import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "../common/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={6}>
          Artists
        </Grid>

        <Grid item xs={6}>
          <div className={classes.footerInfo}>
            <Typography className={classes.generalText}>
              <Link to="/privacy-policy" unstyled>
                Terms + Privacy Policy
              </Link>
            </Typography>
            <Typography className={classes.generalText}>
              {new Date().getFullYear()} &copy;{" "}
              <Link to="/register" unstyled>
                demoartist.com
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
