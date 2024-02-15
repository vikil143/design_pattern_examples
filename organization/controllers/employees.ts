import { CEO, TEmployee, TGender, TRole } from "../types";

class Employees {
  staff: TEmployee[] = [CEO];

  reference() {
    return this;
  }

  addEmployee(
    id: number,
    name: string,
    gender: TGender,
    role: TRole,
    salary: number
  ) {
    this.staff.push({
      id,
      name,
      gender,
      role,
      salary,
    });
    console.log("Congrates you're hired, ", name);
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

export default Employees;
