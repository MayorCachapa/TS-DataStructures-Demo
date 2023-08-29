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

  private checkNodeInstance(element: any): void {
    if (!(element instanceof Node)) {
      throw new Error(
        "The next or prev node must be an instance of the Node class. Please create a Node and then pass it as a value"
      );
    }
  }

  setPrevNode(element: ANode<T>) {
    this.checkNodeInstance(element);
    this.prev = element;
  }

  setNextNode(element: ANode<T>) {
    this.checkNodeInstance(element);
    this.next = element;
  }

  getNextNode() {
    return this.next;
  }

  getPrevNode() {
    return this.prev;
  }
}
