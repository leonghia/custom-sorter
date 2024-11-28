import { Collection } from "./Collection";

export class NumbersCollection extends Collection {
  private _data: number[];

  public constructor(data: number[]) {
    super();
    this._data = data;
  }

  public get data(): number[] {
    return this._data;
  }

  public get length(): number {
    return this._data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this._data[leftIndex] > this._data[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const temp = this._data[leftIndex];
    this._data[leftIndex] = this._data[rightIndex];
    this._data[rightIndex] = temp;
  }
}
