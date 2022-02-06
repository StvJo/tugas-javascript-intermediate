// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(async () => await console.log("second log: ", i), 100); // 02 - Kedua
  }

// 1. Synchronous adalah saat kita mengeksekusi perintah satu persatu dan berurutan.
// 2. mengizinkan komputer kita untuk memproses perintah lain sambil menunggu suatu proses lain yang sedang berlangsung. Kita bisa melakukan lebih dari 1 proses sekaligus (multi-thread).
// 3. Yes
/* 4.
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
(5)second log:  6
*/
// 5. second log selalu berada setelah first log karena terdapat set timeout 100 milisecond di second log, dan menampilkan nya sebanyak 5 kali karena JS console hanya menampilkan return value terakhir dari statement yang diesksekusi.
// 6.