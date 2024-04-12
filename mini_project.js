function randomColor() {
    const chars = 'abcdef0123456789';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * chars.length);
        hexColor += chars[rand];
    }
    return hexColor;
}
const year = document.querySelector('.colorYear');

console.log(year);
console.log(randomColor());


document.querySelector('.completed').style.backgroundColor = 'green';
document.querySelector('.ongoing').style.backgroundColor = 'yellow';
document.querySelector('.ongoing').style.color = 'black';
const comingCourses = document.querySelectorAll('.coming');
Array.from(comingCourses).forEach(coming => coming.style.backgroundColor = 'red');

function getDate() {
    const date = new Date();
    const dateFormat = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date);
    return dateFormat;
}
setInterval(() => {
    year.style.color = randomColor();
    document.querySelector('.time').textContent = getDate();
    document.querySelector('.time').style.backgroundColor = randomColor();
}, 1000);

