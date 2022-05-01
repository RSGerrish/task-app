import React from "react";

const Overview = (props) => {
  const { tasks, onDeleteClicked, onEditClicked } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return <li key={task.id}>{index + 1} {task.text}
        <button onClick={onDeleteClicked} value={index}>X</button>
        <button onClick={onEditClicked} value={index}>Edit</button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;