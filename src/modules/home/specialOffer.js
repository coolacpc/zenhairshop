import React, { memo } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import useStyles from './styles'

export default memo(() => {
    const classes = useStyles();
    return (
        <Grid container className={classes.offerContainer}>
            <Grid item md={12} xs={12}>
                <Typography className={[classes.title, classes.offerHeading]}>
                    Special Offer
            </Typography>

            </Grid>
        </Grid>
    )
})