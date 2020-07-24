import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'white'
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  headerLastDiv: {
    marginLeft: "auto"
  },
  linkStyle:{
    textDecoration:'none',
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
}));

export default useStyles;