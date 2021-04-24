const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    //console.log('hi');//to test
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) +90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(secondsDegrees);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) *360) +90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutesDegrees);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) *360) +90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hoursDegrees);
}

setInterval(setDate, 1000);