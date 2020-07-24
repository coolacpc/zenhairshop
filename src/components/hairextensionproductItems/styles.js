import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  leftBar: {
    width: "100%",
    height: "auto",
    // paddingTop: 10,
    // paddingBottom: 10,
  },
  block_title: {
    color: "#7c6f50",
  },
}));
