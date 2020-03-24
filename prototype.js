// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal;
// console.log(rabbit.eats);
//?================================
// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal wolk');
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// rabbit.walk();
//?==================================
let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName);
admin.fullName = 'Lewis Caroll';
console.log(admin.fullName);
