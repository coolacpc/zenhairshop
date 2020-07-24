import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography"
import useStyles from "./styles.js"



export default function Strip() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
          <Typography>Free shipping for orders above $100</Typography>
      </Paper>
    </div>
  );
}
