/**
 * Demonstrates the Temporal Dead Zone (TDZ) in JavaScript.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz | Temporal Dead Zone (TDZ)}
 */
export function tdzExample(): number {
  //   return x + 1; // Should cause compile error: x used before declaration
  let x = 10;
  return x + 1;
}
