import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contact_main_container: {
    margin: "auto",
    width: "90%",
    marginTop: 30,
    marginBottom: 30,
  },
  heading: {
    borderBottom: "1px solid #e6e6e6",
    display: "block",
    width: "100%",
    padding: 0,
    marginBottom: 20,
    fontSize: 21,
    fontWeight: 400,
    lineHeight: "inherit",
    marginTop: 0,
  },
  submit: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paragraphs: {
    color: "#000",
    fontFamily: "Quicksand",
    fontSize: 12,
  },
  pLinks: {
    color: "#666",
    textDecoration: "none",
  },
}));
