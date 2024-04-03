import Task from "../controllers/task";

class Tasks {
  list: Task[];

  get getAllTasks() {
    return this.list;
  }

  set setTask(newTask: Task) {
    this.list.push(newTask);
  }

  get getCompleted() {
    return this.list.filter((item) => item.status === "Done");
  }

  get getProgressTask() {
    return this.list.filter((item) => item.status === "Progress");
  }

  get getPendingTask() {
    return this.list.filter((item) => item.status === "Pending");
  }
}

export default new Tasks();
