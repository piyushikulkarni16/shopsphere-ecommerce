import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {

  const navigate = useNavigate();

  // Payment Method
  const [paymentMethod, setPaymentMethod] =
    useState("");

  // Cart Items
  const [cartItems, setCartItems] =
    useState([]);

  // Load Cart
  useEffect(() => {

    const cart =
      JSON.parse(localStorage.getItem("cart"))
      || [];

    setCartItems(cart);

  }, []);

  // Total Items
  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => {

      const price = Number(
        item.price.replace(/[₹,]/g, "")
      );

      return total + (
        price * item.quantity
      );

    },
    0
  );

  // Place Order
  const handleOrder = (e) => {

    e.preventDefault();

    // Clear Cart
    localStorage.removeItem("cart");

    // Redirect
    navigate("/order-success");

  };

  return (

    <div className="checkout-page">

      {/* Header */}
      <div className="checkout-header">

        <h1>Checkout</h1>

        <p>
          Complete your order securely and quickly.
        </p>

      </div>

      {/* Main */}
      <div className="checkout-container">

        {/* Left Side */}
        <div className="checkout-form">

          <h2>Shipping Information</h2>

          <form onSubmit={handleOrder}>

            {/* Row */}
            <div className="form-group">

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            {/* Row */}
            <div className="form-group">

              <input
                type="text"
                placeholder="Phone Number"
                required
              />

              {/* City */}
              <select required>

                <option value="">
                  Select City
                </option>

                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
                <option>Nashik</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Ahmedabad</option>

              </select>

            </div>

            {/* Address */}
            <textarea
              placeholder="Full Address"
              required
            ></textarea>

            {/* Row */}
            <div className="form-group">

              {/* State */}
              <select required>

                <option value="">
                  Select State
                </option>

                <option>Maharashtra</option>
                <option>Gujarat</option>
                <option>Karnataka</option>
                <option>Delhi</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Tamil Nadu</option>

              </select>

              <input
                type="text"
                placeholder="Pincode"
                required
              />

            </div>

            {/* Payment */}
            <h2 className="payment-title">

              Payment Method

            </h2>

            {/* Payment Options */}
            <div className="payment-options">

              {/* Card */}
              <label>

                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                Credit / Debit Card

              </label>

              {/* UPI */}
              <label>

                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                UPI Payment

              </label>

              {/* COD */}
              <label>

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                Cash On Delivery

              </label>

            </div>

            {/* Card Fields */}
            {paymentMethod === "card" && (

              <div className="payment-details">

                <input
                  type="text"
                  placeholder="Card Number"
                  required
                />

                <div className="form-group">

                  <input
                    type="text"
                    placeholder="Expiry Date"
                    required
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                    required
                  />

                </div>

              </div>

            )}

            {/* UPI */}
            {paymentMethod === "upi" && (

              <div className="payment-details">

                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  required
                />

              </div>

            )}

            {/* Button */}
            <button type="submit">

              Place Order

            </button>

          </form>

        </div>

        {/* Right Side */}
        <div className="checkout-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">

            <p>Total Items</p>

            <span>
              {totalItems}
            </span>

          </div>

          <div className="summary-row">

            <p>Shipping</p>

            <span>
              Free
            </span>

          </div>

          <div className="summary-row">

            <p>Total Price</p>

            <span>
              ₹{totalPrice.toLocaleString()}
            </span>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Checkout;