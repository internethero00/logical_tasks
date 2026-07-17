function firstOccurrence(arr: number[], numb: number): number | null {
  if (arr.length === 0) {
    return null;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);

    if (arr[middle] < numb) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return arr[left] === numb ? left : null;
}