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

/**
 * 삽입 정렬
 * @param {} arr
 * @returns
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
// insertionSort([2, 1, 9, 76, 4]);

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
    console.log(results);
  }
  // 남은 부분을 뒤에 계속 넣어줌
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
    console.log(results);
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
    console.log(results);
  }
  return results;
}
//merge([1, 2, 10], [15, 20]);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // 인덱스 0이상 3 미만 분할
  let right = mergeSort(arr.slice(mid)); // 인덱스 3이상 끝까지 원소 가져옴
  return merge(left, right);
}
// mergeSort([10, 24, 76, 52, 2, 72, 1, 9]);

/**
 * 퀵 정렬
 */

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[(j = temp)];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  return swapIdx;
}
// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
//quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

function getDigit(num, i) {
  // num의 log10(num)을 알기위한 함수
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // 숫자가 몇 자릿수이지 확인하는 함수
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1; //abs는 음수도 고려하기 위한 것
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
}
radixSort([23, 345, 543, 23423, 3452, 9275]);
