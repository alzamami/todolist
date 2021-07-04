import "./App.css";
/* Components */
import ToDoList from "./components/ToDoList";
import { HeadTitle } from "./styles";

function App() {
  return (
    <div>
      <HeadTitle>To Do List</HeadTitle>
      <ToDoList />
    </div>
  );
}

export default App;
