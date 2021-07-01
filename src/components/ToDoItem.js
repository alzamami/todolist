import dataStore from "../sotes/dataStore";

const ToDoItem = (props) => {
  const handleClick = () => {
    dataStore.updateStat(props.toDo);
  };

  const handleDelete = () => {
    dataStore.deleteTask(props.toDo.id);
  };
  return (
    <div>
      {props.toDo.name}
      <button
        onClick={handleClick}
        type="button"
        class="btn btn-outline-success btn-sm"
      >
        {props.toDo.stat ? "UNDONE" : "DONE"}
      </button>
      <button
        onClick={handleDelete}
        type="button"
        class="btn btn-outline-danger btn-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
