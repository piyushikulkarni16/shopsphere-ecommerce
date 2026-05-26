import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  // Login Status
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

    window.location.reload();

  };

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <Link to="/">
          ShopSphere
        </Link>

      </div>

      {/* Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        {/* Before Login */}
        {!isLoggedIn && (

          <>

            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Register
              </Link>
            </li>

          </>

        )}

        {/* After Login */}
        {isLoggedIn && (

          <>

            <li>
              <Link to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Cart
              </Link>
            </li>

            <li>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                Logout

              </button>

            </li>

          </>

        )}

      </ul>

    </nav>

  );
}

export default Navbar;