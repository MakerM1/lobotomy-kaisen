import { qouotes } from "./data.js";
let lobotomyTextGenerated = [];
let usedNumbers = []

const randomLobotomyGenerator = () => {
    while (usedNumbers.length < 16) {
        let randomNumber = Math.floor(Math.random() * 16 + 1)

        if (usedNumbers.indexOf(randomNumber) < 0) {
            usedNumbers.push(randomNumber)
            lobotomyTextGenerated.push(qouotes[randomNumber])
        }
    }
}

const randomLobotomyGeneratorCaller = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func()
    }
}

randomLobotomyGeneratorCaller(randomLobotomyGenerator, 20)

// button click

const generateTextButton = document.querySelector('.generate-text')
const textBox = document.querySelector('.text-space')
const loading = document.querySelector('.loading')
const lobotomyText = document.querySelector('.Lobotomy-text')

let interval;

function click() {
    lobotomyText.innerHTML = `${lobotomyTextGenerated.join(' ')}`
    
    loading.style.display = 'inline-block'

    interval = setInterval(() => {
        textBox.classList.add('active')
        clearInterval(interval)
    }, Math.floor(Math.random() * 3000))
}

generateTextButton.addEventListener('click', () => {
    click()
})

// text copy

const copy = document.querySelector('.copy')

function myFunction() {
// Get the text field

// Select the text field

textBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
navigator.clipboard.writeText(textBox.innerHTML);

// Alert the copied text
alert("Copied the text: " + textBox.innerHTML);
}

copy.addEventListener('click', () => {
    myFunction()
})