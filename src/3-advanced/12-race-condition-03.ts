let total = 0;

/**
 * Should always add the value to the total.
 * This function simulates a delay to mimic an asynchronous operation.
 * It is important to ensure that concurrent calls to this function do not overwrite each other's updates.
 * @param value - The value to add to the total.
 */
export async function add(value: number): Promise<void> {
  const current = total;
  await new Promise((res) => setTimeout(res, Math.random() * 10));
  total = current + value;
}

export function getTotal() {
  return total;
}

export function resetTotal() {
  total = 0;
}
