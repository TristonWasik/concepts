export class Counter {
  private count: number = 0;

  static total: number = 0;

  increment(): void {
    this.count += 1;
    Counter.total += 1;
  }

  getCount(): number {
    return this.count;
  }

  static getTotal(): number {
    return 0;
  }
}
