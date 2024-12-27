/* eslint-disable react/prop-types */
import CustomButton from "../CustomButton/CustomButton";
import "./TaskCard.css";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskIndex", index);
  };

  return (
    <div
      className="card m-1"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="card-body">
        <p>{title}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            {tags.map((tag, idx) => (
              <CustomButton key={idx} tagName={tag} size="sm" selected />
            ))}
          </div>
          <div onClick={() => handleDelete(index)}>
            <CustomButton
              tagName='<i class="bi bi-trash"></i>'
              variant="outline-danger"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
