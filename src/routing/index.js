import React from "react";
import { Switch, Route } from "react-router-dom";

//pages import
import Home from "../modules/home";
import Products from "../modules/products/productPage";
import ProductDetail from "../modules/products/productDetail";
import Auth from "../modules/auth/index";
import Cart from "../modules/cart/index";
import Videos from "../modules/features/videos/index";
import Features from "../modules/features/ourFeatures";
import ColorGuide from "../modules/colorGuide";
import BeforeAndAfter from "../modules/home/beforeCatelog.js";
import AboutUs from "../modules/AboutUs/AboutUs";
import CollabsAndPartners from "../modules/AboutUs/collabs&partners";
import Services from "../modules/AboutUs/services";
// import HairExtensionProduct from "../modules/products/hairExtension";
import Blog from "../modules/features/blog/index"
import BlogDetails from "../modules/features/blogDetails/index"
import ContactUs from "../modules/AboutUs/contactUs";

//routing component
export default function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Auth />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path="/Hair extensions">
        <Products />
      </Route>
      <Route path="/Aftercare products">
        <Products />
      </Route>
      <Route  path="/products/:id">
        <ProductDetail />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/Videos">
        <Videos />
      </Route>
      <Route path="/Features">
        <Features />
      </Route>
      <Route path="/Color Guide">
        <ColorGuide />
      </Route>
      <Route path="/About Us">
        <AboutUs />
      </Route>
      <Route path="/Before & after catalogue">
        <BeforeAndAfter />
      </Route>
      <Route path="/Collaboration & partners">
        <CollabsAndPartners />
      </Route>
      <Route path="/Services">
        <Services />
      </Route>
      {/* <Route path="/Hair extensions">
        <HairExtensionProduct />
      </Route> */}
      <Route path="/Blog">
        <Blog />
      </Route>
      <Route path="/BlogDetails/:id">
        <BlogDetails />
      </Route>
      <Route path="/Contact Us">
        <ContactUs />
      </Route>
    </Switch>
  );
}
