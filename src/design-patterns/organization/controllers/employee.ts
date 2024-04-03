import { TEmployee, TGender, TRole } from "../types";
import { employees } from "./employees";

// interface IDoTask<T> {
//   (t: T): void;
// }

interface IDoTask {
  doingTask(): void;
}

export class Employee implements IDoTask {
  name: string;
  id: number;
  gender: TGender;
  role: TRole;
  salary: number;

  constructor(
    id: number,
    name: string,
    gender: TGender,
    role: TRole,
    salary: number
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.role = role;
    this.salary = salary;
  }
  doingTask(): void {
    throw new Error("Method not implemented.");
  }
  // Doing tasks and assign tasks
  // doingTask() {
  //   console.log("Lot's of work yes we are doing the task!!! -", this.name);
  // }
  // abstract doingTask(): void;

  addEmployee(employee: Employee) {
    employees.addEmployee(employee);
  }
}
