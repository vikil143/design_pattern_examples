import { Employee } from "../controllers/employee";
import { TGender, TRole } from "../types";

export class HrLata extends Employee {
  constructor(
    id: number,
    name: string,
    gender: TGender,
    role: TRole,
    salary: number
  ) {
    super(id, name, gender, role, salary);
  }
  doingTask(): void {
    console.log("Lot's of work yes we are doing the task!!! -", this.name);
  }
}
