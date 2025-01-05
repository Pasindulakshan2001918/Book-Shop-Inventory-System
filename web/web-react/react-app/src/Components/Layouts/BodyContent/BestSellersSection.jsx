import React from "react";
import "./BestSellersSection.css";

const bestSellers = [
    { name: "Product 1", img: "https://via.placeholder.com/150x200" },
    { name: "Product 2", img: "https://via.placeholder.com/150x200" },
    { name: "Product 3", img: "https://via.placeholder.com/150x200" },
    { name: "Product 4", img: "https://via.placeholder.com/150x200" },
];

const BestSellersSection = () => {
    return (
        <div className="best-sellers-section">
            <h2>Best Sellers</h2>
            <div className="best-sellers-grid">
                {bestSellers.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellersSection;
