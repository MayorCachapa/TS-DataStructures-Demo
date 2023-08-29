import { ALinkedList, ANode } from "@/types/types";
import { Node } from "@/utils/node";

export class LinkedList<T> implements ALinkedList<T> {
  head: ANode<T> | null;
  tail: ANode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(data: T): void {
    const node = new Node(data);

    if (!this.head || this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    this.length++;

    const currentHead = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.head.setNextNode(currentHead);
  }

  addToTail(data: T): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    this.length++;
    let currentNode: ANode<T> | null = this.head;

    while (currentNode && currentNode.getNextNode() !== null) {
      currentNode = currentNode.getNextNode();
    }

    currentNode?.setNextNode(node);
    this.tail = node;
  }

  removeHead(): T | null | void {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }

    this.head = removedHead.getNextNode();
    this.length--;

    if (!this.head || this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return removedHead.value;
  }

  printList(): void {
    let currentNode = this.head;
    let output = "<head> ";

    while (currentNode) {
      output += currentNode.value + " ";
      currentNode = currentNode.getNextNode();
    }

    output += "<tail>";
    console.log(output);
  }

  count(): number {
    return this.length;
  }
}
