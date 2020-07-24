import React from "react";
import useStyles from "./styles";
import { ourFeatures } from "../../../config/featuresData";

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.feature_main_container}>
      <div className="feature_content">
        <div className={classes.heading}>
          <h1 style={{margin:0}}>
            <span className={classes.headingSpan}>
              Zen Luxury Extensions' Features:
            </span>
          </h1>
        </div>
        <div className="feature-lists">
          <ul className={classes.ul}>
            {ourFeatures.map((i) => {
              return (
                <li>
                  <p className={classes.features_list}>{i}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
