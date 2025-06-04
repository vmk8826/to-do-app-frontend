import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm.component";
import Modal from "../Modal/Modal.component";
import {
  buttonStyleTask,
  taskContainerStyle,
  taskHeaderStyle,
  taskTitleRowStyle,
  taskTitleStyle,
  statusIndicatorStyle,
  taskDescriptionStyle,
} from "../LocalComponentLibrary";

export default function Task(props) {
  const { task, handleDelete, handleEdit } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteTask = async () => {
    await handleDelete(task._id);
  };

  return (
    <>
      <div
        style={{
          ...taskContainerStyle,
          transform: isHovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 4px 6px rgba(0,0,0,0.1)"
            : "0 1px 3px rgba(0,0,0,0.05)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={taskHeaderStyle}>
          <div style={taskTitleRowStyle}>
            <div
              style={{
                ...statusIndicatorStyle,
                backgroundColor: task.completed ? "#4CAF50" : "#FF5252",
              }}
            />
            <div style={taskTitleStyle}>{task.name}</div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                ...buttonStyleTask,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "currentColor" }}
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
            </button>
            <button
              style={{
                ...buttonStyleTask,
                color: "#f44336",
              }}
              onClick={deleteTask}
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
        {task.description && (
          <div style={taskDescriptionStyle}>{task.description}</div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm
          task={task}
          onSubmit={handleEdit}
          id={task._id}
          onCancel={() => setIsModalOpen(false)}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
}
