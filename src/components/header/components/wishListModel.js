import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { allProducts } from "../../../config/dummyData";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 8,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: -1,
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{ paddingLeft: 5 }}>
        MY WISHLIST
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const WishListModel = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {props.mobileRender ? (
        <IconButton
          onClick={handleClickOpen}
          edge="start"
          style={{ color: "white" }}
          color="secondary"
          aria-label="menu"
        >
          <FavoriteBorder />
        </IconButton>
      ) : (
        <FavoriteBorder
          onClick={handleClickOpen}
          className={`${classes.navIcon} ${classes.pointer}`}
        />
      )}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className={classes.demo}>
                {allProducts.map((index, key) => (
                  <div
                    style={{ padding: "20px", position: "relative" }}
                    key={key}
                  >
                    <Card style={{ display: "flex" }}>
                      <img style={{ width: 160 }} src={index.imgUrl} />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <CardContent
                          style={{
                            flex: "1 0 auto",
                            // width: "100px",
                          }}
                        >
                          <Typography component="h6" variant="h6">
                            Description
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {index.title}
                          </Typography>
                          <div className="right-button-wishlist">
                            <div className="price-wishList">$120.5</div>
                            <div style={{ textAlign: "right" }}>
                              <Button
                                variant="contained"
                                color="secondary"
                                style={{
                                  borderRadius: 50,
                                  fontSize: 10,
                                  // width: "30%",
                                  textAlign: "right",
                                }}
                                startIcon={<AddShoppingCartIcon />}
                              >
                                Add to cart
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                      <CloseIcon
                        color="secondary"
                        style={{
                          position: "absolute",
                          top: 30,
                          right: 30,
                          cursor: "pointer",
                        }}
                      />
                    </Card>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};
export default WishListModel;
