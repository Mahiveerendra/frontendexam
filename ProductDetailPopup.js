// ProductDetailPopup.js
import React from 'react';
import './Popup.css'; // Import the CSS from Step 2

const ProductDetailPopup = ({ product, onClose }) => {
  return (
    // Overlay
    <div className="modal-overlay">
      {/* Content Box */}
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* HTML entity for 'x' */}
        </button>

        <h2>{product.name}</h2>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image" 
        />
        <p className="detail-price">Price: ${product.price.toFixed(2)}</p>
        
        <h3>Product Details</h3>
        <p>{product.extendedDescription}</p>
        
        {/* You could add an "Add to Cart" button here */}
      </div>
    </div>
  );
};

export default ProductDetailPopup;