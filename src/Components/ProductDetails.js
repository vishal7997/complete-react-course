import React, { useState } from "react";
import Button from "./Button";

function ProductDetails(props) {
  console.log("Product Details Component Executed");
  let badgeClass = "badge-margin-left-240 badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

  //   let productCount = 0;

  let [productCount, updateCount] = useState(0);

  function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let incrementProductCount = function () {
    // productCount++;
    // console.log(productCount);
    updateCount(++productCount);
  };
  let decrementProductCount = function () {
    // productCount--;
    // console.log(productCount);
    updateCount(--productCount);
  };

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ "margin-right": 30 }}>
        ${props.price}
      </h6>
      <Button eventHandler={decrementProductCount}>-</Button>
      <span style={{ padding: "0px 20px", "font-size": 14 }}>
        {displayFormattedProductCount()}
      </span>
      <Button eventHandler={incrementProductCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "UnAvailable"}
      </span>
    </div>
  );

  // return React.createElement('div', {className: 'd-flex align-items-center justify-content-start mt-1'},
  //     React.createElement('h6', {className: 'font-weight-bold my-2', style: {marginRight: 30}}, "$" + props.price),
  //     React.createElement(Button, {}, "-"),
  //     React.createElement('span', {style: {padding: "0px 20px", fontSize: 14}}, displayFormattedProductCount()),
  //     React.createElement(Button, {}, "+"),
  //     React.createElement('span', {className: badgeClass}, props.isAvailable ? "Available" : "UnAvailable")
  // )
}

export default ProductDetails;
