export abstract class Collection {
  public abstract get length(): number;
  public abstract compare(leftIndex: number, rightIndex: number): boolean;
  public abstract swap(leftIndex: number, rightIndex: number): void;

  public sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
