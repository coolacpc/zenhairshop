import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.primary.main,
  },
  swipeItem: {
    background: "linear-gradient(45deg, #3d3e43, #89744a)",
  },
  img: {
    [theme.breakpoints.up("sm")]: {
      height: "70vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
    },
  },
  imgView: {
    display: "flex",
    alignItems: "flex-end",
  },
  root: {},
  title: {
    fontSize: 40,
    color: theme.palette.textColor.main,
  },
  offerHeading: {
    textAlign: "center",
    color: theme.palette.textColor.main,
    paddingTop: 20,
    paddingBottom: 30,
  },
  offerContainer: {
    minHeight: 400,
    paddingTop: 30,
    paddingBottom: 30,
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  icon: {
    paddingTop: 12,
  },
  paragraphLine: {
    color: theme.palette.textColor.main,
    opacity: 0.7,
    textAlign: "left",
    wordWrap: "break-word",
  },
  description: {
    fontSize: 17,
    // textAlign: 'center',
    paddingBottom: 10,
    color: theme.palette.textColor.main,
    opacity: 0.7,
  },
  item: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
    paddingTop: "40px",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: 20,
    textTransform: "capitalize",
  },
  route: {
    marginRight: 20,
  },
  btn: {
    alignSelf: "center",
    color: theme.palette.textColor.main,
    textTransform: "capitalize",
    marginTop: 20,
  },
  textColor: {
    color: "white",
  },
}));
