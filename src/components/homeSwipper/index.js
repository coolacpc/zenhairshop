import React, { memo } from 'react'
// import Carousel from 'react-material-ui-carousel'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Item from './swipeItem'
var items = [
    {
        title: "Instantly longer and thicker hair!",
        description: "Get the hair you have always wanted in just 5 minutes with our 9 piece clip-in extensions.",
        imgUrl: "https://res.cloudinary.com/dxz1fktua/image/upload/v1595347226/b3_tfc8yb.png",
        buttonText: "SHOW NOW!"

    },
    {
        title: "Browse our transformations!",
        description: "Find your next new look from these beautiful transformations with Zen Luxury Extensions.",
        imgUrl: "https://res.cloudinary.com/dxz1fktua/image/upload/v1595414444/b3_aoncyx.png",
        buttonText: "Before & After Catalog / Transformation Catalog"
    },
    {
        title: "Your new look with no damage",
        description: "Get the Ombré look in just 30 minutes with our luxury tape-in extensions.",
        imgUrl: "https://res.cloudinary.com/dxz1fktua/image/upload/v1595347225/b2_ctwjql.png",
        buttonText: "Before & After ombré pictures"
    },
    {
        title: "Choose your color.",
        description: "See a color you love? Get it now!",
        imgUrl: "https://res.cloudinary.com/zenhaircloud/image/upload/v1595607785/COLOURWHEEL_zutfb9.png",
        buttonText: "Choose Products"
    }
]
export default memo(() => {
    return (
        <Carousel 
        // labels={null}
        statusFormatter={()=> null}
        swipeable
        swipeScrollTolerance={20}
        autoPlay>
            {
                items.map(item => <Item item={item} />)
            }
        </Carousel>
    )
})
