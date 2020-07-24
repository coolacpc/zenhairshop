import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        boxShadow:'none',
        marginBottom:10,
        
    },
    content: {
        padding:'10px 10px 10px 0px',
        backgroundColor: theme.palette.primary.main
    },
    contentNoDark:{
        padding:'10px 10px 10px 0px',
        backgroundColor: theme.palette.textColor.main
    },
    textStyle:{
       textAlign:'center',
       color:theme.palette.textColor.main,
       opacity:.7
    },
    textStyleNoDark:{
        textAlign:'center',
        color:theme.palette.primary.main,
        opacity:.7
    },
    priceNoDark:{
        color:theme.palette.primary.main,

    },
    price:{
       color:theme.palette.textColor.main,

    }
}));