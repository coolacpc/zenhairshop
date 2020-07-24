import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import BootstrapInput from "./bootstrapInput";

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" className={classes.root}>
      <Grid item xs={12} sm={3} className={classes.grid}>
        <Typography className={classes.textMargin} variant="h5">
          About Us
        </Typography>
        <Typography className={classes.textMargin}>
          First Arabic site to sell 100% human hair Remy extensions. We offer
          tape in and invisible extensions with medical tape and clip ins in
          various colors.
        </Typography>
        <Typography className={classes.icons}>
          <FacebookIcon />
          <YouTubeIcon style={{marginLeft: '4px'}}/>
          <InstagramIcon style={{marginLeft: '4px'}}/>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.grid}>
        <Typography className={classes.textMargin} variant="h5">
          Company
        </Typography>

        <List className={classes.list}>
          <ListItem>
            <ListItemText>About Us</ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>Privacy Policy</ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>Terms & Conditions</ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>Blog</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.grid}>
        <Typography className={classes.textMargin} variant="h5">
          Help
        </Typography>

        <List className={classes.list}>
          <ListItem>
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>Site Map</ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>info@zenhairshop.com</ListItemText>
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemText>+962797215138</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.grid}>
        <Typography className={classes.textMargin} variant="h5">
          Newsletter
        </Typography>
        <List className={classes.list}>
          <ListItem>
            <Typography>Sign up for our newsletter</Typography>
          </ListItem>
          <ListItem>
            <div style={{ display: "inline-flex" }}>
              <div>
                <BootstrapInput
                  placeholder="Enter your email"
                  id="bootstrap-input"
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    padding: "8.5px 10px",
                    backgroundColor: "#f0cfca",
                    borderRadius: "0px",
                    textTransform: 'capitalize'
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
