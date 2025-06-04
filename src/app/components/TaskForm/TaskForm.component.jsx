"use client";

import React, { useEffect, useState } from "react";
import { buttonStyle, inputStyle } from "../LocalComponentLibrary";

export default function TaskForm({ onSubmit, task, id, setIsModalOpen }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onSubmit({ name: taskName, description: description, id: id });
      setTaskName("");
      setDescription("");
    }
    setIsModalOpen(false);
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
          placeholder="Task name..."
          required
        />
        <input
          id="taskName"
          type="text"
          style={inputStyle}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description..."
          required
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button type="submit" style={buttonStyle}>
          {id ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
}
