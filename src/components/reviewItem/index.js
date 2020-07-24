import React from "react";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

export default function ReviewItem() {
  const classes = useStyles();
  const dummyData = [
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stars: 3,
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stars: 5,
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stars: 2,
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stars: 4,
    },
  ];
  return (
    <div>
      <Typography variant="h5" style={{paddingBottom: '15px'}}>
        Reviews
      </Typography>
      <Grid
        container
        direction="row"
        className={classes.root}
        spacing={3}
        justify="center"
      >
        {dummyData.map((index, key) => (
          <Grid item xs={12} sm={12} key={key}>
            <Typography variant="p" component="legend">
              {index.review}
            </Typography>
            <Rating name="read-only" value={index.stars} readOnly />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
