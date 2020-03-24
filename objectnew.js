// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user1 = new User('Nikolay');
// console.log(user1);

function User(name) {
  if(!new.target) {
    return new User(name);
  }

  this.name = name;
}

let vasya = User('Vasya');
console.log(vasya.name)
