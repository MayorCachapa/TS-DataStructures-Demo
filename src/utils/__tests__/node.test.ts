import { Node } from "../node";

describe("Node", () => {
  it("should create a new Node instance", () => {
    const node = new Node<number>(42);
    expect(node.value).toBe(42);
    expect(node.next).toBe(null);
    expect(node.prev).toBe(null);
  });

  it("should set and get next node correctly", () => {
    const node1 = new Node<string>("Node 1");
    const node2 = new Node<string>("Node 2");

    node1.setNextNode(node2);
    expect(node1.getNextNode()).toBe(node2);
  });

  it("should set and get prev node correctly", () => {
    const node1 = new Node<string>("Node 1");
    const node2 = new Node<string>("Node 2");

    node1.setPrevNode(node2);
    expect(node1.getPrevNode()).toBe(node2);
  });

  it("should throw an error if the data passed is not an instance of Node", () => {
    const node1 = new Node<string>("Node 1");
    const notANode = { value: "Not a node" };

    expect(() => {
      node1.setNextNode(notANode);
    }).toThrowError(
      "The next or prev node must be an instance of the Node class. Please create a Node and then pass it as a value"
    );
  });

  it("should throw an error if the data passed is not an instance of Node", () => {
    const node1 = new Node<string>("Node 1");
    const notANode = { value: "Not a node" };

    expect(() => {
      node1.setPrevNode(notANode);
    }).toThrowError(
      "The next or prev node must be an instance of the Node class. Please create a Node and then pass it as a value"
    );
  });
});
