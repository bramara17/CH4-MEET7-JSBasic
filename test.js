// soal 1
let a = new Date();
let tgl =  a.getDate();
let bln = a.getMonth();
let thn = a.getFullYear();
let tglb =  a.getDate()+1;
let blnb = a.getMonth()+1;
let thnb = a.getFullYear()+1;
let tglk =  a.getDate()-1;
let blnk = a.getMonth()-1;
let thnk = a.getFullYear()-1;
console.log('tanggal kemarin:', tglk, '\nbulan kemarin :', blnk, '\ntahun kemarin :', thnk);
console.log('tanggal hari ini:', tgl, '\nbulan sekarang :', bln, '\ntahun sekarang :', thn);
console.log('tanggal besok:', tglb, '\nbulan besok :', blnb, '\ntahun besok :', thnb);

 //soal 2
const totalDay = 540;
const year = Math.floor(totalDay / 365);
const month = Math.floor((totalDay % 365) / 30);
const week = Math.floor(((totalDay % 365) % 30) / 7);
const day = ((totalDay % 365) % 30) % 7;

console.log(`\nHasil: ${years} tahun, ${months} bulan, ${weeks} minggu, ${days} hari`);