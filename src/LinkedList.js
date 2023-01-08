class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null);
    this.head.next = this.head;
    this.head.prev = this.head;
    this.size = 0;
  }

  #addNode(value, next, prev) {
    let node = new Node(value, next, prev);
    node.next.prev = node;
    node.prev.next = node;
    this.size++;
  }

  add(value) {
    this.#addNode(value, this.head, this.head.prev);
  }

  prepand(value) {
    this.#addNode(value, this.head.next, this.head);
  }

  removeFirst() {
    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;
    this.size--;
  }

  removeLast() {
    this.head.prev = this.head.prev.prev;
    this.head.prev.next = this.head;
    this.size--;
  }

  getFirst() {
    return this.head.next.value;
  }

  getLast() {
    return this.head.prev.value;
  }

  toArray() {
    const array = [];
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      array.push(node.next.value);
      node = node.next;
    }

    return array;
  }
}

module.exports = { LinkedList };
