let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let set_clock = setInterval(() => {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let a = hr ; 
    let b = min;
    let c = sec;
    hour.style.transform=`rotate(${(a*30)+(min*6/12)}deg)`;
    minute.style.transform=`rotate(${(b*6)}deg)`;
    seconds.style.transform=`rotate(${(c*6)}deg)`;

}, 1000);