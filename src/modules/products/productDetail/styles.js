import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    bg:{
        backgroundColor: theme.palette.textColor.main, 
        padding: 30

    },
    route: {

    },
    padding: {
        padding: 30
    },
    itemQuantity: {
        paddingTop: 20
    },
    imgQuantity: {
        paddingRight: 5,
        paddingLeft: 5
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 22,
        // color: theme.palette.textColor.main,
    },
    subHeading: {
        fontSize: 18,
        // color: theme.palette.textColor.main,
        opacity: .6
    },
    colorView: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#ff5757"
    },
    mr20: {
        marginTop: 20
    },
    cartView:{
        display: 'flex',
        width:'60%',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:20
    }
}))