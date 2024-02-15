"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var Employees = /** @class */ (function () {
    function Employees() {
        this.staff = [types_1.CEO];
    }
    Employees.prototype.reference = function () {
        return this;
    };
    Employees.prototype.addEmployee = function (id, name, gender, role, salary) {
        this.staff.push({
            id: id,
            name: name,
            gender: gender,
            role: role,
            salary: salary,
        });
        console.log("Congrates you're hired, ", name);
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
exports.default = Employees;
