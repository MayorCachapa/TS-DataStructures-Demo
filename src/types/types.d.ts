export interface ANode<T> {
  prev?: ANode<T> | null;
  next: ANode<T> | null;
  value: T | null;
  setNextNode(element: ANode<T>): void;
  setPrevNode(element: ANode<T>): void
  getNextNode(): ANode<T> | null;
  getPrevNode(): ANode<T> | null;
}
