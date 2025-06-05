"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal.component";
import TaskListForm from "./TaskForm/TaskListForm.component";
import TaskList from "./Task/TaskList.component";
import { styles } from "./LocalComponentLibrary";
import { API_BASE_URL, AUTH_PREFIX, TASK_PREFIX } from "../config";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${AUTH_PREFIX}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        alert("Logged out successfully!");
        navigate("/login");
      } else {
        alert("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error during logout");
    }
  };

  const checkAuthentication = useCallback(async () => {
    try {
      console.log("Checking authentication at:", `${API_BASE_URL}${AUTH_PREFIX}/verifyAuth`);
      const response = await fetch(
        `${API_BASE_URL}${AUTH_PREFIX}/verifyAuth`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            // Adding these headers can help with CORS issues
            "Accept": "application/json",
          },
        }
      );

      console.log("Auth response status:", response.status);
      
      if (!response.ok) {
        let errorMessage = "Authentication failed";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
          console.error("Authentication error details:", errorData);
        } catch (e) {
          console.error("Could not parse error response");
        }
        
        console.error(`Authentication failed (${response.status}): ${errorMessage}`);
        setIsAuthenticated(false);
        navigate("/login");
        return false;
      } else {
        try {
          const data = await response.json();
          console.log("Authentication successful:", data);
          setIsAuthenticated(true);
          return true;
        } catch (e) {
          console.error("Error parsing success response:", e);
          // Even if parsing fails, we got a 200 OK, so consider it authenticated
          setIsAuthenticated(true);
          return true;
        }
      }
    } catch (error) {
      console.error("Authentication request error:", error.message);
      setIsAuthenticated(false);
      navigate("/login");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${TASK_PREFIX}/getTaskLists`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        // If unauthorized, check authentication again
        if (response.status === 401) {
          checkAuthentication();
          return;
        }
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${TASK_PREFIX}/createTaskList`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(taskData),
        }
      );

      if (!response.ok) {
        // If unauthorized, check authentication again
        if (response.status === 401) {
          checkAuthentication();
          return;
        }
        alert("Failed to add task");
      } else {
        fetchTasks(); // Refresh the task list
        setIsModalOpen(false); // Close the modal
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Error adding task");
    }
  };

  const handleDeleteList = async (taskId) => {
    const response = await fetch(
      `${API_BASE_URL}${TASK_PREFIX}/deleteTaskList?id=${taskId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    fetchTasks();
  };

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();

      // Periodically verify authentication status to ensure cookie is still valid
      const authCheckInterval = setInterval(() => {
        checkAuthentication();
      }, 5 * 60 * 1000); // Check every 5 minutes

      return () => clearInterval(authCheckInterval);
    }
  }, [isAuthenticated, checkAuthentication]);

  if (isLoading) {
    return <div style={styles.loadingContainer}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Tasks</h1>
        <div>
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div style={styles.taskListContainer}>
        {tasks.map((task) => (
          <TaskList
            key={task._id}
            task={task}
            onDeleteList={handleDeleteList}
          />
        ))}
      </div>

      <button
        style={styles.addButton}
        onClick={() => setIsModalOpen(true)}
        aria-label="Add task"
      >
        +
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskListForm
          onSubmit={handleAddTask}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
