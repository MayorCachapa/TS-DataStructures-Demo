import { LinkedList } from "../LinkedList";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
    linkedList.addToHead(1);
    linkedList.addToTail(2);
  });

  it("should add to head and tail", () => {
    expect(linkedList?.head?.value).toBe(1);
    expect(linkedList?.tail?.value).toBe(2);
  });

  it("should remove head", () => {
    const removedValue = linkedList.removeHead();

    expect(removedValue).toBe(1);
    expect(linkedList?.head?.value).toBe(2);
  });

  it("should print the list", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    linkedList.printList();

    expect(consoleSpy).toHaveBeenCalledWith("<head> 1 2 <tail>");
  });

  it("should correctly return the length of the list", () => {
    expect(linkedList.length).toBe(2);
  })

  it('should handle empty list when removing head', () => {
    linkedList = new LinkedList<number>();

    const removedValue = linkedList.removeHead();
    expect(removedValue).toBeUndefined();
    expect(linkedList.head).toBeNull();
  });

  it('should handle adding to tail when list is empty', () => {
    linkedList = new LinkedList<number>();

    linkedList.addToTail(1);
    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(1);
  });

  it('should handle adding multiple values', () => {
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(4);
    expect(linkedList.count()).toBe(4);
  });
});
