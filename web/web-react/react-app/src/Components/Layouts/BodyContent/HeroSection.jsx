import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-slider">
                <img
                    src="https://via.placeholder.com/1200x400?text=Promotion+1"
                    alt="Promotion 1"
                />
                <img
                    src="https://via.placeholder.com/1200x400?text=Promotion+2"
                    alt="Promotion 2"
                />
            </div>
        </div>
    );
};

export default HeroSection;
