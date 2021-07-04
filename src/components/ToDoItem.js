/* Data Store */
import dataStore from "../sotes/dataStore";
/* Styles */
import { CompleteTask, DeleteTask, SelectPri, UndoTask } from "../styles";
/* Library */
import { observer } from "mobx-react";

const ToDoItem = (props) => {
  /* update Status */
  const handleClick = () => {
    dataStore.updateStat(props.toDo);
  };
  /* delete function */
  const handleDelete = () => {
    dataStore.deleteTask(props.toDo.id);
  };
  /* priority function */
  const handleChange = (event) => {
    props.toDo.priority = event.target.value;
    dataStore.updatePri(props.toDo);
  };
  return (
    <tbody>
      <tr className={props.design}>
        <th scope="row">{props.i + 1}</th>
        <td>{props.toDo.name}</td>
        <td>
          {props.toDo.stat ? (
            "DONE"
          ) : (
            <SelectPri
              value={props.toDo.priority}
              onChange={handleChange}
              className="form-select form-select-sm mx-auto"
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
            </SelectPri>
          )}
        </td>
        <td>
          {props.toDo.stat ? (
            <UndoTask
              onClick={handleClick}
              type="button"
              class="btn btn-outline-success btn-sm"
            />
          ) : (
            <CompleteTask
              onClick={handleClick}
              type="button"
              class="btn btn-outline-success btn-sm"
            />
          )}
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
