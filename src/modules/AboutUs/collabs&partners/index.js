import React from "react";
import useStyles from "./styles";

const CollabsAndPartners = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.Collabs_main_container}>
      <div>
        <h1 style={{ margin: 0 }}>
          <span className={classes.headingSpan}>COLLABORATION & PARTNERS</span>
        </h1>
      </div>
      <div>
        <span style={{ fontSize: 12 }}>Coming Soon ...</span>
      </div>
    </div>
  );
};

export default CollabsAndPartners;
