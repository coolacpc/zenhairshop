import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import useStyles from "./styles";
import {Link} from 'react-router-dom';
import WishListModel from "./wishListModel";

const MobileHeader = React.memo(({ state, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => toggleDrawer(!state)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.headerLastDiv}>
            <Link to="/login">
              <Button color="inherit" className={classes.menuButton}>
                Login
              </Button>
            </Link>
            <WishListModel mobileRender={true} />
            
            <Link to="/cart">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default MobileHeader;