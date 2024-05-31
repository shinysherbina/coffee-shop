import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductList(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  // Fetch the product list from the api
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((theData) => {
        setData(theData);
        // console.log(theData);
      })
      .catch((theError) => {
        setError(theError);
        // console.log(theError);
      });
  }, []);

  if (error) {
    throw new Error("Unable to retreive data. Please try again after a while");
  }
  //console.log(data);
  return (
    <div>
      {data && (
        <div className="product-list-container">
          {/*if Available button is selected, display Product only when available = true else display all */}
          {data.map((item) => {
            return (
              (props.clicked === "available" ? item.available : true) && (
                <Product item={item} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
