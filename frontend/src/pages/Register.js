import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css";

function Register() {

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Join ShopSphere and start your shopping journey.
        </p>

        <form className="auth-form">

          {/* Username */}
          <input
            type="text"
            placeholder="Enter Username"
          />

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

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
          />

          {/* Button */}
          <button type="submit">
            Create Account
          </button>

        </form>

        <div className="bottom-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Register;