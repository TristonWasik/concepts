const user = { name: "Alice", age: 25 };

/**
 * When run concurrently this function should ensure that the highest age is applied.
 * @param newAge
 */
export async function updateAge(newAge: number): Promise<void> {
  const current = user.age;
  await new Promise((res) => setTimeout(res, Math.random() * 20)); // simulate latency
  user.age = newAge > current ? newAge : current;
}

export function getUser() {
  return user;
}

export function resetUser() {
  user.age = 25;
}
