/* eslint-disable react/prop-types */
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ headingName, tasks, status, handleDelete, handleStatusChange }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const draggedTaskIndex = e.dataTransfer.getData("taskIndex");
    handleStatusChange(parseInt(draggedTaskIndex), status);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow dropping by preventing default behavior
  };

  return (
    <section
      className="task-column"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h4>{headingName}</h4>
      {tasks.map((task, index) =>
        task.status === status ? (
          <TaskCard
            key={index}
            index={index}
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
          />
        ) : null
      )}
    </section>
  );
};

export default TaskColumn;
