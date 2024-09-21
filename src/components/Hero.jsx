import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="all-hero-elements">
          <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <div className="hero-text">
              <p>
                your feet deserve the best and we’re here to help you with our
                shoes. your feet deserve the best and we’re here to help you
                with our shoes.
              </p>
            </div>
            <div className="hero-btn">
              <button>Show Now</button>
              <button className="second-btn">Category</button>
            </div>
            <div className="brand-info">
              <div className="product-available">
                <p>Also Available On</p>
              </div>
              <div className="brand-img">
                <img src="/images/flipkart.png" alt="Flipkart" />
                <img src="/images/amazon.png" alt="Amazon" />
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/shoe_image.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
