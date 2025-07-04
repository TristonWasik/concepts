export async function asyncFetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetched data");
    }, 100);
  });
}
