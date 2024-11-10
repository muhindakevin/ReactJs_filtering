// ProductCard.js
import React from 'react';
import './Product.css';

const ProductCard = ({ name, price, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="product-price">${price}</p>
      <button className="view-button">View Details</button> {/* Button added here */}
    </div>
  );
};

export default ProductCard;
