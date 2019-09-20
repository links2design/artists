const styles = {
  root: {
    padding: "8px 5px 8px 10px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },

  resultWrap: {
    "& > div": {
      boxShadow:
        "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
      backgroundColor: "#FFF",
      borderRadius: "2px",
      position: "relative",
      padding: "35px 25px 35px 120px",
      "& > div": {
        width: "80px",
        height: "80px",
        background: "#c7cad9",
        overflow: "hidden",
        position: "absolute",
        borderRadius: "100%",
        top: "50%",
        boxShadow:
          "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
        transform: "translateY(-50%)",
        left: "20px",
        "& > img": {
          width: "100%"
        }
      },
      "& > h3": {
        color: "#111",
        fontSize: "18px"
      },
      "& > a": {
        color: "#ccc",
        display: "inline-block",
        fontSize: "14px",
        width: "230px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }
  },
  resltString: {
    display: "block",
    marginTop: 50
  }
};
export default styles;
