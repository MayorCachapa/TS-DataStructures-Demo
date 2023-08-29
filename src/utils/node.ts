import type { ANode } from "@/types/types";

export class Node<T> implements ANode<T> {
  value: T | null;
  next: ANode<T> | null;
  prev: ANode<T> | null;

  constructor(data: T) {
    this.value = data;
    this.next = null;
    this.prev = null;
  }

  setNextNode(element: ANode<T>) {
    if (!(element instanceof Node)) {
        throw new Error("To establish the next node, it must be an instance of the Node class")
    }

    this.next = element;
  }

  getNextNode() {
    return this.next;
  }
}
