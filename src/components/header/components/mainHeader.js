import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/images/logo.png";
import Menu from "./menu";
import DropDown from "./navDropDown";
import NavItem from "./navItem";
import ENG from "../../../assets/images/en.png";

import "../../../App.css";
import WishListModel from "./wishListModel";

const AR =
  "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png";

function MyAppBar(props) {
  const classes = useStyles();
  const { index, setIndex } = props;

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Grid container style={{ flex: 1, minHeight: 148, width: "100%" }}>
              <Grid
                item
                container
                align="center"
                sm={5}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <Grid item sm={3}>
                  <Menu
                    options={[
                      {
                        title: "English",
                        img: ENG,
                      },
                      {
                        title: "Arabic",
                        img: AR,
                      },
                    ]}
                  />
                </Grid>
                <Grid item sm={3}>
                  <Menu
                    currentUserCountry={props.currentUserCountry}
                    options={[
                      {
                        title: "JOD",
                        img:
                          "https://cdn.webshopapp.com/shops/94414/files/52385814/flag-of-jordan.jpg",
                      },
                      // {
                      //   title: "PK",
                      //   img:
                      //     "https://cdn.webshopapp.com/shops/94414/files/52410082/flag-of-pakistan.jpg",
                      // },
                      {
                        title: "SAR",
                        img:
                          "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png",
                      },
                      {
                        title: "USD",
                        img: ENG,
                      },
                      {
                        title: "QAR",
                        img:
                          "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3527/18756/qatar-flag__19414.1575323935.jpg?c=2&imbypass=on",
                      },
                      {
                        title: "KWD",
                        img: "https://flagpedia.net/data/flags/w580/kw.png",
                      },
                    ]}
                  />
                </Grid>
                <Grid item sm={6} />

                <Grid item sm={4}>
                  <DropDown
                    options={[
                      "Products",
                      "Hair extensions",
                      "Aftercare products",
                    ]}
                  />
                </Grid>
                <Grid item sm={4} style={{ height: 44 }}>
                  <NavItem
                    // onClick={() => setIndex(2)}
                    // active={index === 2}
                    title="Color Guide"
                  />
                </Grid>
                <Grid item sm={4}>
                  <DropDown
                    options={[
                      "Features",
                      "Videos",
                      "Before & after catalogue",
                      "Blog",
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid align="center" item sm={2}>
                <Link to="/">
                  {" "}
                  <Avatar
                    onClick={() => setIndex(0)}
                    alt="Logo"
                    src={LOGO}
                    className={classes.logo}
                  />{" "}
                </Link>
              </Grid>

              <Grid
                item
                container
                align="center"
                sm={5}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <Grid item sm={4} />
                <Grid item sm={2}>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Typography
                      className={`${classes.pointer} ${classes.input}`}
                    >
                      Log In
                    </Typography>
                  </Link>
                </Grid>
                <Grid item sm={2}>
                  <WishListModel />
                </Grid>
                <Grid item sm={2}>
                  <Link to="/cart">
                    <ShoppingCartIcon
                      className={`${classes.pointer} ${classes.input}`}
                    />
                  </Link>
                </Grid>

                <Grid item sm={4}>
                  <DropDown
                    options={[
                      "About Us",
                      "Contact Us",
                      "Collaboration & partners",
                      "Services",
                    ]}
                  />
                </Grid>
                <Grid item sm={8}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                  >
                    <Input
                      type="text"
                      placeholder="Search"
                      className={classes.input}
                      variant="secondary"
                      color="secondary"
                      id="standard-adornment-password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility">
                            <SearchIcon color="secondary" />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default MyAppBar;
