import React from "react";
import HairExtensionProductGrids from "../../../components/hairextensionproductItems";

const HairExtensionProduct = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        width: "90%",
        marginBottom: 30,
        marginTop: 30,
      }}
    >
      <HairExtensionProductGrids />
    </div>
  );
};

export default HairExtensionProduct;
