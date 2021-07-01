import { makeAutoObservable } from "mobx";
import data from "../data";

class DataStore {
  data = data;

  constructor() {
    makeAutoObservable(this);
  }

  newTask = (newTask) => {
    newTask.id = this.data.length + 1;
    newTask.stat = false;

    this.data.push(newTask);
  };

  updateStat = (updateStat) => {
    const task = this.data.find((data) => data.id === updateStat.id);

    if (task.stat) task.stat = false;
    else task.stat = true;
  };

  deleteTask = (deleteTask) => {
    const deletedTask = this.data.filter((data) => data.id !== deleteTask);
    this.data = deletedTask;
  };
}

const dataStore = new DataStore();
export default dataStore;
