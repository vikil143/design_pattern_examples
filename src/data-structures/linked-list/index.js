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
            /*
              Here what happening it was assign to both by reference both means given below
              this.head.next
              and
              this.tail.next
              then it reassign it to
              this.tail
            */
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    /*
      Pop pseudocode
      1. If their is no node return undefined
      2. Loop through the list until you reach the tail
      3. next property of 2nd last node should null
      4. 2nd last node should tail
      5. descreament length by 1
      6. return last node
    */
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    };
    /*
      pseudocode
      1. if their is no node return undefined
      2. store current head property in a variable
      3. set head propert to be current head next property
      4. decreament length by 1
      5. return current node
    */
    SinglyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
