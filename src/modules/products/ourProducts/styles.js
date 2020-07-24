import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    main:{
        padding:'10px 30px',

    },
    itemGrid:{
        display:'flex',
        justifyContent:'center'
    },
    blackColor:{
        color:theme.palette.primary.main,
        fontSize:40,
        fontWeight: '400',
        paddingBottom:20

    },
    textStyle:{
        fontSize:40,
        fontWeight: '400',
        color:theme.palette.textColor.main,
        paddingBottom:20
    }
}))