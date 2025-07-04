export const message = getGreeting();

export function getGreeting() {
  return greet();
}

const greet = () => "Hello, World!";
