/**
 * Creates an array of functions that return the current index.
 * @returns An array of functions, each returning the index at the time of invocation.
 */
export function createIndexFunctions(): (() => number)[] {
  const functions: (() => number)[] = [];

  for (var i = 0; i < 3; i++) {
    functions.push(() => i);
  }

  return functions;
}
