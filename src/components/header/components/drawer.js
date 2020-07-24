import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from "./styles";
import ColorsIcon from '@material-ui/icons/ColorLens';
import ProductsIcon from '@material-ui/icons/Widgets';
import AboutUsIcon from '@material-ui/icons/PermContactCalendar';
import FeaturesIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';
import Menu from "./menu";
import ENG from "../../../assets/images/en.png";
const AR = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League.svg'

const MyDrawer = React.memo((props) => {
  const classes = useStyles();
  let { state, toggleDrawer, index, setIndex } = props;

  const DrawerList = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {["Products", "Color Guide", "Features", "About Us"].map((text, i) => (
          <Link
            to={`/${text}`}
            className={classes.linkStyle}
            onClick={() => setIndex(i + 1)}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {i === 0 ? (
                  <ProductsIcon color={index === 1 ? "secondary" : "primary"} />
                ) : i === 1 ? (
                  <ColorsIcon color={index === 2 ? "secondary" : "primary"} />
                ) : i === 2 ? (
                  <FeaturesIcon color={index === 3 ? "secondary" : "primary"} />
                ) : (
                  <AboutUsIcon color={index === 4 ? "secondary" : "primary"} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                className={
                  index === i + 1
                    ? classes.secondaryColor
                    : classes.primaryColor
                }
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button key={"text1"}>
          <Menu
            drawerOpen={props.drawerOpen}
            options={[
              {
                title: "English",
                img: ENG,
              },
              {
                title: "Arabic",
                img: AR,
              },
            ]}
          />
        </ListItem>
        <ListItem button key={"text2"}>
          <Menu
            drawerOpen={props.drawerOpen}
            options={[
              {
                title: "JOD",
                img:
                  "https://cdn.webshopapp.com/shops/94414/files/52385814/flag-of-jordan.jpg",
              },
              {
                title: "SAR",
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
              },
              {
                title: "USD",
                img: ENG,
              },
              {
                title: "QAR",
                img:
                  "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3527/18756/qatar-flag__19414.1575323935.jpg?c=2&imbypass=on",
              },
              {
                title: "KWD",
                img: "https://flagpedia.net/data/flags/w580/kw.png",
              },
            ]}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"anchor"}>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={()=>toggleDrawer(false)}
          onOpen={()=>toggleDrawer(true)}
        >
          <DrawerList />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
});

export default MyDrawer;