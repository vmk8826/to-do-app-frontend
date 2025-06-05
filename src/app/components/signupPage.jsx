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
import { API_BASE_URL, AUTH_PREFIX, DEFAULT_FETCH_OPTIONS } from "../config";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    try {
      const response = await fetch(
        `${API_BASE_URL}${AUTH_PREFIX}/register`,
        {
          ...DEFAULT_FETCH_OPTIONS,
          method: "POST",
          headers: {
            ...DEFAULT_FETCH_OPTIONS.headers,
            "Origin": window.location.origin,
          },
          body: JSON.stringify({ name: username, email, password }),
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        setError(data.message || "Registration failed. Please try again.");
        console.error("Signup error:", data);
        return;
      }
      
      console.log("Signup successful:", data);
      navigate("/login");
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
        Sign Up
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

      <button 
        style={{
          ...buttonStyleSignup,
          opacity: isLoading ? 0.7 : 1,
          cursor: isLoading ? "not-allowed" : "pointer"
        }} 
        onClick={handleSignup}
        disabled={isLoading}
      >
        {isLoading ? "Signing up..." : "Signup"}
      </button>

      <div style={linkStyleSignup} onClick={() => navigate("/login")}>
        Already have an account? Login
      </div>
    </div>
  );
}
