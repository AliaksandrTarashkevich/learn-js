// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(() =>  user.sayHi(), 1000);
//?=========================================
// let user = {
//   firstName: 'Vasya'
// };

// function func() {
//   console.log(`Whazaa, ${this.firstName}`);
// }

// let funcUser = func.bind(user);
// funcUser();
//?============================================
// let user = {
//   firstName: 'Saxa',
//   sayHi() {
//     console.log(`Whazaa, ${this.firstName}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user);
// sayHi();
//?=============================================
// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(null, 2);
// console.log(double(3));
//!============================================
function partial(func, ...argsBound) {
  return function(...args){
    return func.call(this, ...argsBound, ...args);
  }
}
let user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName} : ${phrase}!`);
  }
};

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow('Hello');