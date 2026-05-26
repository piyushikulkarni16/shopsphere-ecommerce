import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {

    e.preventDefault();

    localStorage.setItem(
    "isLoggedIn",
    "true"
);

    window.location.href = "/products";

};

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>
          Login to continue shopping with ShopSphere.
        </p>

        <form className="auth-form" onSubmit={handleLogin}>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
          />

          {/* Login Button */}
          <button type="submit">
            Login
          </button>

        </form>

        <div className="bottom-text">

          Don’t have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Login;