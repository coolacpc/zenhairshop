import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px 0px 20px 0px',
        borderTop: `3px solid ${theme.palette.primary.main}`,
        color: 'black',
        padding: '7px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '97%',
        textAlign: 'center'
    },
    paginationColor: {
        color: theme.palette.paginationColor.main
    },
    productGridColor: {
        backgroundColor: theme.palette.paginationColor.main
    },
    marginTop: {
        marginTop: '5px'
    },
    selectEmpty: {
        margin: theme.spacing(2),
    }, select: {
        '&:before': {
            borderColor: "#F2F2F2",
        },
        '&:after': {
            borderColor: "#F2F2F2",
        },
        '&:hover': {
            borderColor: "#F2F2F2",
        },

    },
    divider: {
        backgroundColor: 'white',
        height: '5px',
        width: '105%'
    },
    image: {
        opacity: 1,
        display: 'block',
        transition: '.5s ease',
        backfaceVisibility: 'hidden',
    },
    middle: {
        transition: '.5s ease',
        opacity: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    container: {
        '&:hover':{
            cursor: 'pointer',
            '&  img': {
                opacity: 0.2
              },
              '& #overlay': {
                opacity: 0.9
              },
        },

    },
    text: {
        color: 'black',
        fontSize: '16px',
        padding: '16px 32px',
        textAlign: 'center'
      }

}));

