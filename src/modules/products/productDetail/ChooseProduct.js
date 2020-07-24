import React, { memo, useState } from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, CardMedia, ButtonGroup } from '@material-ui/core'
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 474, min: 0 },
        items: 3
    }
};
const imgUrl = "https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg"

const quantity = [
    imgUrl,
    imgUrl,
    imgUrl,
    imgUrl,
    imgUrl,
    imgUrl,
    imgUrl
]

const colors = [
    "purple",
    "orange",
    '#ff5757'
]
export default memo(() => {
    const classes = useStyles();
    const [quantityValue, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(quantityValue + 1)
    }


    const decrease = () => {
        setQuantity(quantityValue - 1)

    }
    return (
        <Grid container>
            <Grid xs={12} md={6} item>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={imgUrl}
                    title={"product"}
                />

                <Carousel className={classes.itemQuantity} responsive={responsive}>

                    {
                        quantity.map((item) => (
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="80"
                                image={item}
                                title={"product"}
                                className={classes.imgQuantity}
                            />
                        ))
                    }





                </Carousel>

                <Typography className={[classes.heading, classes.mr20]}>
                    Colors
                </Typography>

                <Carousel className={classes.itemQuantity} responsive={responsive}>

                    {
                        colors.map((item) => (
                            <Button className={classes.colorView} style={{ backgroundColor: item }} />
                        ))
                    }





                </Carousel>


            </Grid>
            <Grid className={classes.padding} xs={12} md={6} item>
                <Grid className={classes.row} item>
                    <Typography className={classes.heading}>
                        Product Name
                    </Typography>
                    <Typography className={classes.heading}>
                        1,555 SAR
                    </Typography>
                </Grid>

                <Typography className={classes.subHeading}>
                    Shoes
                </Typography>

                <Typography className={[classes.heading, classes.mr20]}>
                    Specifications
                </Typography>

                <Typography className={classes.subHeading}>
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                </Typography>

                <center>

                    <div className={classes.cartView}>
                        <Typography className={classes.heading}>
                            1,555 SAR
                    </Typography>
                        <ButtonGroup color="secondary" aria-label="outlined primary button group">
                            <Button onClick={decrease}>-</Button>
                            <Button>{quantityValue}</Button>
                            <Button onClick={increase}>+</Button>
                        </ButtonGroup>

                        <Button color="secondary" variant="contained" onClick={increase}>Add To Cart</Button>
                    </div>

                </center>
            </Grid>

            <Grid className={classes.padding} xs={12} md={12} item>
                <Typography className={[classes.heading, classes.mr20]}>
                    Description
                </Typography>

                <Typography className={[classes.subHeading, classes.mr20]}>
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                    Here is a lighter version of the library for detecting the user's device type alternative.
                </Typography>
            </Grid>

        </Grid>
    )
})