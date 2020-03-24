// let timerId = setInterval(() => console.log('tick'), 2000);

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

//?==========================================================================

// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000);
// }, 2000);
//?==========================================================================
// let i = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100);
// },100);
//!==========================================================================

// function printNumbers(from, to) {
//   let current = from;
//   let timerId = setInterval(() => {
//     console.log(current);
//     if (current === to) {
//       clearInterval(timerId);
//     } else {
//       current++;
//     }
//   }, 1000);
// }
 //=======================================

 function printNumbers(from, to) {
   let current = from;
   setTimeout(function plus() {
    console.log(current);
    if (current < to) {
      setTimeout(plus, 1000);
    }
      current++;
   }, 1000)
  };
 

 printNumbers(3,6);