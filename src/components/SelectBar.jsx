import React from "react";

function SelectBar(props) {
  function handleClick(e) {
    props.updateClick(e.target.name);
  }

  return (
    <div className="select-buttons">
      <button
        name="all"
        className={`${
          props.clicked === "all" ? "clicked" : ""
        } select dm-sans-label dm-sans medium`}
        onClick={handleClick}
      >
        All Products
      </button>
      <button
        name="available"
        className={`${
          props.clicked === "available" ? "clicked" : ""
        } select dm-sans-label dm-sans medium`}
        onClick={handleClick}
      >
        Available Now
      </button>
    </div>
  );
}

export default SelectBar;
