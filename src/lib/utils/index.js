export function randomSort(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}
