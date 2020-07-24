import React, { memo } from 'react'
import ChooseProduct from './ChooseProduct'
import useStyles from './styles'
import OurProducts from '../ourProducts'
import {ourProducts} from '../../../config/dummyData';
import ReviewItem  from '../../../components/reviewItem/index'

export default memo(() => {
    const classes = useStyles();
    return (
        <div className={[classes.bg]}>
            <ChooseProduct />
            <OurProducts isLeftText products = {ourProducts} sectionName="Related Products"/>
            <ReviewItem />
        </div>
    )
})