// let user = {
//   name: 'John',
//   surname: 'Smith',

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   }
// };
// user.fullName = 'Alice Cooper';
// console.log(user.fullName)
//?===================================
// let user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if (value.length < 4) {
//       console.log('The name is too short');
//       return;
//     }
//     this._name = value;
//   }
// };

// user.name = 'JJohnoe';
// console.log(user.name);
// user.name = 'Joe';
//?=======================================
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User('John', new Date(1997,2,4));

console.log( john.birthday );
console.log( john.age );