import { Employee } from "../controllers/employee";

export class EmpRama extends Employee {
  doingTask(): void {
    console.log("Lot's of work yes we are doing the task!!! -", this.name);
  }
}
