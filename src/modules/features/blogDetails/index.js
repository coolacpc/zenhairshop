import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item xs={12} sm={12}>
          <Card>
            <CardHeader
              title="Title goes here"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
