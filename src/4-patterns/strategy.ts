export interface SortStrategy {
  sort(arr: number[]): number[];
}

export class AscendingSort implements SortStrategy {
  sort(arr: number[]) {
    return arr.slice().sort((a, b) => a - b);
  }
}

export class DescendingSort implements SortStrategy {
  sort(arr: number[]) {
    return arr.slice().sort((a, b) => b - a);
  }
}

export class NumberCollection {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(arr: number[]): number[] {
    return arr;
  }
}
