"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, AUTH_PREFIX, DEFAULT_FETCH_OPTIONS } from "../config";

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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}${AUTH_PREFIX}/login`, {
        ...DEFAULT_FETCH_OPTIONS,
        method: "POST",
        headers: {
          ...DEFAULT_FETCH_OPTIONS.headers,
          "Origin": window.location.origin,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        setError(data.message || "Login failed. Please check your credentials.");
        console.error("Login error:", data);
        return;
      }
      
      console.log("Login successful:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Connection error. Please try again later.");
    } finally {
      setIsLoading(false);
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

      {error && (
        <div
          style={{
            color: "#ff6b6b",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px 15px",
            borderRadius: "4px",
            marginBottom: "15px",
            width: "300px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

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

      <button 
        style={{
          ...buttonStyleLogin,
          opacity: isLoading ? 0.7 : 1,
          cursor: isLoading ? "not-allowed" : "pointer"
        }} 
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>

      <div style={linkStyle} onClick={() => navigate("/")}>
        Don&apos;t have an account? Sign up
      </div>
    </div>
  );
}
