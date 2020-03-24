// const arr = [1,2,3]

// Array.prototype.double = function() {
//   for( let i = 0; i < this.length; i++) {
//     this[i] *= 2;
//   }
//   return this;
// }

// console.log(arr.double());
//?=========================================================
// let obj = Object.create(null);
//?=========================================================
// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// список свойств, разделённых запятой, выведен с помощью toString
// console.log(dictionary); // "apple,__proto__"
//?=======================================================
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');