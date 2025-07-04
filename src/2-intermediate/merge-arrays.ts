export function mergeArrays(
  arr: any[],
  arr2: any[],
  arr3: any[] = [],
  arr4: any[] = []
): any[] {
  return [...arr, ...arr2, ...arr3, ...arr4];
}
