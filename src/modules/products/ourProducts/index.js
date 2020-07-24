import React, { memo } from 'react'
import ProductItem from '../../../components/productItem'
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'


export default memo((props) => {
    const classes = useStyles();
    var containerStyle= props.isLeftText?classes.blackColor:classes.textStyle
    return (
        <div className={classes.main}>
            <Typography align={props.isLeftText?"left":"center"} className={containerStyle} variant="body2" component="p">
                {props.sectionName}
            </Typography>
            <Grid container alignContent="center" justify="center" className={classes.root} spacing={0}>
                {
                    props.products.map(singleItem => (
                        <Grid className={classes.itemGrid} item md={4} xs={12}>
                            <ProductItem
                                noDark={props.isLeftText}
                                title={singleItem.title}
                                imgUrl={singleItem.imgUrl}
                                price={singleItem.price}
                            />
                        </Grid>

                    ))
                }
            </Grid>
        </div>
    )
})