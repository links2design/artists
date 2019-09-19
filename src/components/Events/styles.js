import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
