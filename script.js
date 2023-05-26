const futureDate = new Date(2023, 4, 30, 5, 10).getTime();
const currentDate = new Date().getTime();
const t = futureDate - currentDate
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSecond = 1000;

let hours =  Math.floor((t % oneDay) / oneHour);
// console.log(hours);



// console.log(window.document.body.style.background = 'red')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()


