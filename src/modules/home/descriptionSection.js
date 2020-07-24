import React, { memo } from "react";
import { Star } from "@material-ui/icons";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import img from "../../assets/media/girl2.png";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default memo((props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.swipeItem} container>
      <Grid className={classes.imgView} xs={12} md={4} item>
        <img className={`${classes.img}`} src={img} alt="Logo" />;
      </Grid>
      <Grid xs={12} md={8} className={classes.item} item align="left">
        <Typography className={classes.title}>Description</Typography>

        <Typography className={classes.description}>
          We provide high quality tape-in and invisible extensions with medical
          grade adhesive guaranteeing no damage. And temporary extensions like
          our 9 piece ready-to-use clip-in extensions for instant transformation
          from the comfort of your home.
        </Typography>

        <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem >
            <ListItemIcon>
              <Star className={classes.textColor} />
            </ListItemIcon>
            <ListItemText className={classes.textColor} primary="100% human Remy hair extensions" />
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <Star className={classes.textColor} />
            </ListItemIcon>
            <ListItemText className={classes.textColor} primary="Double and Super Drawn." />
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <Star className={classes.textColor} />
            </ListItemIcon>
            <ListItemText
              className={classes.textColor}
              primary="Available more than 20 colors; from jet black toshades of
brown and blonde, ombre, highlights and pastel colors."
            />
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <Star  className={classes.textColor} />
            </ListItemIcon>
            <ListItemText className={classes.textColor} primary="No damage." />
          </ListItem>

          <ListItem > 
            <ListItemIcon>
              <Star className={classes.textColor} />
            </ListItemIcon>
            <ListItemText className={classes.textColor} primary="Instant length and fullness." />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
});
