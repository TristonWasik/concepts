export function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false;
  let result: ReturnType<T>;

  return ((...args: Parameters<T>) => {
    return fn(...args);
  }) as T;
}
