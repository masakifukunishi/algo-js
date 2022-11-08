class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  remove(data) {
    let currentNode = this.head;
    if (currentNode && currentNode.data === data) {
      this.head = currentNode.next;
      currentNode = null;
      return;
    }
    let previousNode = null;
    while (currentNode && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return;
    }
    previousNode.next = currentNode.next;
  }
}

const l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.insert(0);
l.print();
l.remove(2);
l.print();
// console.log(l.head.data);
// console.log(l.head.next.data);
// console.log(l.head.next.next.data);
