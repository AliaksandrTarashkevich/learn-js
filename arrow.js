// let group = {
//   title: 'Our group',
//   students: ['John', 'Pete', 'Alice'],

//   showList() {
//     this.students.forEach(
//       student => console.log(this.title + ': ' + student)
//     );
//   }
// };
// group.showList();
//!================================
// function defer(f, ms){
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms)
//   };
// }

// function sayHi(who) {
//   console.log('Hello '+ who);
// }

// let sayHiDeffered = defer(sayHi,2000)
// sayHiDeffered('Shurik');
//!==================================== the same thing wout arrow
function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function(){
      return f.apply(ctx, args);
    }, ms);
  };
}