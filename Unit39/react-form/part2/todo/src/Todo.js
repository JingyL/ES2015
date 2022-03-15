import React from "react";


function ToDo(props) {
  const task = props.todo;
  const handleDelete =()=>{
    props.handleRemove(props.id);
} 
  return (
    <div>
       <li>{task}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default ToDo;