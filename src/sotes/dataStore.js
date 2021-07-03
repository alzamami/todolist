import axios from "axios";
import { makeAutoObservable } from "mobx";

class DataStore {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  newTask = async (newTask) => {
    try {
      await axios.post("http://localhost:8000/task", newTask);
      newTask.id = this.data.length + 1;
      newTask.stat = false;
      newTask.priority = "LOW"
      this.data.push(newTask);
    } catch (error) {
      console.error(error);
    }
  };

  updateStat = async (updateStat) => {
    try {
      const task = this.data.find((data) => data.id === updateStat.id);
      if (task.stat) task.stat = false;
      else task.stat = true;
      await axios.put(
        `http://localhost:8000/task/${updateStat.id}`,
        updateStat
      );
    } catch (error) {
      console.error(error);
    }
  };
  updatePri = async (updatePri) => {
    try {
      this.data.find((data) => data.id === updatePri.id);
      await axios.put(
        `http://localhost:8000/task/${updatePri.id}`,
        updatePri
      );
    } catch (error) {
      console.error(error);
    }
  };

  deleteTask = async (deleteTask) => {
    try {
      await axios.delete(`http://localhost:8000/task/${deleteTask}`);
      const deletedTask = this.data.filter((data) => data.id !== deleteTask);
      this.data = deletedTask;
    } catch (error) {
      console.error(error);
    }
  };

  fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/task");
      this.data = response.data;
    } catch (error) {
      console.error(error);
    }
  };
}

const dataStore = new DataStore();
dataStore.fetchTasks();
export default dataStore;
