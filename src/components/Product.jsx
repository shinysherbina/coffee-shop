import React from "react";

function Product(props) {
  const starFill = `${process.env.PUBLIC_URL}/images/Star_fill.svg`;
  const star = `${process.env.PUBLIC_URL}/images/Star.svg`;

  return (
    <div className="product-card dm-sans">
      <div className="product-image">
        <img className="image" src={props.item.image} alt={props.item.name} />
        {props.item.popular && (
          <span className="dm-sans-small popular bold">Popular</span>
        )}
      </div>
      <div className="product-details">
        <h4 className="dm-sans-body ">{props.item.name}</h4>
        <span className="dm-sans-price price bold">{props.item.price}</span>
      </div>
      <div className="product-details">
        {props.item.rating ? (
          <div className="rating">
            <img className="star" src={starFill} alt="yellow star" />
            <span className="dm-sans-label medium">
              {props.item.rating}
              <span className="dim"> ({props.item.votes} votes)</span>
            </span>
          </div>
        ) : (
          <div className="rating">
            <img className="star" src={star} alt="star outline" />
            <span className="dim dm-sans-label medium">No ratings</span>
          </div>
        )}

        {!props.item.available && (
          <h4 className="dim dm-sans-label medium red">Sold Out</h4>
        )}
      </div>
    </div>
  );
}

export default Product;
