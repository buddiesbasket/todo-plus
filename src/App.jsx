import { useEffect, useState } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/TaskForm/TaskForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  let [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleStatusChange = (taskIndex, newStatus) => {
    const updatedTasks = tasks.map((task, index) => 
      index === taskIndex ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <hr className="m-0" />
      <main className="app-main">
        <TaskColumn
          headingName={
            <>
              <i className="bi bi-list-task text-danger me-1"></i> To do
            </>
          }
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
        <TaskColumn
          headingName={
            <>
              <i className="bi bi-hourglass-split text-primary me-1"></i> Doing
            </>
          }
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
        <TaskColumn
          headingName={
            <>
              <i className="bi bi-check-circle-fill text-success me-1"></i> Done
            </>
          }
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
      </main>
    </div>
  );
};

export default App;
