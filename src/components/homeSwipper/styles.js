import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    img:{
        width:'auto !important',
        height:'71vh',
        bottom:0,
        position:'relative'
    },
    root:{

    },
    swipeItem:{
        // minHeight:400
        backgroundColor:theme.palette.primary.main
    },
    title:{
        fontSize:60,
        textAlign: 'left',
        color:theme.palette.textColor.main,

    },
    description:{
        fontSize:17,
        opacity:.6,
        textAlign: 'left',
        color:theme.palette.textColor.main,
    },
    item:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        paddingLeft:'10%'
    },
    btn:{
        backgroundColor:theme.palette.secondary.main,
        marginTop:20,
        textTransform:"capitalize"
    }
}))