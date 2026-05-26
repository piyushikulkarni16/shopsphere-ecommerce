import React from "react";
import "../styles/Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">

          <h2>ShopSphere</h2>

          <p>
            ShopSphere is a modern e-commerce platform
            offering premium products with smooth and
            secure shopping experience.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-section">

          <h2>Quick Links</h2>

          <ul>

            <li>Home</li>

            <li>Products</li>

            <li>Cart</li>

            <li>Login</li>

          </ul>

        </div>

        {/* Social */}
        <div className="footer-section">

          <h2>Follow Us</h2>

          <div className="social-links">

            <a href="/">Instagram</a>

            <a href="/">LinkedIn</a>

            <a href="/">Twitter</a>

            <a href="/">Facebook</a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 ShopSphere. All Rights Reserved.
        </p>

      </div>

    </footer>

  );
}

export default Footer;