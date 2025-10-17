// App.js
import React, { useState } from 'react';
import ProductDetailPopup from './ProductDetailPopup';
import { products } from './data'; // Import data from Step 1
import './App.css'; // Basic styling for the list

function App() {
  // State 1: Holds the full product object to display
  const [selectedProduct, setSelectedProduct] = useState(null);
  // State 2: Controls visibility of the pop-up
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handler to open the pop-up
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  // Handler to close the pop-up
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null); // Clear the data
  };

  return (
    <div className="app-container">
      <h1>KL University Online Store 📚</h1>
      <h2>Available Products</h2>
      
      <div className="product-list-grid">
        {products.map(product => (
          <div 
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)} // Click handler
          >
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="short-desc">{product.shortDescription}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>

      {/* CONDITIONAL RENDERING of the Pop-up */}
      {isPopupOpen && selectedProduct && (
        <ProductDetailPopup
          product={selectedProduct}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default App;

/* App.css */
.app-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.product-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.price {
  font-weight: bold;
  color: #333;
}
button {
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}