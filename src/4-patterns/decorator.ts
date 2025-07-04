export class Greeter {
  greet(): string {
    return "Hello";
  }
}

export function emojiDecorator(greeter: Greeter): Greeter {
  return greeter;
}
