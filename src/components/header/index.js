import React, { useState } from 'react';
import useStyles from "./styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MainHeader from "./components/mainHeader"
import MobileHeader from "./components/mobileHeader"
import Drawer from "./components/drawer"
import axios from "axios";

function MyAppBar(props) {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const [isDrawer, showDrawer] = React.useState(false);
    // const [currentUserCountry, setCurrentUserCountry] = React.useState("");
    const matches = useMediaQuery('(min-width:750px)');

    //getting users current ip
    // React.useEffect(()=>{
    //     axios.get('https://ipapi.co/json/').then((response) => {
    //     let data = response.data;
    //     console.log(data)
    //     setCurrentUserCountry(data.country_code);
    // }).catch((error) => {
    //     console.log(error);
    // });
    // },[])
    
    const toggleDrawer = React.useCallback((open)=> {
        showDrawer(open);
    }, []);

    const setNavIndex = React.useCallback((navIndex)=> {
        setIndex(navIndex);
    }, []);

    return (
      <div className={classes.root}>
        {matches ? (
          <MainHeader
            index={index}
            setIndex={setNavIndex}
            currentUserCountry={props.currentUserCountry}
          />
        ) : (
          <>
            <MobileHeader state={isDrawer} toggleDrawer={toggleDrawer} />
            <Drawer
              drawerOpen={true}
              currentUserCountry={props.currentUserCountry}
              index={index}
              setIndex={setNavIndex}
              state={isDrawer}
              toggleDrawer={toggleDrawer}
            />
          </>
        )}
      </div>
    );
}

export default MyAppBar;