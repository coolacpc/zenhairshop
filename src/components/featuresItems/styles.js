import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  color_guide_main_container: {
    backgroundColor: "#D4D0C6",
  },
  color_guide_content: {
    margin: "auto",
    width: "90%",
    textAlign:"center",
    paddingTop:30,
    paddingBottom:30
  },
  headingL1: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 4,
    margin: 0,
  },
  headingL2: {
    fontWeight: 500,
    letterSpacing: 4,
    margin: 0,
    fontSize:20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
