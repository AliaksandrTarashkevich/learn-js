// let animal = {
//   eats: true
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('George');

// console.log(rabbit.eats);
//?=====================================
function Rabbit(name) {
  this.name = name;
  console.log(name);
}

let rabbit = new Rabbit('George');
let rabbit2 = new rabbit.constructor('Jimmy');

