import { StatusTask } from "../types";
import { Employee } from "./employee";

class Task {
  id: number;
  name: string;
  createdDate: Date;
  completedAt: Date;
  assignedTo: Employee;
  assignedBy: Employee;
  timeToCompleted: Date;
  status: StatusTask;
  constructor(
    id: number,
    name: string,
    createdDate: Date,
    completedAt: Date,
    assignedTo: Employee,
    assignedBy: Employee,
    timeToCompleted: Date,
    status: StatusTask
  ) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.completedAt = completedAt;
    this.assignedTo = assignedTo;
    this.assignedBy = assignedBy;
    this.timeToCompleted = timeToCompleted;
    this.status = status;
  }
}

export default Task;
