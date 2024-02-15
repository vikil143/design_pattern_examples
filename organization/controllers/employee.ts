import { TEmployee, TGender, TRole } from "../types";
import Employees from "./employees";

export class Employee {
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
  // Doing tasks and assign tasks
  doingTask() {
    console.log("Lot's of work yes we are doing the task!!!");
  }

  addEmployee(employees: Employees, employee: TEmployee) {
    this.doingTask();
    employees.addEmployee(
      employee.id,
      employee.name,
      employee.gender,
      employee.role,
      employee.salary
    );
  }
}
