/**
 * Demonstrates variable hoisting in JavaScript.
 * @returns A tuple containing a number or undefined, and a number.
 */
export function hoistingTest(): [number | undefined, number] {
  var a = 15;
  return [a, b()];

  function b() {
    return 928;
  }
}
