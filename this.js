// user = {
//   sayHi: function () {
//     alert("Привет");
//   }
// };

// user = {
//   sayHi() { // то же самое, что и "sayHi: function()"
//     alert("Привет");
//   }
// };

//===================================

let user = {
  name: "Джон",
  go: function () { console.log(this.name) }
};

user.go();