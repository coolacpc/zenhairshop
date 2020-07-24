import React, { memo } from "react";

import useStyles from "./styles";
import { Grid, Typography, Button } from "@material-ui/core";
import img from "../../assets/media/girl.png";
export default memo((props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid className={classes.swipeItem} container>
      <Grid xs={12} md={6} className={classes.item} item>
        <Typography className={classes.title}>{props.item.title}</Typography>
        <Typography className={classes.description}>
          {props.item.description}{" "}
        </Typography>

  <Button className={classes.btn}>{props.item.buttonText}</Button>
      </Grid>
      <Grid xs={12} md={6} item>
        <img className={classes.img} src={props.item.imgUrl} alt="Logo" />
      </Grid>
    </Grid>
  );
});
