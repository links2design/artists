import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > li": {
      display: "inline-block",
      marginLeft: 15,
      "& > a": {
        color: "#FFF",
        opacity: "0.8",
        "&:hover": {
          opacity: 1,
          color: "#fff",
          textDecoration: "none"
        }
      }
    }
  }
}));

export default useStyles;
