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
function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    };
  };
}

let User = makeClass('Whaza');
new User().sayHi();
