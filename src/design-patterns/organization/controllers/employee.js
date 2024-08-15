"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var employees_1 = require("./employees");
var Employee = /** @class */ (function () {
    function Employee(id, name, gender, role, salary) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.role = role;
        this.salary = salary;
    }
    Employee.prototype.doingTask = function () {
        throw new Error("Method not implemented.");
    };
    // Doing tasks and assign tasks
    // doingTask() {
    //   console.log("Lot's of work yes we are doing the task!!! -", this.name);
    // }
    // abstract doingTask(): void;
    Employee.prototype.addEmployee = function (employee) {
        employees_1.employees.addEmployee(employee);
    };
    return Employee;
}());
exports.Employee = Employee;
