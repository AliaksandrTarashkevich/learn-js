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
//?======================================
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs)

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();