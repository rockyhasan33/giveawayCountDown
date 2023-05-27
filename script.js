
function display() {

const futureDate = new Date(2023, 10, 27, 9, 45).getTime();
const currentDate = new Date().getTime();
const t = futureDate - currentDate
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSecond = 1000;

let days = Math.floor(t / oneDay)
let hours =  Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute)
let seconds = Math.floor((t % oneMinute) / 1000); 
 



// console.log(hours);



// console.log(window.document.body.style.background = 'red')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()

let value = [days, hours, minutes, seconds];

function checkFunc(element) {
    if(element < 10) {
        return `0${element}`
    }else {
        return element
    }
}

const display = document.querySelectorAll('.flex h2');

display.forEach((elm, index)=> {
    elm.textContent = checkFunc(value[index]);
})

if(t < 0) {
    display.forEach(elm => {
        elm.textContent = `00`;
    })
    
}
}

setInterval(display, 1000)



