

let seconds = 0
let minutes = 0
let hours = 0

const startButton = document.querySelector('.timer__start');
const pauseButton = document.querySelector('.timer__pause');
const resetButton = document.querySelector('.timer__reset');


let secondsElem = document.querySelector('.seconds .timer__value');
let minutesElem = document.querySelector('.minutes .timer__value');
let hoursElem = document.querySelector('.hours .timer__value');

const setNumber = arg => arg < 10 ? `0${arg}` : `${arg}`;

function SetValues () {
    secondsElem.textContent = setNumber(seconds)
    minutesElem.textContent = setNumber(minutes)
    hoursElem.textContent = setNumber(hours)
}



function resetValues (firstValue,firstValueElem, secondValue, secondValueElem) {
    firstValue = 0;
    firstValueElem.textContent = setNumber(firstValue);
    secondValue++;
    secondValueElem.textContent = setNumber(secondValue);
}

function setMinutes () {
    resetValues(seconds, secondsElem, minutes, minutes)
}

function setHours () {
    resetValues(minutes, minutesElem, hours, hoursElem)
}

function addAndRemoveClasses (firstElem , secondElem, thirdElem) {
    firstElem.classList.add('off')
    secondElem.classList.remove('off')
    thirdElem.classList.remove('off')
}

let startTimer = () => {

        let timeOut = setTimeout(() => {
        seconds++;
        secondsElem.textContent = setNumber(seconds)
        if (seconds === 60) {
            setMinutes()
        }
        
        if (minutes === 60) {
            setHours()
        }
        
        startTimer()

    }, 1000)
    resetButton.addEventListener('click', function () {
        seconds = 0;
        minutes = 0;
        hours = 0;
        SetValues()
        this.classList.add('off')
        pauseButton.classList.add('off')
        startButton.classList.remove('off')
        clearTimeout(timeOut)
    })


    pauseButton.addEventListener('click', function () {
        clearTimeout(timeOut)
        addAndRemoveClasses(this, startButton, resetButton)
    })
    
}




startButton.addEventListener('click', function ()  {
    startTimer()
    addAndRemoveClasses(this, pauseButton, resetButton)
});



   