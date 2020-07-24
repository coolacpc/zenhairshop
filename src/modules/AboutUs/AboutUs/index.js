import React from "react";
import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.about_main_container}>
      <div className="feature_content">
        <div className={classes.heading}>
          <h1 style={{ margin: 0 }}>
            <span className={classes.headingSpan}>ABOUT US</span>
          </h1>
        </div>
        <div>
          <p>
            <span className={classes.paragraphSpan}>
              Hair is one of the greatest qualities that reflects a woman's
              beauty, and takes great pride in showing it.
            </span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>
              This is why we as Zen Luxury Extensions, offer you quality hair
              extensions that will not only make you feel more
            </span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>
              beautiful than you are, but will guarantee to turn heads.
            </span>
          </p>
          <p style={{ marginTop: 40 }}></p>
          <p>
            <span className={classes.paragraphSpan}>
              With time, Middles Easterners have actively become involved in the
              fashion and art world, and provided great
            </span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>
              quality products. As these fashion trends progressed, Arab women
              have adapted them more and more, and has
            </span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>
              become a fundamentals part of their lives. These trends reflect
              many aspects of life, whether it is a lifestyle,
            </span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>
              clothing, shoes, accessories, you cannot deny hair is not one of
              them.
            </span>
          </p>
          <p style={{ marginTop: 40 }}></p>
          <p>
            <span className={classes.paragraphSpan}>
              With our high quality 100% Virgin Remy hair extensions, we
              guarantee your ultimate satisfaction and an
            </span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>
              unforgettable experience.
            </span>
          </p>
          <p style={{ marginTop: 40 }}></p>
          <p>
            <span className={classes.paragraphSpan}>Best regards,</span>
          </p>
          <p>
            <span className={classes.paragraphSpan}>Zen Hair Family</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
