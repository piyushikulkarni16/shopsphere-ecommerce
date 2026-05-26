import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {

  const navigate = useNavigate();

  return (

    <div className="success-page">

      <div className="success-card">

        {/* Icon */}
        <div className="success-icon">

          ✓

        </div>

        {/* Title */}
        <h1>
          Order Placed Successfully
        </h1>

        {/* Text */}
        <p>
          Thank you for shopping with us.
          Your order has been placed
          successfully and will be delivered soon.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/products")}
        >

          Continue Shopping

        </button>

      </div>

    </div>

  );
}

export default OrderSuccess;