import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

function App() {
  let [newProduct, updateProduct] = useState(null);
  function createProduct(product) {
    updateProduct(product);
  }

  return (
    <div>
      <CreateProduct createProduct={createProduct}></CreateProduct>
      <ProductList newProduct={newProduct}></ProductList>
    </div>
  );
}

export default App;
