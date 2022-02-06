// Soal 1

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr, arr2) {
    return arr.slice().reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

/*Soal - 02
Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

memiliki 1 parameter:
arr [Array of Number] => array 1 dimensi dengan nilai Number
return value [Number] total angka yang melebihi nilai rata-rata
Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini*/

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr1, arr2) {
    
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))