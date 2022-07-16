// CARA MENDEKLARASIKAN VARIABEL
// 1. menggunakan `var`
var nama = 'Uki';

// 2. menggunakan `let`
// adalah data yang bisa diubah
let nim = '11753101951';

// 3. menggunakan `const`
// data yang tetap
const firstName = 'Marzuki';

// hoisting
// hoisting adalah terjadinya pengangkatan pada variabel
// diciptakan `const` dan `let`

nim = '123'; // tidak akan terjadi error
// firstName = '123'; // akan terjadi error, Assignment to constant variable.



// OPERATOR
// 1. assignment ( = )
let x;
let y;
let z;
x = 5; // tipe data : Number
y = 10;

// 2. addition ( + )
z = x + y; // x = 5, y = 10... z = 5 + 10
// 15

// 3. subtraction ( - )
z = x - y; // x = 5, y = 10...  z = 5 - 10
// -5
// 4. mulitply ( * ) / perkalian

// 5. division ( / ) / pembagian


// TIPE DATA
// 1. String
const contohString = "Ini adalah contoh string";

// 2. Number
const contohNumber = 5;

// 3. Boolean, nilainya cuma ada dua : `true` atau hanya `false`
const isMarried = true;

// 4. Array, di dalamnya kita bisa menyimpan banyak nilai
const contohArray = [ "ini contoh string", 12, true, [ "contoh string di dalam array" ] ];

// 5. Object, terdapat yang namanya properti dan value
const objectOrang = {
    nama: 'Uki', // nama => properti, 'Uki' => nilai
    hobi: [ 'belajar', 'menggambar' ],
}

// 6. Undefined, kita tidak mengisi apa-apa pada variabel
let contohUndefined; // undefined

// typeof 
console.log( typeof contohString ); // mengetahui tipe data dari sebuah variabel
