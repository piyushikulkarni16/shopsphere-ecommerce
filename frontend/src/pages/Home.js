import React from "react";
import "../styles/Home.css";

function Home() {

  return (

    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <h1>
            Discover The Future Of Online Shopping
          </h1>

          <p>
            ShopSphere brings premium fashion, electronics,
            accessories, and lifestyle products with a modern
            shopping experience.
          </p>

          <div className="hero-buttons">

            <button className="shop-btn">
              Shop Now
            </button>

            <button className="explore-btn">
              Explore More
            </button>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;