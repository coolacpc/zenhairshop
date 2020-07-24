import React from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const contain = {
  position: "block",
  width: "100%",
  height: "100%",
};

const LoadingContainer = (props) => <div></div>;

const ContactUs = (props) => {
  const classes = useStyles();
  const [showMap, setShowMap] = React.useState(false);

  return (
    <div className={classes.contact_main_container}>
      <form>
        <div>
          <h2 className={classes.heading}>Personal Info</h2>
          <div className="contact-us">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    fullWidth
                    label="First Name"
                    autoFocus
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    fullWidth
                    label="Last Name"
                    autoFocus
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{ marginBottom: 50, marginTop: 30 }}>
          <h2 className={classes.heading}>MESSAGE</h2>
          <div className="contact-us">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <TextareaAutosize
                    style={{ width: "100%" }}
                    aria-label="minimum height"
                    rowsMin={3}
                    placeholder="Minimum 3 rows"
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{ width: "100%", borderBottom: "1px solid #e6e6e6" }}></div>
        <div className={classes.submit}>
          <Button
            type="submit"
            //   fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
      <div>
        <p className={classes.paragraphs}>
          <strong>Contact us:</strong>
        </p>
        <p className={classes.paragraphs}>
          Phone number:&nbsp;
          <a href="tel:00962796061162" className={classes.pLinks}>
            00962796061162
          </a>
        </p>
        <p className={classes.paragraphs}>
          Email Address:&nbsp;
          <a href="mailto:info@zenhairjo.com" className={classes.pLinks}>
            info@zenhairjo.com
          </a>
          &nbsp;
        </p>
        <p className={classes.paragraphs}>
          Location:&nbsp;Zen Luxury Extensions. Jordan
        </p>
        <p className={classes.paragraphs}>
          Building 15، Thabet Ben Dinar St., Amman 11118
        </p>
      </div>
      <div style={{ marginBottom: 360 }} className="contact-us">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Map
                google={props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
                className="map"
              >
                <Marker position={{ lat: 48.0, lng: -122.0 }} />
              </Map>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyCZQdWZWsNyakL30EbvVherj04c9HcqFc8",
  LoadingContainer: LoadingContainer,
})(ContactUs);
