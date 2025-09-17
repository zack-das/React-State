import React, { useState } from "react";

function Item({ name, category }) {
  // State for tracking if item is in cart
  const [inCart, setInCart] = useState(false);

  // Toggle cart status
  const toggleCart = () => {
    setInCart(!inCart);
  };

  
  const liClassName = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  
  // Button style changes to purple when in cart
  const buttonStyle = inCart ? { backgroundColor: "purple", color: "white" } : {};

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add" 
        onClick={toggleCart}
        style={buttonStyle} 
      >
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
