import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import {useHistory} from "react-router-dom"
import {ourProducts} from "../../../config/dummyData"
import useStyles from "./styles";

export default function FullWidthGrid() {
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = (e) => {
    history.push(`/BlogDetails/${e.target.id}`)
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ marginTop: 10, marginBottom: 10 }}>
      {ourProducts.map((index, key) => 
        <Grid item xs={12} sm={4} key={key}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={index.imgUrl}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Topic
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {index.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <strong id={key} style={{cursor: 'pointer'}} onClick={handleRoute}>Learn More</strong>
            </CardActions>
          </Card>
        </Grid>
      )}
    
      </Grid> 
    </div>
  );
}
