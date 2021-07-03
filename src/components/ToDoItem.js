import dataStore from "../sotes/dataStore";
import { CompleteTask, DeleteTask, SelectPri, UndoTask } from "../styles";
import { observer } from "mobx-react";

const ToDoItem = (props) => {


  const handleClick = () => {
    dataStore.updateStat(props.toDo);
  };

  const handleDelete = () => {
    dataStore.deleteTask(props.toDo.id);
  };

  const handleChange = (event) => {
    props.toDo.priority = event.target.value
    dataStore.updatePri(props.toDo);
  }
  return (
    <tbody>

      <tr className={props.design}>
        <th scope="row">{props.i + 1}</th>
        <td>{props.toDo.name}</td>
        <td>{props.toDo.stat ? "DONE" :
          <SelectPri value={props.toDo.priority} onChange={handleChange} className="form-select form-select-sm mx-auto">
            <option data-icon="glyphicon glyphicon-eye-open" value="HIGH">HIGH</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">LOW</option>
          </SelectPri>
        }</td>
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

export default observer(ToDoItem);
