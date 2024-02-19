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
var Lata_1 = require("./users/Lata");
var Mamta_1 = require("./users/Mamta");
var Rama_1 = require("./users/Rama");
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
    // const employees = new Employees();
    var hrLata = new Lata_1.HrLata(2, "Lata", "Female", "HR", 10000);
    employees_1.default.addEmployee(hrLata);
    var emMamta = new Mamta_1.EmpMamta(1, "Mamta", "Female", "Employee", 15000);
    var emRama = new Rama_1.EmpRama(1, "Rama", "Male", "Employee", 15000);
    hrLata.addEmployee(emMamta);
    hrLata.addEmployee(emRama);
    employees_1.default.printEmployeelist();
    emMamta.doingTask();
    emRama.doingTask();
    // Later add employee by HR Team
    // Remove some Employee by CEO
    // Salary pass on time by HR Team
}
main();
