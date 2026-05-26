import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  // Load cart
  useEffect(() => {

    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // Fix old products without quantity
    const updatedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  }, []);

  // Increase quantity
  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) => {

      if(item.id === id){

        return {
          ...item,
          quantity:item.quantity + 1
        };

      }

      return item;

    });

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {

    const updatedCart = cartItems
    .map((item) => {

      if(item.id === id){

        return {
          ...item,
          quantity:item.quantity - 1
        };

      }

      return item;

    })
    .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Remove item
  const removeItem = (id) => {

    const updatedCart =
      cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Total Items
  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => {

      const price =
        Number(
          item.price.replace(/[₹,]/g, "")
        );

      return total + (price * item.quantity);

    },
    0
  );

  return (

    <div className="cart-page">

      {/* Header */}
      <div className="cart-header">

        <h1>Your Shopping Cart</h1>

        <p>
          Manage your products and proceed
          to secure checkout.
        </p>

      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <h2>
            Your cart is empty
          </h2>

          <Link to="/products">

            <button>
              Continue Shopping
            </button>

          </Link>

        </div>

      ) : (

        <div className="cart-container">

          {/* Left Side */}
          <div className="cart-items">

            {cartItems.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                {/* Image */}
                <div className="cart-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                {/* Info */}
                <div className="cart-info">

                  <span>
                    {item.category}
                  </span>

                  <h2>
                    {item.name}
                  </h2>

                  <h3>
                    {item.price}
                  </h3>

                  {/* Quantity */}
                  <div className="quantity-section">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <p>
                      {item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove Product
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Right Side */}
          <div className="summary-card">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <p>Total Items</p>

              <span>
                {totalItems}
              </span>

            </div>

            <div className="summary-row">

              <p>Total Price</p>

              <span>
                ₹{totalPrice.toLocaleString()}
              </span>

            </div>

            <div className="summary-row">

              <p>Shipping</p>

              <span>
                Free
              </span>

            </div>

            <button
                  className="checkout-btn"
                  onClick={() => navigate("/checkout")}
            >

              Proceed To Checkout

            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default Cart;