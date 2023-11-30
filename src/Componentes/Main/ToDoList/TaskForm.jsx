import React, { useState } from 'react';


const TaskForm = ({ addTask, toList }) => {
    const [nametask, setTask] = useState('');
  const [timetask, setTime] = useState('');

  const handleNameChange = (e) => {
    setTask(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
        name: nametask,
        time: timetask,
    }
      addTask( task ); 

      toList();
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">
            Nombre de la Tarea:
          </label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            name="name"
            value={nametask}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskTime" className="form-label">
            Hora de la Tarea:
          </label>
          <input
            type="time"
            className="form-control"
            id="taskTime"
            name="time"
            value={timetask}
            onChange={handleTimeChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;