export function once<T extends (...args: any[]) => any>(fn: T): T {
  return fn;
}
