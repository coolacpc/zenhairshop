import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    navContainer: {
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      '&:hover': {
        cursor: "pointer",
     },
    },
    active: {
      color: "black",
      backgroundColor: theme.palette.navItem,
    },
    linkStyle:{
      color:'white',
      textDecoration:'none'
    }
  })
);

export default function NavItem(props) {
  const classes = useStyles();

  return (
    <Link to={"/"+props.title} className={classes.linkStyle}>
      <div onClick={props.onClick} className={`${classes.navContainer} ${props.active && classes.active}`}>
        <Typography className={classes.linkStyle}>
          {props.title}
        </Typography>
      </div>
    </Link>
  );
}