import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrap: {
    maxWidth: "452px",
    margin: "50px auto 0 auto",
    padding: "50px 70px",
    border: "1px solid #DFE2EB",
    background: "#FFF",
    boxShadow: "0px 13px 27px -10px rgba(0,0,0,0.13)",
    borderRadius: "5px",
    textAlign: "center",
    "& > p": {
      fontSize: "14px"
    }
  },
  formContainer: {
    marginTop: "35px"
  },
  title: {
    fontSize: "28px",
    color: "#111111",
    margin: "10px 0 10px 0"
  },
  subTitle: {
    fontSize: "14px",
    color: "#6c757d"
  },
  darkLink: {
    marginTop: "5px",
    fontSize: "12px",
    lineHeight: "20px",
    color: "#6c757d",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  primaryLink: {
    color: "#00AEEF",
    fontSize: "14px"
  },
  generalText: {
    color: "#6c757d"
  },
  or: {
    color: "#DFE2EB",
    margin: "32px 0 23px 0"
  },
  Primary: {
    background: "yellow"
  },
  notifyText: {
    position: "absolute",
    right: "0px",
    top: "100%",
    marginTop: "3px",
    fontSize: "12px",
    textAlign: "right",
    lineHeight: "13px",
    color: "#111111"
  },
  controlGroup: {
    marginBottom: "30px"
  },
  leftAlign: {
    textAlign: "left"
  },
  formGroup: {
    marginBottom: "30px",
    textAlign: "left",
    "& > div": {
      "& > p.Mui-error": {
        color: "#111111",
        position: "absolute",
        right: "0px",
        top: "100%",
        marginTop: "3px",
        fontSize: "12px",
        textAlign: "right",
        lineHeight: "13px",
        fontWeight: "500",
        marginRight: "0"
      }
    },
    "& .MuiTypography-body1": {
      fontSize: "14px"
    }
  }
}));

export default useStyles;
