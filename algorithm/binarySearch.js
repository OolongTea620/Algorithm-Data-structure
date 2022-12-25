//이진탐색 PseudoCode
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = parseInt((start + end) / 2);
  }
  return arr[middle] === target ? middle : -1;
};

const naiveStringSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
};

/**
 * 버블 정렬
 */

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
//bubbleSort([35, 24, 49, 13]);

/**
 * 선택 정렬
 */

const selectionSort = (arr) => {
  for (let i = 0; i > arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; i > arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};
