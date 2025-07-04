// Shared counter (pretend this is some external resource like DB or cache)
let counter = 0;

export async function incrementCounter(): Promise<void> {
  const current = counter;

  // simulate delay (e.g., DB latency)
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 10));
  counter = current + 1;
}

export function getCounter(): number {
  return counter;
}

export function resetCounter(): void {
  counter = 0;
}
