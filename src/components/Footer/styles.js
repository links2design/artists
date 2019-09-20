import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: "1px solid #DFE2EB",
    padding: "14px 24px 10px 24px",
    position: "absolute",
    left: "0px",
    right: "0px",
    bottom: "0px",
    background: "#FFF"
  },
  footerInfo: {
    textAlign: "right"
  },
  generalText: {
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: "14px",
    color: "#6c757d",
    marginLeft: "20px",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export default useStyles;
