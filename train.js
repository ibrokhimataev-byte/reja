console.log("Train AREA!");

// MITTASK

//MITASK-C 

// Shunday class tuzing tuzing nomi Shop, 
// va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 
// 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
// Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
// return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() r
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// Masalaning yechimi:

// 1. Momentni chaqiramiz
const moment = require('moment');

class Shop {
  constructor(non, tuz, choy) {
    this.non = non;
    this.tuz = tuz;
    this.choy = choy;
  }

  // Vaqtni olish uchun yordamchi metod
  _getTime() {
    return moment().format('HH:mm');
  }

  qoldiq() {
    const time = this._getTime();
    console.log(`Hozir ${time}da ${this.non}ta non, ${this.tuz}ta tuz va ${this.choy}ta choy mavjud!`);
  }

  sotish(mahsulot, miqdor) {
    const time = this._getTime();
    if (this[mahsulot] >= miqdor) {
      this[mahsulot] -= miqdor;
      console.log(`${time}da ${miqdor}ta ${mahsulot} sotildi.`);
    } else {
      console.log(`${time}da xatolik: Omborxonada yetarli ${mahsulot} yo'q!`);
    }
  }

  qabul(mahsulot, miqdor) {
    const time = this._getTime();
    this[mahsulot] += miqdor;
    console.log(`${time}da ${miqdor}ta ${mahsulot} qabul qilindi.`);
  }
}

// --- ISHLATISH ---
const shop = new Shop(4, 5, 2);

shop.qoldiq();           // Boshlang'ich qoldiq
shop.sotish('non', 3);   // 3ta non sotildi
shop.qabul('choy', 4);   // 4ta choy olindi
shop.qoldiq();           // Yakuniy qoldiqni ko'rish



















// B Task

// function countDigits(str) {
//   const digits = str.match(/\d/g);    
//   return digits ? digits.length : 0;
// }


// console.log("Jack Ma maslaxatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq xato qling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling", // 60
// ];


//CALLBACK function example =>

//   function maslaxatatBering(a, callback) {
//     if (typeof a !== "number")  callback ("insert a number", null);
//     else if (a <=20) callback(null, list[0]);
//     else if (20 < a && a <=30) callback(null, list[1]);
//     else if (30 < a && a <=40) callback(null, list[2]);
//     else if (40 < a && a <=50) callback(null, list[3]);
//     else if (50 < a && a <=60) callback(null, list[4]);
//     else { 
      
//                 setInterval(function() {
//                 callback(null, list[1]);  
//             }, 5000);
//         };
// }


// console.log("passed here 0");
// maslaxatatBering(65, (err, data) => {
//     if (err) 
//         console.log("Error:", err);
//     else {
//         console.log("Javob", data);
//     }
//     });
// console.log("passed here 1");





//Asychronous function example =>
//     async function maslaxatatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <=20) return list[0];
//     else if (20 < a && a <=30) return list[1];
//     else if (30 < a && a <=40) return list[2];
//     else if (40 < a && a <=50) return list[3];
//     else if (50 < a && a <=60) return list[4];
//     else { 
//         return new Promise((resolve, reject) => { // Pronise orqali setTimeoutlarni ishlatshmz mumkin
//             // setTimeout(() =>
//                 setInterval(() =>{
//                 resolve(list[5]);
//             }, 1000);
//         });
//                                                                     // setTimeout( function (){
//                                                                     //     callback(null, list[5]);  // ASYNC FUNCTIONDA SETTIMEOUT ISHLATISH MUMKIN    
//                                                                     // }, 5000);
//  }
// }



// call via Then-Catch example =>

   
    // console.log("passed here 0");
// maslaxatatBering(25)
//   .then( data => {
//     console.log("Javob", data);
// })
// .catch( err => {
//     console.log("Error:", err);
// });
// console.log("passed here 1");  




//callasyn/await

// async function run() {
//     let javob = await maslaxatatBering(25); // javob olmaguncha kutadi keyngisiga otmaydi
//     console.log("Javob:", javob);
//     javob = await maslaxatatBering(70);
//     console.log("Javob:", javob);
//     javob = await maslaxatatBering(41);
//     console.log("Javob:", javob);
// }
// run();



//Masalani izohi:

// A-TASK:

//  2 parametrli function tuzdik;

// 1-parametr: bitta harf (letter)

// 2-parametr: so‘z (string)

// function countLetter(letter, word) {
//   let result = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] == letter) {
//       result++;
//     }
//   }

//   return result;
// }

// // Misol
// let answer = countLetter("a", "javascript");
// console.log("Javob:", answer);  
