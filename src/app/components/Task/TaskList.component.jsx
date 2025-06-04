"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal.component";
import Task from "./Task.component";
import TaskForm from "../TaskForm/TaskForm.component";
import { API_BASE_URL, TASK_PREFIX } from "../../config";

import {
  addButtonStyle,
  deleteButtonStyle,
  taskCountStyle,
  taskListContainerStyle,
  taskListHeaderStyle,
  taskListTitleStyle,
  addTaskRowStyle,
  tasksContainerStyle,
  
} from "../LocalComponentLibrary";

export default function TaskList(props) {
  const { task, onDeleteList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);

  const getTasks = async () => {
    const response = await fetch(
      `${API_BASE_URL}${TASK_PREFIX}/getTasks?id=${task._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    setTasks(data);
  };

  const handleAddTask = async (newTask) => {
    const response = await fetch(
      `${API_BASE_URL}${TASK_PREFIX}/createTask?id=${task._id}`,
      {
        method: "POST",
        body: JSON.stringify({
          name: newTask.name,
          description: newTask.description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    getTasks(); // Refresh tasks after adding
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}${TASK_PREFIX}/deleteTask?id=${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    getTasks();
  };

  const handleEdit = async (newTask) => {
    console.log(newTask);
    const response = await fetch(
      `${API_BASE_URL}${TASK_PREFIX}/updateTask?id=${newTask.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: newTask.name,
          description: newTask.description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, [task]);

  return (
    <div style={taskListContainerStyle}>
      <div style={taskListHeaderStyle}>
        <div style={taskListTitleStyle}>{task?.name}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={taskCountStyle}>{tasks?.length || 0}</div>
          <button
            style={{
              ...deleteButtonStyle,
              color: isDeleteHovered ? "#b02a37" : "#dc3545",
            }}
            onClick={() => onDeleteList(task._id)}
            onMouseEnter={() => setIsDeleteHovered(true)}
            onMouseLeave={() => setIsDeleteHovered(false)}
            title="Delete list"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "currentColor" }}
            >
              <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div style={addTaskRowStyle}>
        <button
          style={{
            ...addButtonStyle,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            backgroundColor: isHovered ? "#1a73e8" : "#4285F4",
          }}
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          +
        </button>
        <div style={{ fontSize: "0.9rem", color: "#6c757d" }}>
          Add a new task
        </div>
      </div>

      <div style={tasksContainerStyle}>
        {tasks?.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <div
            style={{ textAlign: "center", color: "#adb5bd", padding: "20px 0" }}
          >
            No tasks yet
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm
          onSubmit={handleAddTask}
          onCancel={() => setIsModalOpen(false)}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </div>
  );
}
