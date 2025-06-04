"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, AUTH_PREFIX } from "../config";

import {
  inputStyleLogin,
  buttonStyleLogin,
  inputContainerStyle,
  labelStyle,
  linkStyle,
} from "./LocalComponentLibrary";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${AUTH_PREFIX}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Connection error. Make sure your backend server is running.");
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
        Login
      </div>

      <div style={inputContainerStyle}>
        <span style={labelStyle}>Email</span>
        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyleLogin}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={inputContainerStyle}>
        <span style={labelStyle}>Password</span>
        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyleLogin}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button style={buttonStyleLogin} onClick={handleLogin}>
        Login
      </button>

      <div style={linkStyle} onClick={() => navigate("/")}>
        Don&apos;t have an account? Sign up
      </div>
    </div>
  );
}
