import { CEO, TEmployee, TGender, TRole } from "../types";
import { Employee } from "./employee";

class Employees {
  staff: TEmployee[] = [CEO];

  addEmployee(employee: Employee) {
    this.staff.push(employee);
    console.log("Congrates you're hired, ", employee.name);
  }

  removeEmployee(employeeId: number) {
    this.staff.filter((employee) => employee.id !== employeeId);
  }

  printEmployeelist() {
    this.staff.forEach((item, index) => {
      console.log(
        index + 1,
        ") " + item.name,
        "has role was " + item.role,
        " has salary was",
        item.salary
      );
    });
  }
}

const employees = new Employees();

export { employees };
