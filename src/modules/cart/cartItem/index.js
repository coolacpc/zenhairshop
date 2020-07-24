import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CloseIcon from '@material-ui/icons/Close';
import CardMedia from "@material-ui/core/CardMedia";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { allProducts } from "../../../config/dummyData";
import useStyles from "./styles";

export default function InteractiveList() {
  const classes = useStyles();
  const [quantityValue, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantityValue + 1);
  };

  const decrease = () => {
    setQuantity(quantityValue - 1);
  };
  return (
    <div >
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
              {allProducts.map((index, key) => (
                <div style={{ padding: "20px", position: 'relative' }} key={key}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.cover}
                      image={index.imgUrl}
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                          Description
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {index.title}
                        </Typography>
                      </CardContent>

                      <div className={classes.controls}>
                        <ButtonGroup
                          color="secondary"
                          aria-label="outlined primary button group"
                        >
                          <Button onClick={decrease}>-</Button>
                          <Button>{quantityValue}</Button>
                          <Button onClick={increase}>+</Button>
                        </ButtonGroup>
                      </div>
                    </div>
                    <CloseIcon color="secondary" style={{position: 'absolute', top: 30, right: 30, cursor: 'pointer'}} />
                  </Card>
                </div>
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
