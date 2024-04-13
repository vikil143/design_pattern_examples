"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../utilities/helper");
var index_1 = require("./linked-list/index");
function main() {
    var list = new index_1.SinglyLinkedList();
    (0, helper_1.log)(list.push("Hell"));
    (0, helper_1.log)(list.push("HRW"));
    (0, helper_1.log)(list.pop());
    (0, helper_1.log)(list);
}
exports.default = main;
