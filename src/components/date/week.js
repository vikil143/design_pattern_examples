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
var day_1 = require("./day");
var Week = /** @class */ (function (_super) {
    __extends(Week, _super);
    function Week(yearOrValue, month, date, hours, minutes, seconds, ms) {
        var _this = this;
        if (typeof yearOrValue === "undefined") {
            _this = _super.call(this) || this;
        }
        else if (typeof month === "undefined") {
            _this = _super.call(this, yearOrValue) || this;
        }
        else {
            // consider an assertion here that `yearOrValue` is a number
            _this = _super.call(this, yearOrValue, month, date, hours, minutes, seconds, ms) || this;
        }
        _this.week = ["SUN", "MON", "TUE", "WED", "THUS", "FRI", "SAT"];
        _this.fullWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        return _this;
    }
    Week.prototype.getWeekIndex = function () {
        return this.date.getDay();
    };
    Week.prototype.getWeekName = function () {
        var index = this.getWeekIndex();
        return this.week[index];
    };
    Week.prototype.getFullWeekName = function () {
        var index = this.getWeekIndex();
        return this.fullWeek[index];
    };
    return Week;
}(day_1.default));
exports.default = Week;
