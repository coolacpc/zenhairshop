import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Divider,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Strip from "../freeShippingStrip/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState("masterCard");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container spacing={3} justify="center">
      <Grid item sm={12} xs={12}>
        <Strip />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        style={{ border: "2px solid #89744a", height: "300px" }}
      >
        <ListItem>
          <ListItemAvatar>
            <LocalShippingIcon
              color="primary"
              style={{ height: "100px", width: "150px" }}
            />
          </ListItemAvatar>
          <ListItemText
            style={{ marginLeft: "10px" }}
            primary={
              <Typography
                component="span"
                variant="h5"
                className={classes.inline}
                color="textPrimary"
              >
                Shipping
              </Typography>
            }
            secondary="Available shipping method"
          />
        </ListItem>
        <Divider
          style={{ height: "2px", backgroundColor: "#89744a", width: "100%" }}
        />
        <ListItem>
          <ListItemText
            style={{ marginLeft: "10px" }}
            primary={
              <Typography
                component="span"
                variant="h5"
                className={classes.inline}
                color="textPrimary"
              >
                Option 1
              </Typography>
            }
            secondary="Small Description for the selected option"
          />
        </ListItem>
      </Grid>
      <Typography style={{ color: "white" }}>Hello World</Typography>
      <Grid item xs={12} sm={5} style={{ border: "2px solid #89744a" }}>
        <ListItem>
          <ListItemAvatar>
            <CreditCardIcon
              color="primary"
              style={{ height: "100px", width: "150px" }}
            />
          </ListItemAvatar>
          <ListItemText
            style={{ marginLeft: "10px" }}
            primary={
              <Typography
                component="span"
                variant="h5"
                className={classes.inline}
                color="textPrimary"
              >
                Payment
              </Typography>
            }
            secondary="Please specify payment method"
          />
        </ListItem>
        <Divider
          style={{ height: "2px", backgroundColor: "#89744a", width: "100%" }}
        />
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="masterCard"
              control={<Radio />}
              label={
                <img
                  src="http://pngimg.com/uploads/credit_card/credit_card_PNG227.png"
                  height="60px"
                  width="80px"
                  alt="master card"
                />
              }
            />
            <FormControlLabel
              value="CoD"
              control={<Radio />}
              label={
                <img
                  src="http://pngimg.com/uploads/paypal/paypal_PNG15.png"
                  alt="cash on delivery"
                  height="45px"
                  width="80px"
                />
              }
              style={{ marginTop: "20px"}}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}
