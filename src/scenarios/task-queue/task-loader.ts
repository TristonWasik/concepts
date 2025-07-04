export async function loadTasks<T>(url: string): Promise<T[]> {
  const res = await fetch(url);
  const data = await res.text();
  return [];
}
