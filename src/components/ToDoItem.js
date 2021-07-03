import dataStore from "../sotes/dataStore";
import { CompleteTask, DeleteTask, UndoTask } from "../styles";

const ToDoItem = (props) => {
  const handleClick = () => {
    dataStore.updateStat(props.toDo);
  };

  const handleDelete = () => {
    dataStore.deleteTask(props.toDo.id);
  };
  return (
    <tbody>
      <tr className={props.design}>
        <th scope="row">{props.i + 1}</th>
        <td>{props.toDo.name}</td>
        <td>{props.toDo.stat ? "DONE" : props.toDo.priority}</td>
        <td>
          {props.toDo.stat ?
            <UndoTask
              onClick={handleClick}
              type="button"
              class="btn btn-outline-success btn-sm"
            /> :
            <CompleteTask
              onClick={handleClick}
              type="button"
              class="btn btn-outline-success btn-sm"
            />
          }
          <DeleteTask
            onClick={handleDelete}
            type="button"
            class="btn btn-outline-danger btn-sm"
          />
        </td>
      </tr>

    </tbody>
  );
};

export default ToDoItem;
