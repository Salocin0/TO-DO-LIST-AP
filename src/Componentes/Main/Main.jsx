import React from "react";
import Navbar from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./../../App.css";
import TaskList from "./ToDoList/TaskList";
import { useState, useEffect } from "react";
import TaskForm from "./ToDoList/TaskForm";

const Main = () => {
  const [showTaskList, setShowTaskList] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [firstRender,setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) {
      setTasksToLocalStorage(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    setTasks(getTasksFromLocalStorage());
    setFirstRender(false);
  }, []);

  const getTasksFromLocalStorage = () => {
    try {
      const tasksString = localStorage.getItem("tasks");
      if (!tasksString) {
        return [];
      }
      const tasks = JSON.parse(tasksString);

      return tasks;
    } catch (error) {
      return [];
    }
  };

  const setTasksToLocalStorage = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error('Error al guardar tareas en el localStorage:', error);
    }
  };

  const toggleView = () => {
    setShowTaskList((prevShowTaskList) => !prevShowTaskList);
  };

  const addTask = (newTask) => {
    newTask.id = Math.floor(Math.random() * 10000);
    newTask.state = "Pendiente";
    console.log(newTask)
    setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        return updatedTasks;
      });
  };

  const onTaskComplete = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, state: "Completado" };
        }
        return task;
      });
      setTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  const onTaskActivate = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, state: "Pendiente" };
        }
        return task;
      });
      setTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };
  
  const onDeleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4 main">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                {showTaskList ? (
                  <TaskList tasks={tasks} onTaskComplete={onTaskComplete} onDeleteTask={onDeleteTask} onTaskActivate={onTaskActivate} />
                ) : (
                  <TaskForm addTask={addTask} toList={toggleView} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-success botonFlotante btn-lg"
        onClick={toggleView}
      >
        {showTaskList ? (
          <i className="bi bi-plus-lg"></i>
        ) : (
          <i className="bi bi-arrow-left"></i>
        )}
      </button>
    </div>
  );
};

export default Main;
