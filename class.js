// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// let user = new User('Ivan');
// user.sayHi();
//?===================================
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi(){ console.log(this.name); }
// }

// console.log(typeof User);
//?====================================
// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass);
//   }
// };

// new User().sayHi();
//?=====================================
// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     };
//   };
// }

// let User = makeClass('Whaza');
// new User().sayHi();
//?=====================================
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if(value.length < 4) {
//       console.log('Too small =(');
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User('Ivan');
// console.log(user.name);

// user = new User('');
//?======================================
class User {
  name = "Anonynous";

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  }
}

new User().sayHi();