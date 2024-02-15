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

import Employees from "./controllers/employees";
import { Employee } from "./controllers/employee";

class Task {}

class Salary {}

// This are tasks which are assigned to employee
function main() {
  // First Accepting some Employee by CEO
  const employees = new Employees();

  const HRLata: Employee = new Employee(2, "Lata", "Female", "HR", 10000);

  const esRef = employees.reference();

  employees.addEmployee(
    HRLata.id,
    HRLata.name,
    HRLata.gender,
    HRLata.role,
    HRLata.salary
  );

  const EmMamta = new Employee(1, "Mamta", "Female", "Employee", 15000);

  const EmRama = new Employee(1, "Rama", "Male", "Employee", 15000);

  HRLata.addEmployee(esRef, EmMamta);
  HRLata.addEmployee(esRef, EmRama);

  employees.printEmployeelist();

  EmMamta.doingTask();
  EmRama.doingTask();
  // Later add employee by HR Team
  // Remove some Employee by CEO
  // Salary pass on time by HR Team
}

main();
