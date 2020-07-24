import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./config/globalTheme";
import Routing from "./routing";
import Header from "./components/header";
import Footer from "./components/footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""}
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.useState({ apiResponse: res }));
  }


  componentWillMount(){
    this.callAPI();
  }
}


function AppCurrency() {
  const [currentUserCountry, setCurrentUserCountry] = React.useState("");

  //get your ip address

  // React.useEffect(async () => {
  //   const res = await axios.get("https://api.ipify.org/?format=json");
  //   console.log(res.data.ip);
  //   localStorage.setItem("currentIp", res.data.ip);
  // }, []);

  React.useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        console.log(data);
        setCurrentUserCountry(data.currency);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header currentUserCountry={currentUserCountry} />
        <div className="wrapper" style={{ minHeight: "calc(100vh - 353px)" }}>
          <Routing />
        </div>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default AppCurrency;
