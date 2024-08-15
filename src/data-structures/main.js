"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../utilities/helper");
var index_1 = require("./linked-list/index");
function main() {
    var list = new index_1.SinglyLinkedList();
    (0, helper_1.log)(list.push("Hell"));
    (0, helper_1.log)("Hell added");
    (0, helper_1.log)(list.push("HRW"));
    (0, helper_1.log)("HRW added");
    (0, helper_1.log)(list);
    (0, helper_1.log)(list.push("!!!@"));
    (0, helper_1.log)("!!!@ added");
    (0, helper_1.log)(list);
    (0, helper_1.log)(list.pop());
    (0, helper_1.log)("Hell removed");
    (0, helper_1.log)(list.pop());
    (0, helper_1.log)("HRW removed");
    (0, helper_1.log)(list);
}
exports.default = main;
