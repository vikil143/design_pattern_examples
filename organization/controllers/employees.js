"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var Employees = /** @class */ (function () {
    function Employees() {
        this.staff = [types_1.CEO];
    }
    Employees.prototype.addEmployee = function (employee) {
        this.staff.push(employee);
        console.log("Congrates you're hired, ", employee.name);
    };
    Employees.prototype.removeEmployee = function (employeeId) {
        this.staff.filter(function (employee) { return employee.id !== employeeId; });
    };
    Employees.prototype.printEmployeelist = function () {
        this.staff.forEach(function (item, index) {
            console.log(index + 1, ") " + item.name, "has role was " + item.role, " has salary was", item.salary);
        });
    };
    return Employees;
}());
exports.default = new Employees();
