"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day = /** @class */ (function () {
    function Day(yearOrValue, month, date, hours, minutes, seconds, ms) {
        if (typeof yearOrValue === "undefined") {
            this.date = new Date();
        }
        else if (typeof month === "undefined") {
            this.date = new Date(yearOrValue);
        }
        else {
            // consider an assertion here that `yearOrValue` is a number
            this.date = new Date(yearOrValue, month, date, hours, minutes, seconds, ms);
        }
    }
    return Day;
}());
exports.default = Day;
