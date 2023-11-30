import React from "react";
import "./../../../App.css";

const TaskItem = ({ task, onTaskComplete, onDeleteTask, onTaskActivate }) => {
  const handleCompleteClick = () => {
    onTaskComplete(task.id);
  };

  const handleActivateClick = () => {
    onTaskActivate(task.id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div
      className={`task-item mb-3 ${
        task.state === "Completado" ? "task-completed" : ""
      }`}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
      <div className="float-end">
        <button
          className={`btn btn-sm btn-success mx-1 ${
            task.state === "Completado" ? "d-none" : ""
          }`}
          onClick={handleCompleteClick}
        >
          <i className="bi bi-check2"></i>
        </button>
        <button
          className={`btn btn-sm btn-success mx-1 ${
            task.state !== "Completado" ? "d-none" : ""
          }`}
          onClick={handleActivateClick}
        >
          <i className="bi bi-arrow-clockwise"></i>
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleDeleteClick}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
