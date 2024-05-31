import React, { useState } from "react";
import CollectionHeader from "./CollectionHeader";
import SelectBar from "./SelectBar";
import ProductList from "./ProductList";

function Collection() {
  const [clicked, setClicked] = useState("all");

  const updateClick = (targetName) => {
    setClicked(targetName);
  };

  return (
    <div className="collection">
      <CollectionHeader />
      <SelectBar clicked={clicked} updateClick={updateClick} />
      <ProductList clicked={clicked} />
    </div>
  );
}

export default Collection;
