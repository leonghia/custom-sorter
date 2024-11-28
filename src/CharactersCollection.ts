import { Collection } from "./Collection";

export class CharactersCollection extends Collection {
  private _data: string;

  public constructor(data: string) {
    super();
    this._data = data;
  }

  public get data(): string {
    return this._data;
  }

  public get length(): number {
    return this._data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this._data[leftIndex].toLowerCase() > this._data[rightIndex].toLowerCase()
    );
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const characters = this._data.split("");
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;

    this._data = characters.join("");
  }
}
