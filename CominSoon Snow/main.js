'use strict'

// snow fall animation
function createSnow(){

    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000)

}

setInterval(createSnow, 100);


// Count Down

let countDate = new Date('dec 1, 2021 00:00:00').getTime()

function countDown() {
    
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;

}

setInterval(function(){
    countDown();
},1000)