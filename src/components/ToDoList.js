import ToDoItem from "./ToDoItem";
import dataStore from "../sotes/dataStore";
import { observer } from "mobx-react";
import { useState } from "react";

const ToDoList = () => {
  const doneList = dataStore.data.filter((toDo) => toDo.stat === true);
  const undoneList = dataStore.data.filter((toDo) => toDo.stat === false);

  const [newName, setNewName] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNewName({
      ...newName,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.newTask(newName);
    event.target.name.value = "";
    console.log(newName);
  };
  return (
    <div>
      <form className="col-4 mx-auto" onSubmit={handleSubmit}>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="add a new task"
            name="name"
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </form>
      {undoneList.map((toDo) => (
        <ToDoItem toDo={toDo} />
      ))}
      <h1>-------------</h1>

      {doneList.map((toDo) => (
        <ToDoItem toDo={toDo} />
      ))}
    </div>
  );
};

export default observer(ToDoList);
