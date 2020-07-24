import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "30px",
      marginBottom: "30px",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
  }));