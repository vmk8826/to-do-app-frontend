"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  buttonStyleSignup,
  inputContainerStyleSignup,
  labelStyleSignup,
  linkStyleSignup,
  inputStyleSignup,
} from "./LocalComponentLibrary";
import { API_BASE_URL, AUTH_PREFIX } from "../config";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${AUTH_PREFIX}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name: username, email, password }),
        }
      );

      const data = await response.json();
      navigate("/login");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1c427c",
      }}
    >
      <div
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Sign Up
      </div>

      <div style={inputContainerStyleSignup}>
        <span style={labelStyleSignup}>Username</span>
        <input
          type="text"
          placeholder="Enter Name"
          style={inputStyleSignup}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={inputContainerStyleSignup}>
        <span style={labelStyleSignup}>Email</span>
        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyleSignup}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={inputContainerStyleSignup}>
        <span style={labelStyleSignup}>Password</span>
        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyleSignup}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button style={buttonStyleSignup} onClick={handleSignup}>
        Signup
      </button>

      <div style={linkStyleSignup} onClick={() => navigate("/login")}>
        Already have an account? Login
      </div>
    </div>
  );
}
