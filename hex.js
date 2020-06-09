const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// click on a button and generate a random hex color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = `#`;
    for (let i = 0; i < 6; i++) {
        hexColor += hex[random()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

const random = () => Math.floor(Math.random() * hex.length)