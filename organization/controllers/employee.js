"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, gender, role, salary) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.role = role;
        this.salary = salary;
    }
    // Doing tasks and assign tasks
    Employee.prototype.doingTask = function () {
        console.log("Lot's of work yes we are doing the task!!!");
    };
    Employee.prototype.addEmployee = function (employees, employee) {
        this.doingTask();
        employees.addEmployee(employee.id, employee.name, employee.gender, employee.role, employee.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
