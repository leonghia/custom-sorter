import { Collection } from "./Collection";

class Node {
  private _data: number;
  private _next: Node | null = null;

  public constructor(data: number) {
    this._data = data;
  }

  public get data(): number {
    return this._data;
  }

  public set data(val: number) {
    this._data = val;
  }

  public get next(): Node | null {
    return this._next;
  }

  public set next(n: Node | null) {
    this._next = n;
  }
}

export class LinkedList extends Collection {
  private _head: Node | null = null;
  private _length: number = 0;

  public get head(): Node | null {
    return this._head;
  }

  public get length(): number {
    return this._length;
  }

  public add(data: number): void {
    this._length++;
    const node = new Node(data);

    if (!this._head) {
      this._head = node;
      return;
    }

    let cur = this._head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = node;
  }

  private _at(index: number): Node | never {
    if (!this._head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let cur: Node | null = this._head;
    while (cur) {
      if (counter === index) return cur;
      cur = cur.next;
      counter++;
    }

    throw new Error("Index out of bounds");
  }

  public compare(leftIndex: number, rightIndex: number): boolean | never {
    if (!this._head) throw new Error("List is empty");
    return this._at(leftIndex).data > this._at(rightIndex).data;
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this._at(leftIndex);
    const rightNode = this._at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  public print(): void {
    let arr: number[] = [];
    if (!this._head) return;

    let cur: Node | null = this._head;
    while (cur) {
      arr.push(cur.data);
      cur = cur.next;
    }
    console.log(arr.join(" "));
  }
}
