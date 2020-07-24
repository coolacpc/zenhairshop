import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

const dummyData = [
  {
    thumbnail: "https://img.youtube.com/vi/v4WCT01zZNA/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=v4WCT01zZNA",
  },
  {
    thumbnail: "https://img.youtube.com/vi/rBbUJ-JIR0g/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=rBbUJ-JIR0g",
  },
  {
    thumbnail: "https://img.youtube.com/vi/ZR1wfJaczOQ/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=ZR1wfJaczOQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/QxBOg_zFfQY/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=QxBOg_zFfQY",
  },
  {
    thumbnail: "https://img.youtube.com/vi/p4DKpeMQ3sE/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=p4DKpeMQ3sE",
  },
  {
    thumbnail: "https://img.youtube.com/vi/fcThU9HONSM/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=fcThU9HONSM",
  },
  {
    thumbnail: "https://img.youtube.com/vi/PPqn6u5M-1g/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=PPqn6u5M-1g",
  },
  {
    thumbnail: "https://img.youtube.com/vi/CsrZ_2gEMP4/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=CsrZ_2gEMP4",
  },
  {
    thumbnail: "https://img.youtube.com/vi/HVYYcdB0kwk/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=HVYYcdB0kwk",
  },
  {
    thumbnail: "https://img.youtube.com/vi/5mQkCzZN5Jc/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=5mQkCzZN5Jc",
  },
  {
    thumbnail: "https://img.youtube.com/vi/8OOJdFpjnkM/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=8OOJdFpjnkM",
  },
  {
    thumbnail: "https://img.youtube.com/vi/LJCRLSX2W14/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=LJCRLSX2W14",
  },
];
export default function CenteredGrid() {
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.youtube.com/watch?v=v4WCT01zZNA"
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea>
              <ReactPlayer width="100%" url={currentVideo} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            {dummyData.map((index, key) => (
              <Grid item xs={12} sm={6} key={key}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="160"
                      id={index.src}
                      image={index.thumbnail}
                      onClick={() => setCurrentVideo(index.src)}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
