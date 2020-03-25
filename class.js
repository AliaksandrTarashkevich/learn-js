// class User {
//   constructor(name) {
//     this.name = name;
//   }
  
//   sayHi() {
//     console.log(this.name);
//   }
// }

// let user = new User('John');
// user.sayHi();
//?=====================================
// let User = class {
//   sayHi() {
//     console.log('Whaza');
//   }
// };
//?=====================================
// let User = class MyClass{
//   sayHi() {
//     console.log(MyClass);
//   }
// };

// new User().sayHi();
// console.log(MyClass);//!ERROR, cannot see the property outside of class
//?=====================================
// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     };
//   };
// }

// let User = makeClass('KUKU');
// new User().sayHi();
//?======================================
// class User {
//   constructor (name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Too small =(');
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User('Kolya');
// console.log(user.name);
// user = new User('');
//?====================
// class User {
//   name = 'Anonymous';

//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// new User().sayHi();