import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    route:{
        marginRight:20,
    },
    btn:{
        alignSelf:'center',
        color:theme.palette.textColor.main,
        textTransform:"capitalize",
        marginTop:20
    }
}))