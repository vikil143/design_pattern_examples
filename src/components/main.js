"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("./date");
function main() {
    var today = new date_1.default();
    console.log("Today", today.getFullWeekName());
}
exports.default = main;
