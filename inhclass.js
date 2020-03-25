// class Animal {
//   constructor(name) {
//     this.speed= 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with the speed - ${this.speed} km/h`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} is staying.`);
//   }
// }

// let animal = new Animal('My pet');

// class Rabbit extends Animal{
  
//   hide() {
//     console.log(`${this.name} is hiding!`);
//   }
//   stop() {
//     super.stop();
//     this.hide();
//   }
// }

// let rabbit = new Rabbit('Whitey');

// rabbit.run(5);
// rabbit.stop();
//?==================================================
// class Animal {
//   constructor(name) {
//     this.speed= 0;
//     this.name= name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// }

// let rabbit = new Rabbit('Whitey', 10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);
// console.log(rabbit.speed);
//?==================================================
// let animal = {
//   name: 'Animal',
//   eat() {
//     console.log(`${this.name} eats!`);
//   }
// };

// let rabbit = {
//   __proto__: animal,
//   name: 'Rabbit',
//   eat() {
//     super.eat();
//   }
// };

// let longEar = {
//   __proto__: rabbit,
//   name: 'Longear',
//   eat() {
//     super.eat();
//   }
// };

// longEar.eat();
//?===================================================
// let animal = {
//   sayHi() {
//     console.log(`I'm animal`);
//   }
// };

// let rabbit = {
//   __proto__: animal,
//   sayHi() {
//     super.sayHi();
//   }
// };

// let plant = {
//   sayHi() {
//     console.log('I\'m a plant');
//   }
// };

// let tree = {
//   __proto__: plant,
//   sayHi: rabbit.sayHi
// };
//?============================
// let animal = {
//   eat: function () { //! wrong! should be 'eat(){}...'

//   }
// };
//===================================

























