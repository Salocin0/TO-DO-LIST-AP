import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onDeleteTask, onTaskActivate }) => {

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul className="list-group">
        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskComplete={onTaskComplete}
            onDeleteTask={onDeleteTask}
            onTaskActivate={onTaskActivate}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
