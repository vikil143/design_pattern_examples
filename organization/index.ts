// Creating app based on small oraganization of their tasks

/*
  Create a small organiztion where we have task and tasklist. Created by someone and assigned individual persons 
  All employee have this roles
  1. Task doing ==> Every Emmployee
  2. Assign Task and Edit Access ==> By Specific Employee
  3. All accessn to someone ==> which is CEO.

  // Salary distubution was done by HR team.
  // 
*/

/*
  Solution 

*/

import employees from "./controllers/employees";
import { Employee } from "./controllers/employee";
import { HrLata } from "./users/Lata";
import { EmpMamta } from "./users/Mamta";
import { EmpRama } from "./users/Rama";

class Task {}

class Salary {}

// This are tasks which are assigned to employee
function main() {
  // First Accepting some Employee by CEO
  // const employees = new Employees();
  const hrLata: Employee = new HrLata(2, "Lata", "Female", "HR", 10000);
  employees.addEmployee(hrLata);
  const emMamta = new EmpMamta(1, "Mamta", "Female", "Employee", 15000);
  const emRama = new EmpRama(1, "Rama", "Male", "Employee", 15000);
  hrLata.addEmployee(emMamta);
  hrLata.addEmployee(emRama);
  employees.printEmployeelist();
  emMamta.doingTask();
  emRama.doingTask();
  // Later add employee by HR Team
  // Remove some Employee by CEO
  // Salary pass on time by HR Team
}

main();
