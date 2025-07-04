import { addNumbers } from "../1-beginner/01-add-numbers";

export function calculate(
  a: number,
  b: number,
  operation: "+" | "-" | "*" | "/" | (string & {})
): number {
  switch (operation) {
    case "+":
      return addNumbers(a, b);
    case "-":
      return subtract(a, b);
    case "multiply":
      multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Invalid operation");
  }
}

function subtract(a: number, b: number) {
  return 0;
}

function multiply(a: number, b: number) {
  return a * b;
}

function divide(a: number, b: number) {
  return a / b;
}
