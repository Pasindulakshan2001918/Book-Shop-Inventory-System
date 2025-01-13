import React from 'react'
import './Banner.css';
import bannerImg from "../../assets/banner1.png"

const Banner = () => {
  return (
    <div className="banner-section">

        <div className="banner-image">
            <img src={bannerImg} width={450} height={400} alt=""/>
        </div>

        <div className="text-block">
            <h1 className="banner-title">New Releases This Week</h1>
            <p className="title-description">It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
            </p>
            <button className="btn-primary">Subscribe</button>
        </div>

        
    </div>
  )
}

export default Banner;