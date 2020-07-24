import React from "react";
import Card from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";
import "react-credit-cards/es/styles-compiled.css";
import { TextField, Grid, Container } from "@material-ui/core";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container component="main">
              <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  spacing={1}
                >
                  <Grid item sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Card Number"
                      variant="outlined"
                      type="tel"
                      fullWidth
                      name="number"
                      pattern="[\d| ]{16,22}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} style={{ paddingTop: "20px" }}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      fullWidth
                      variant="outlined"
                      type="text"
                      name="name"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} style={{ paddingTop: "20px" }}>
                    <TextField
                      id="outlined-basic"
                      label="Valid Thru"
                      variant="outlined"
                      type="tel"
                      fullWidth
                      name="expiry"
                      pattern="\d\d/\d\d"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </Grid>
                  <Grid item sm={6} style={{ paddingTop: "20px" }} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="CVC"
                      variant="outlined"
                      type="tel"
                      fullWidth
                      name="cvc"
                      pattern="\d{3,4}"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </Grid>
                  <input type="hidden" name="issuer" value={issuer} />
                </Grid>
              </form>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}
