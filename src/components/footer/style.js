import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderTop: `5px solid ${theme.palette.secondary.main}`,
        borderBottom: `5px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },
    textMargin: {
        margin: theme.spacing(3, 3, 3, 2)
    },
    list: {
        marginTop: theme.spacing(-3)
    },
    textStyle: {
        textAlign: 'center'
    },
    icons: {
        color: theme.palette.socialIconColor.main,
        margin: theme.spacing(2)
    }
}));

