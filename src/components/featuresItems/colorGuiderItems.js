import React from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./index.css";
import { colorGuides } from "../../config/featuresData";
import ModalVideo from 'react-modal-video'
import 'react-image-lightbox/style.css';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const ColorGuiderItems = (props) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const [imgUrl, setimgUrl] = React.useState("");

  return (
    <div>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId='L61p2uyiMSo' onClose={() => setOpen(false)} />

      <div className={classes.color_guide_content}>
        <div className="heading">
          <h1 className={classes.headingL1}>Zen Color Guide</h1>
        </div>
        <div style={{ marginTop: 10 }}></div>
        {colorGuides.map((items) => {
          return (
            <>
              <h2 className={classes.headingL2}>{items.title}</h2>
              <div className="color_guider">
                <Grid container spacing={3}>
                  {items.imageUrl.map((i) => {
                    return (
                      <Grid item xs={6} sm={3} lg={2} onClick={() => {
                        setimgUrl(i);
                        setOpen(true);
                      }}>
                        <Paper className={classes.paper}>
                          <img
                            className="img-hover"
                            src={i}
                            alt={i}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              verticalAlign: "middle",
                            }}
                          />
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ColorGuiderItems;
