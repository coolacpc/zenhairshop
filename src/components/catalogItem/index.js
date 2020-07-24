import React, { memo } from "react";
import useStyles from "./styles";
import { Button, CardMedia } from "@material-ui/core";
import { beforeAndAfter } from "../../config/dummyData";

export default memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.route}>
      {beforeAndAfter.map((index, key) => (
        <div>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="400"
            image={index.imgUrl}
            title={"product"}
          />
          <center>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.btn}
            >
              Get the Look
            </Button>
          </center>
        </div>
      ))}
    </div>
  );
});
