import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // marginTop: '30px',
    // marginBottom: '30px'
    margin: "auto",
    width: "90%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  blogCard: {
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  media: {
    height: 240,
  },
}));
