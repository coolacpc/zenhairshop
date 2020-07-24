import React from "react";
import useStyles from "./styles";

const Services = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.services_main_container}>
      <div>
        <h1 style={{ margin: 0 }}>
          <span className={classes.headingSpan}>Services</span>
        </h1>
      </div>
      <div>
        <span style={{ fontSize: 10 }}>Coming Soon ...</span>
      </div>
    </div>
  );
};

export default Services;
