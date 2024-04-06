"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    SinglyLinkedList.prototype.push = function (val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            // Here this worked and assigned the value to head next by reference value
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
