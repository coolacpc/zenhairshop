import React from 'react';
import Grid from "@material-ui/core/Grid";
import BillingInfo from "../billingInformation/index.js";
import CartItems from "../cartItem/index";
import PaymentMethod from "../paymentMethod/index"
import PaymentForm from "../PaymentForm/index"

export function getStepContent(step, handleNext) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Grid container>
              <Grid item xs={12} md={8}>
                <CartItems />
              </Grid>
              <Grid item xs={12} md={4}>
                <BillingInfo handleNext={handleNext} />
              </Grid>
            </Grid>
          </React.Fragment>
        );
      case 1:
        return <PaymentMethod />;
      case 2:
        return <PaymentForm />;
      default:
        throw new Error("Unknown step");
    }
  }