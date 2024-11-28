
let nama = '11753101951'
let usia = '12'
let alamat = 'jalan tukiman'

let text=' ';
let text1=' ';
let text2=' ';

const hobi = ['Futsal','Sepak Bola', 'Batminton'];
const sosialMedia= {facbook:'lalalalal', istragam:'wkwkwkwkwkkw', gitlab:'https://github.com/jakfarshodiq230/NodeJS_dasar'}

function cetakNama(nama){
    textCetak = 'Halo, Nama Saya', ${nama};
    return textCetak;
}

function penjumlahan(angkaPertama,angkaKedua){
    let jumlah = angkaPertama + angkaKedua;
    // console.log('Total', jumlah);
    return jumlah;
}

// foreach
hobi.forEach(forForEach);
function forForEach(item)  {
    text += item + '<br>'; 
    return text;
}

// for
function vFor(){
    for (let i = 0; i < hobi.length; i++) {
        text1 += i+1+'. ' + hobi[i] + '<br>';
    }
    return text1;
}

// for of
function forOF(){
    for (let x of hobi) {
        text2 += x + '<br>';
    }
    return text2;
}
