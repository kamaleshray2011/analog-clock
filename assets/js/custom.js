const hand_second = document.querySelector('.hand-second');
const hand_minute = document.querySelector('.hand-minute');
const hand_hour = document.querySelector('.hand-hour');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const seconddegree = ((second / 60) * 360) + 90;
    hand_second.style.transform = `rotate(${seconddegree}deg)`;


    const minute = now.getMinutes();
    const minutedegree = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    hand_minute.style.transform = `rotate(${minutedegree}deg)`;


    const hour = now.getHours();
    const hourdegree = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    hand_hour.style.transform = `rotate(${hourdegree}deg)`;

}
setInterval(setDate, 1000);
setDate();