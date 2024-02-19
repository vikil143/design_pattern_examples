"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrLata = void 0;
var employee_1 = require("../controllers/employee");
var HrLata = /** @class */ (function (_super) {
    __extends(HrLata, _super);
    function HrLata(id, name, gender, role, salary) {
        return _super.call(this, id, name, gender, role, salary) || this;
    }
    HrLata.prototype.doingTask = function () {
        console.log("Lot's of work yes we are doing the task!!! -", this.name);
    };
    return HrLata;
}(employee_1.Employee));
exports.HrLata = HrLata;
