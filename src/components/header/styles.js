import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 148,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
      justifyContent: "center",
    },
    logo: {
        width: 120,
        height: 120,
    },
    pointer: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    navIcon: {
        color: theme.palette.secondary.main,
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        color: "#FFF"
    },
    textField: {
        color: theme.palette.secondary.main
    },
    
}));

export default useStyles;