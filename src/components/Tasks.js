import React from "react";
import Task from "./Task";

const Tasks = (props) => {

  return (
    <div>
      {(props.tasks).map((task) => (
        <Task onDelete={props.onDelete} onDoubleClick={props.onDoubleClick} key={task.id} tasks={task} />
      ))}
    </div>
  );
};

export default Tasks;
