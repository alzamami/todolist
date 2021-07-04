/* Components */
import ToDoItem from "./ToDoItem";
/* Data Store */
import dataStore from "../sotes/dataStore";
/* Libraries */
import { observer } from "mobx-react";
import { useState } from "react";
/* Styles */
import { SelectPri } from "../styles";

const ToDoList = () => {
  const doneList = dataStore.data.filter((toDo) => toDo.stat === true);
  const undoneList = dataStore.data
    .filter((toDo) => toDo.stat === false)
    .sort((a, b) => {
      const orders = { LOW: 2, MEDIUM: 1, HIGH: 0 };
      return orders[a.priority] - orders[b.priority];
    });
  /* useState Decl. */
  const [newName, setNewName] = useState({
    name: "",
    priority: "",
  });
  /* onchange for input and select */
  const handleChange = (event) => {
    setNewName({
      ...newName,
      [event.target.name]: event.target.value,
    });
  };
  /* Sumbit button */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    event.target.name.value = "";
    dataStore.newTask(newName);
    setNewName({
      name: "",
      priority: "",
    });
  };
  /* Reset Button */
  const handleReset = () => {
    doneList.map((task) =>
      task.stat === true ? dataStore.updateStat({ ...task, stat: false }) : task
    );
  };
  /* Remove Button */
  const handleRemove = () => {
    dataStore.data.map((task) => dataStore.deleteTask(task.id));
  };
  return (
    <div>
      {/* Add Reset and Remove Button  */}
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-warning m-1"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-outline-danger m-1"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
      {/* Add Task input and button */}
      <form className="col-6" onSubmit={handleSubmit}>
        <div className="input-group mb-3 ">
          <SelectPri
            onChange={handleChange}
            name="priority"
            className="form-select form-select-sm mx-auto"
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </SelectPri>
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
      {/* New Task Table */}
      <div>
        {undoneList.length !== 0 ? (
          <table className=" table table-dark text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task Name</th>
                <th scope="col">Priority</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {undoneList.map((toDo, i) => (
              <ToDoItem toDo={toDo} i={i} />
            ))}
          </table>
        ) : (
          <div className="p-3 mb-2 bg-success text-white text-center">
            All Tasks Completed
          </div>
        )}
      </div>
      <hr />
      {doneList.length !== 0 ? (
        <table className=" table table-dark text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task Name</th>
              <th scope="col">Priority</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {doneList.map((toDo, i) => (
            <ToDoItem toDo={toDo} i={i} design={"table-success"} />
          ))}
        </table>
      ) : (
        <div className="p-3 mb-2 bg-warning text-dark text-center">
          No Tasks Completed
        </div>
      )}
    </div>
  );
};

export default observer(ToDoList);
