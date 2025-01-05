import React from "react";
import "./CategorySection.css";

const categories = [
    { name: "Books", img: "https://via.placeholder.com/150x150" },
    { name: "Stationery", img: "https://via.placeholder.com/150x150" },
    { name: "Gifts", img: "https://via.placeholder.com/150x150" },
    { name: "Offers", img: "https://via.placeholder.com/150x150" },
];

const CategorySection = () => {
    return (
        <div className="category-section">
            <h2>Featured Categories</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src={category.img} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
