import React from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./index.css";
import Rating from "@material-ui/lab/Rating";
import AnimatedShowMore from 'react-animated-show-more';

const HairExtensionProductGrids = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <div className="hairExe_main_container">
      <div className="hairExe_Grids">
        <Grid container spacing={3}>
          <Grid item lg={4} className="leftBarGrid">
            <Paper className={classes.paper}>
              <div className={classes.leftBar}>
                <div class={classes.block_title}>
                  <strong>
                    <span style={{ letterSpacing: 4 }}>Shop By</span>
                  </strong>
                </div>
                <dl
                  style={{
                    position: "relative",
                    zoom: 1,
                    left: 0,
                    top: 0,
                    margin: 0,
                  }}
                >
                  <dt
                    style={{
                      color: "#666",
                      fontWeight: 400,
                      fontSize: 11,
                      padding: "7px 15px",
                      lineHeight: 1.42857143,
                    }}
                  >
                    Rating
                  </dt>
                  <dd
                    style={{
                      padding: "0 15px 0 20px",
                      margin: 0,
                      lineHeight: 1.42857143,
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <ol
                      style={{
                        borderLeft: "solid 1px #b3b3b3",
                        overflow: "hidden",
                        width: "100%",
                        marginBottom: 10,
                        marginTop: 0,
                        listStyle: "none",
                        padding: 0,
                      }}
                    >
                      <li
                        className="rating-link"
                        style={{
                          overflow: "hidden",
                          margin: "4px 0 0",
                          color: "#666",
                        }}
                      >
                        <a>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                          <span
                            style={{
                              position: "absolute",
                              marginTop: 4,
                              marginLeft: 3,
                              fontSize: 13,
                            }}
                          >
                            1 & up (4)
                          </span>
                        </a>
                      </li>
                    </ol>
                  </dd>
                  <dt
                    style={{
                      color: "#666",
                      fontWeight: 400,
                      fontSize: 11,
                      padding: "7px 15px",
                      lineHeight: 1.42857143,
                    }}
                  >
                    Color
                  </dt>
                  <dd
                    style={{
                      padding: "0 15px 0 20px",
                      margin: 0,
                      lineHeight: 1.42857143,
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <ol
                      style={{
                        borderLeft: "solid 1px #b3b3b3",
                        overflow: "hidden",
                        width: "100%",
                        marginBottom: 10,
                        marginTop: 0,
                        listStyle: "none",
                        padding: 0,
                      }}
                    >
                      <li
                        className="color-span"
                        style={{
                          overflow: "hidden",
                          margin: "4px 0 0",
                          color: "#666",
                        }}
                      >
                        <AnimatedShowMore
                          height={100}
                          toggle={({ isOpen }) =>
                            isOpen ? "Show less" : "Show more"
                          }
                          speed={200}
                          shadowColor="none"
                        >
                          {/* Lots of stuff goes here */}
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                          <a>
                            <span
                              style={{
                                marginTop: 4,
                                marginLeft: 3,
                                fontSize: 10,
                              }}
                            >
                              1 (4)
                            </span>
                          </a>
                          <br />
                        </AnimatedShowMore>
                      </li>
                    </ol>
                  </dd>
                  <dt
                    style={{
                      color: "#666",
                      fontWeight: 400,
                      fontSize: 11,
                      padding: "7px 15px",
                      lineHeight: 1.42857143,
                    }}
                  >
                    Pricing
                  </dt>
                </dl>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={8}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HairExtensionProductGrids;
