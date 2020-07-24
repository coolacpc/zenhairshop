import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: "100%",
        padding: '10px',
        height: "50px",
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        textAlign: 'center'
      },
    },
  }));

export default useStyles;