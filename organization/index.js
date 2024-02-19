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
var create_user_1 = require("./users/create-user");
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
    var hrLata = (0, create_user_1.createUser)({
        id: 2,
        name: "Lata",
        gender: "Female",
        role: "HR",
        salary: 10000,
    });
    employees_1.default.addEmployee(hrLata);
    var emMamta = (0, create_user_1.createUser)({
        id: 1,
        name: "Mamta",
        gender: "Female",
        role: "Employee",
        salary: 15000,
    });
    var emRama = (0, create_user_1.createUser)({
        id: 1,
        name: "Rama",
        gender: "Male",
        role: "Employee",
        salary: 15000,
    });
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
