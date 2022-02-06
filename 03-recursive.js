// Soal 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr1, arr2) {
  return (arr1.length === 0) ? 0 : arr1[0] + sumOfArray(arr1.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));