import React, { memo } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Button, CardMedia } from "@material-ui/core";
import useStyles from './styles'
import Carousel from "react-multi-carousel";
import {beforeAndAfter} from "../../config/dummyData"
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 474, min: 0 },
        items: 1
    }
};
export default memo(() => {
    const classes = useStyles();
    return (
        <Grid container className={classes.offerContainer} style={{backgroundColor: '#3D3E43'}}>
            <Grid item md={12} xs={12}>
                <Typography className={[classes.title, classes.offerHeading]}>
                    Before & After CataLogue
                </Typography>
                <Carousel responsive={responsive}>
      {beforeAndAfter.map((index, key) => (
                <div className={classes.route}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="400"
            image={index.imgUrl}
            title={"product"}
          />
          <center>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.btn}
            >
              Get the Look
            </Button>
          </center>
    </div>
      ))}
                </Carousel>
            </Grid>
        </Grid>
    )
})