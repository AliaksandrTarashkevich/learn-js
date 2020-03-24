// let today = new Date(24*3600*1000);
// console.log(today);
// let date = new Date('1997-04-02');
// console.log(date);


//?===================================================================
// let start  = Date.now();

// for (let i = 0; i < 100000; i++) {
//   let doSth = i * i * i
// }

// let end = Date.now();
// console.log(`Script was processed in ${end - start} miliseconds`);

//?===================================================================
// function diffSubtract(dat1, dat2) {
//   return dat2 - dat1;
// }

// function diffGetTime(dat1, dat2) {
//   return dat2.getTime() - dat1.getTime();
// }

// function bench(f) {
//   let dat1 = new Date(0);
//   let dat2 = new Date();
//   let start = Date.now();

//   for (let i = 0; i < 100000; i++) f(dat1, dat2);
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// bench(diffSubtract);
// bench(diffGetTime);

// for (let i = 0; i < 11; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// console.log(time1);
// console.log(time2);

//!==========================================================================
// let date1 = new Date(2012,1,20,3,12);

// let date = new Date(2012, 0, 3);

// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[date.getDay()];
// }

// console.log(getWeekDay(date));

//?=============================================================================
function getLocalDay(date){
  let day = date.getDay();
  if (day === 0) {
     day = 7;
  }
  return day;
}
//?=============================================================================
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}
//?=============================================================================