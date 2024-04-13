class Node {
  data;
  next: null | Node;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: any | Node;
  tail: any | Node;
  length: number;
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val: any) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      // Here this worked and assigned the value to head next by reference value
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  /*
    Pop pseudocode
    1. If their is no node return undefined
    2. Loop through the list until you reach the tail
    3. next property of 2nd last node should null
    4. 2nd last node should tail 
    5. descreament length by 1
    6. return last node
  */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    if (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    return current;
  }
}
