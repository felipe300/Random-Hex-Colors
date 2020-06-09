const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "rgba(98,212,232)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // target the body and change the color
    // get an random number from colors
    const randomNumber = random();
    console.log(random());
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
});

const random = () => Math.floor(Math.random() * colors.length);
