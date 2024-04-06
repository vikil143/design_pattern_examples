"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../utilities/helper");
var index_1 = require("./linked-list/index");
function main() {
    var list = new index_1.SinglyLinkedList();
    list.push("Hell");
    list.push("HRW");
    list.push("?");
    (0, helper_1.log)(list.head.next);
}
exports.default = main;
