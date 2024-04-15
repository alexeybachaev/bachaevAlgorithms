//O(logn), нужен отсортированный массив
function binarySearch(list, item) {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] === item) {
      return mid;
    }
    if (item > list[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
