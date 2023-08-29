export interface ANode<T> {
  prev?: ANode<T> | null;
  next: ANode<T> | null;
  value: T | null;
  setNextNode(element: ANode<T>): void;
  setPrevNode(element: ANode<T>): void;
  getNextNode(): ANode<T> | null;
  getPrevNode(): ANode<T> | null;
}

export interface ALinkedList<T> {
  head: ANode<T> | null;
  tail: ANode<T> | null;
  length: number;

  addToHead(data: T): void;
  addToTail(data: T): void;
  removeHead(): T | null | void;
  printList(): void;
  count(): number;
}
