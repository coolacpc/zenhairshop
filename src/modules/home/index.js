import React,{memo} from 'react';
import OurProducts from '../products/ourProducts'
import HomeSwipper from '../../components/homeSwipper'
import {ourProducts} from '../../config/dummyData';
import DescriptionSection from './descriptionSection';
import BeforeAndAfter from './beforeCatelog';
// import SpecialOffer from './specialOffer';

import useStyles from './styles'
export default memo(() =>{
    const classes = useStyles();
    return (
        <div className={classes.bg}>
            <HomeSwipper />
            <OurProducts products = {ourProducts} sectionName="Our Products" />
            <DescriptionSection />
            <BeforeAndAfter />
            {/* <SpecialOffer /> */}
        </div>    

    )

})
