import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  flexContainer: {
    display: "flex"
  },
  bg: {
    background: "#2D3281"
  },
  textRight: {
    textAligh: "right"
  },
  logo: {
    verticalAlign: "middle"
  },
  topNav: {
    textAlign: "right"
  },
  navItem: {
    display: "inline-block !important",
    width: "auto !important",
    borderRight: "1px solid rgba(255, 255, 255, 0.23)",
    fontSize: "14px",
    lineHeight: "20px",
    padding: "3px 20px !important",
    color: "#FFF"
  }
}));

export default useStyles;
