"use client";

import React, { useState } from "react";
import { buttonStyle, inputStyle } from "../LocalComponentLibrary";

export default function TaskListForm({ onSubmit, onCancel }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onSubmit({ name: taskName });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="taskName"
          type="text"
          style={inputStyle}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter list name"
          required
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button type="submit" style={buttonStyle}>
          Add List
        </button>
      </div>
    </form>
  );
}
