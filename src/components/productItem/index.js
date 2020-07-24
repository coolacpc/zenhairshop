import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';


export default memo(({ imgUrl, title,price,noDark }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Card onClick={()=> history.push('/products/90909')} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={imgUrl}
                    title={title}
                />
                <CardContent className={noDark?classes.contentNoDark:classes.content}>
                    <Typography className={noDark?classes.textStyleNoDark:classes.textStyle} variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                    <Typography className={noDark?classes.priceNoDark:classes.price} color="textColor" component="h5">
                       <Box align="center" fontWeight="fontWeightBold"  >
                        {price}
                        </Box>
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    )
})