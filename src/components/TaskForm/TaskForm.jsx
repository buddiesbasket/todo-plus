/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./TaskForm.css";
import Form from "react-bootstrap/Form";

const TaskForm = ({ setTasks }) => {
  let [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checktag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredData = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return {
          ...prev,
          tags: filteredData,
        };
      });
    } else {
      setTaskData((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  console.log(taskData.tags);
  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Enter your Task"
          onChange={handleChange}
        />
        <br />
        <div className="task-form-bottom-line">
          <div>
            <CustomButton
              tagName="HTML"
              type="button"
              selectTag={selectTag}
              selected={checktag("HTML")}
            />
            <CustomButton
              tagName="CSS"
              type="button"
              selectTag={selectTag}
              selected={checktag("CSS")}
            />
            <CustomButton
              tagName="JavaScript"
              type="button"
              selectTag={selectTag}
              selected={checktag("JavaScript")}
            />
            <CustomButton
              tagName="React"
              type="button"
              selectTag={selectTag}
              selected={checktag("React")}
            />
          </div>
          <div className="d-flex justify-content-end">
            <div className="me-3">
              <Form.Select
                aria-label="task-status"
                name="status"
                value={taskData.status}
                onChange={handleChange}
                className="task-status"
              >
                <option value="todo">ToDo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </Form.Select>
            </div>
            <div>
              <button className="task-submit" type="submit">
                <i className="bi bi-plus-lg"></i> Add Task
              </button>
              {/* <CustomButton
                tagName='<i class="bi bi-plus-lg"></i> Add Task'
                className="task-submit"
                type="submit"
              /> */}
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
