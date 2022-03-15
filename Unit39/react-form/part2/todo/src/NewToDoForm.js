import React , {useState} from "react";


function NewToDoForm({addToDo}) {
    const INITIAL_STATE = {
        todo: '',
      }
      const [formData, setFormData] = useState(INITIAL_STATE);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }))
      } 
      const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ ...formData });
        setFormData(INITIAL_STATE)
      }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">To Do</label>
        <input
          id="todo"
          type="text"
          name="todo"
          placeholder="todo"
          value={formData.todo}
          onChange={handleChange}
        />
        <button>Add ToDo</button>
      </form>
    )
}

export default NewToDoForm;