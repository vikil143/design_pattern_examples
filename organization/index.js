"use strict";
// Creating app based on small oraganization of their tasks
Object.defineProperty(exports, "__esModule", { value: true });
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
var employees_1 = require("./controllers/employees");
var employee_1 = require("./controllers/employee");
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
var Salary = /** @class */ (function () {
    function Salary() {
    }
    return Salary;
}());
// This are tasks which are assigned to employee
function main() {
    // First Accepting some Employee by CEO
    var employees = new employees_1.default();
    var HRLata = new employee_1.Employee(2, "Lata", "Female", "HR", 10000);
    var esRef = employees.reference();
    employees.addEmployee(HRLata.id, HRLata.name, HRLata.gender, HRLata.role, HRLata.salary);
    var EmMamta = new employee_1.Employee(1, "Mamta", "Female", "Employee", 15000);
    var EmRama = new employee_1.Employee(1, "Rama", "Male", "Employee", 15000);
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
