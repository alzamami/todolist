import ToDoItem from "./ToDoItem";
import dataStore from "../sotes/dataStore";
import { observer } from "mobx-react";
import { useState } from "react";

const ToDoList = () => {
  const doneList = dataStore.data.filter((toDo) => toDo.stat === true);
  const undoneList = dataStore.data.filter((toDo) => toDo.stat === false).sort((a, b) => {
    const orders = { 'LOW': 2, 'MEDIUM': 1, 'HIGH': 0 };
    return orders[a.priority] - orders[b.priority];
  });

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
    console.log(event.target.name.value)
    event.target.name.value = "";
    dataStore.newTask(newName);
    setNewName({
      name: "",
    })
  };
  return (
    <div>
      {/* Add Task input and button */}
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
      {/* New Task Table */}
      <div>
        {(undoneList.length !== 0) ?
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
          :
          <div class="p-3 mb-2 bg-success text-white text-center">All Tasks Completed</div>}

      </div>
      <hr />
      {(doneList.length !== 0) ?
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
        :
        <div class="p-3 mb-2 bg-warning text-dark text-center">No Tasks Completed</div>
      }

    </div>
  );
};

export default observer(ToDoList);
