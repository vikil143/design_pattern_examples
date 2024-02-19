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
    Employee.prototype.addEmployee = function (employee) {
        employees_1.default.addEmployee(employee);
    };
    return Employee;
}());
exports.Employee = Employee;
