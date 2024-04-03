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

import { employees } from "./controllers/employees";
import { createUser } from "./users/create-user";

class Task {}

class Salary {}

// This are tasks which are assigned to employee
export default function main() {
  // First Accepting some Employee by CEO
  // const employees = new Employees();
  const hrLata = createUser({
    id: 2,
    name: "Lata",
    gender: "Female",
    role: "HR",
    salary: 10000,
  });
  employees.addEmployee(hrLata);
  const emMamta = createUser({
    id: 1,
    name: "Mamta",
    gender: "Female",
    role: "Employee",
    salary: 15000,
  });
  const emRama = createUser({
    id: 1,
    name: "Rama",
    gender: "Male",
    role: "Employee",
    salary: 15000,
  });
  hrLata.addEmployee(emMamta);
  hrLata.addEmployee(emRama);
  employees.printEmployeelist();
  emMamta.doingTask();
  emRama.doingTask();
  // Later add employee by HR Team
  // Remove some Employee by CEO
  // Salary pass on time by HR Team
}
