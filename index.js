

let seconds = 0
let minutes = 0
let hours = 0

const startButton = document.querySelector('.timer__start');
const pauseButton = document.querySelector('.timer__pause');
const resetButton = document.querySelector('.timer__reset');


let secondsElem = document.querySelector('.seconds .timer__value');
let minutesElem = document.querySelector('.minutes .timer__value');
let hoursElem = document.querySelector('.hours .timer__value');

const zeroHelper = arg => arg < 10 ? `0${arg}` : `${arg}`;

function setValues () {
    secondsElem.textContent = zeroHelper(seconds)
    minutesElem.textContent = zeroHelper(minutes)
    hoursElem.textContent = zeroHelper(hours)
}



function updateValues (firstValue, secondValue) {
    
    firstValue = 0;
    secondValue++;

    return [firstValue,secondValue]
}

function setTextContent (firstArg, secondArg, firstValue, secondValue) {
    firstArg.textContent = zeroHelper(firstValue);
    secondArg.textContent = zeroHelper(secondValue);
}

function setMinutes () {
    let values = updateValues(seconds, minutes)
    seconds = values[0];
    minutes = values[1]
    
    setTextContent(secondsElem, minutesElem, seconds, minutes)
}





function setHours () {
    let values = updateValues(minutes, hours)
    minutes = values[0];
    hours = values[1]    
    setTextContent(minutesElem, hoursElem, minutes, hours)
   
}

function addAndRemoveClasses (firstElem , secondElem, thirdElem) {
    firstElem.classList.add('off')
    secondElem.classList.remove('off')
    thirdElem.classList.remove('off')
}

let startTimer = () => {

        let timeOut = setTimeout(() => {
        seconds++;
        secondsElem.textContent = zeroHelper(seconds)
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
        setValues()
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



   