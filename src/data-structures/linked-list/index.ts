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
}
