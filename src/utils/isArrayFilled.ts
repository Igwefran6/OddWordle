export function isArrayFilled(arr: (string | undefined | null)[]): boolean {
  // Check if every element in the array is a non-empty string
  return arr.every(
    (element) => element !== "" && element !== undefined && element !== null
  );
}
