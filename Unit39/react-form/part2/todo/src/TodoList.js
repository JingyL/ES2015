import React, {useState} from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./Todo";
import { v4 as uuid } from 'uuid';

function TodoList() {
    const [lists, setlists] = useState([]);
    const addToDo = (newlists) => {
        setlists(lists => [...lists, { ...newlists, id: uuid() }])
    }
    const handleRemove = (id) => {
        setlists(lists => lists.filter(list => list.id !== id));
    }

  return (
    <div>
        {lists.map(({id, todo})=>
        <ToDo key={id} handleRemove={handleRemove} id={id} todo={todo}></ToDo>)}
    <NewToDoForm addToDo={addToDo}></NewToDoForm>
    </div>
  );
}

export default TodoList;
