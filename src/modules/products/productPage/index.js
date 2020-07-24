import React from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import useStyles from "./style";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import ProductItem from "../../../components/productItem";
import Slider from "@material-ui/core/Slider";
import { Pagination } from "@material-ui/lab";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Hidden from "@material-ui/core/Hidden";
import { valuetext } from "../utils";
import {
  allProducts,
  hairExtensionProducts,
  afterCareProducts,
} from "../../../config/dummyData";
import { useHistory } from "react-router";

export default function ImageGridList(props) {
  const classes = useStyles();
  const history = useHistory();

  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(30);

  const [allData, setAllData] = React.useState(false);
  const [hairExe, setHairExe] = React.useState(false);
  const [afterHair, setAfterHair] = React.useState(false);

  const handleRange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const moveToDetailsPage = () => {
    history.push(`/products/3424`);
  };

  React.useEffect(() => {
    if (history.location.pathname === "/Products") {
      setAfterHair(false);
      setHairExe(false);
      setAllData(true);
    } else if (history.location.pathname === "/Hair extensions") {
      setAllData(false);
      setAfterHair(false);
      setHairExe(true);
    } else if (history.location.pathname === "/Aftercare products") {
      setAllData(false);
      setHairExe(false);
      setAfterHair(true);
    }
  }, [
    history.location.pathname === "/Products",
    history.location.pathname === "/Hair extensions",
    history.location.pathname === "/Aftercare products",
  ]);

  return (
    <Grid container direction="row" justify="center" className={classes.root}>
      <Grid
        item
        xs={12}
        sm={3}
        spacing={1}
        className={classes.productGridColor}
      >
        <Grid
          container
          direction="column"
          justify="center"
          style={{ marginTop: "5px" }}
        >
          <Grid item xs={12} className={classes.productGridColor}>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="Length"
                className={classes.select}
                value={age}
                displayEmpty
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Length</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider className={classes.divider} />
          <Grid
            item
            xs={12}
            className={`${classes.marginTop} ${classes.productGridColor}`}
          >
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                defaultValue="Color"
                className={classes.select}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Color</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider className={classes.divider} />

          <Grid
            item
            xs={12}
            className={`${classes.marginTop} ${classes.productGridColor}`}
          >
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="Price"
                className={classes.select}
                value={age}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Price</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={3}>
              <Grid item>
                <RemoveIcon />
              </Grid>
              <Grid item xs>
                <Slider
                  center
                  value={value}
                  color="primary"
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  onChange={handleRange}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <AddIcon />
              </Grid>
            </Grid>{" "}
          </Grid>
          <Divider className={classes.divider} />
          <Hidden xsDown={true}>
            <Grid
              item
              xs={12}
              className={`${classes.marginTop} ${classes.productGridColor}`}
            ></Grid>
          </Hidden>
        </Grid>
      </Grid>

      <Grid
        container
        xs={12}
        sm={9}
        spacing={1}
        style={{ paddingLeft: "10px" }}
        direction="row"
      >
          {history.location.pathname === "/Products" &&
            allData &&
            allProducts.map((tile, index) => (
              <Grid
              item
              xs={12}
              sm={4}
              className={classes.container}
              onClick={moveToDetailsPage}
            >
              <ProductItem
                title={tile.title}
                imgUrl={tile.imgUrl}
                price={tile.price}
              />
              {/* <div id="overlay" className={classes.middle}>
                <div id={index} className={classes.text}>
                  {tile.title}
                </div>
              </div> */}
            </Grid>
            ))}
             {history.location.pathname === "/Aftercare products"&&afterHair &&
            afterCareProducts.map((tile, index) => (
              <Grid
              item
              xs={12}
              sm={4}
              className={classes.container}
              onClick={moveToDetailsPage}
            >
              <ProductItem
                title={tile.title}
                imgUrl={tile.imgUrl}
                price={tile.price}
              />
              {/* <div id="overlay" className={classes.middle}>
                <div id={index} className={classes.text}>
                  {tile.title}
                </div>
              </div> */}
            </Grid>
            ))}
        {history.location.pathname === "/Hair extensions" &&
          hairExe &&
          hairExtensionProducts.map((tile, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              className={classes.container}
              onClick={moveToDetailsPage}
            >
              <ProductItem
                title={tile.title}
                imgUrl={tile.imgUrl}
                price={tile.price}
              />
              {/* <div id="overlay" className={classes.middle}>
                <div id={index} className={classes.text}>
                  {tile.title}
                </div>
              </div> */}
            </Grid>
          ))}

        <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
          <Grid container direction="row" justify="center">
            <Pagination
              count={5}
              className={classes.paginationColor}
              size="large"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
