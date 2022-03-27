
/* Wordle clone source code can be found at: 
https://www.freecodecamp.org/news/build-a-wordle-clone-in-javascript/
*/

//import { WORDS } from "./words.js";
//import { HINTS } from "./hints.js";

/* disable toastr notification timeout */
toastr.options.timeOut = 0;
toastr.options.extendedTimeOut = 0;
toastr.options.preventDuplicates = 'true';

/* check for cookies */
//checkCookie()

/* start background audio */
//var background = new Audio('/assets/sounds/background.mp3');
//background.play();

/* start of words.js */

const WORDS = [
  'while',
  'float',
  'const',
  'class',
  'break',
  'raise',
  'catch',
  'short',
  'super',
  'throw',
  'array',
  'abort',
  'apple',
  'arial',
  'ascii',
  'block',
  'cache',
  'click',
  'close',
  'crash',
  'debug',
  'email',
  'erase',
  'excel',
  'field',
  'flash',
  'forum',
  'frame',
  'image',
  'input',
  'intel',
  'laser',
  'layer',
  'logic',
  'login',
  'macro',
  'media',
  'micro',
  'modem',
  'morph',
  'mouse',
  'octal',
  'patch',
  'pixel',
  'proxy',
  'purge',
  'query',
  'queue',
  'reset',
  'power',
  'robot',
  'spool',
  'stack',
  'stats',
  'suite',
  'table',
  'track',
  'tweet',
  'virus',
  'coder',
]

/* end of words.js */

/* start of hint.js */

const HINTS = [
  '_____ (  true )\nprintf(\'hello\');\nend',
  '_____ num = 2.9;',
  '_____ int num = 9;',
  'public _____ Main {\nint x = 5;\n}',
  'switch (n)\n{\ncase 1:\n_____;\ncase 2:\n_____;\ndefault:\n}',
  'x = -1\nif x < 0:\n_____ Exception("Sorry, no numbers below zero")',
  'try {\n} _____ (IOException e) {\n}',
  'unsigned _____',
  '_____(variable) //also known as a parent class',
  '_____ new IOException("sorry device error");',
  'int[] num = {1, 2, 3, 4};',
  '*stop sign*',
  '*apple logo*',
  'type of font',
  'number codes that represents letters, numbers, and punctuation',
  'another word for a chunk of code',
  'temporary memory',
  'selecting by pressing a button',
  'exit',
  'when a program stops operating',
  'catch errors',
  'electronic mail',
  'to remove',
  'spreadsheet program',
  'part of a record',
  'type of program',
  'online discussion',
  'a single image',
  'a copy of the entire state of an operating system',
  'put data into a computer',
  'company that develops microprocessors',
  'device that generates light',
  'organization of programming',
  'guides the behavior of code',
  'credentials that allow you in a system',
  '#define num = 5',
  'mass communication',
  'very small',
  'device that converts signals from one device to another',
  'change from image to another',
  'pointing input device of computer',
  'numerical notation of base 8',
  'a piece of code that can be applied to correct an error',
  'unit of color on a display',
  'intermediary between user and the internet',
  'permanently removing data',
  'request for data',
  'type of data structure',
  'restart',
  'on / off button',
  'machine resembling a human',
  'simultaneous periphal operations online',
  'type of data structure',
  'interpretation of data',
  'collection of computer programs',
  'structure used to organize information',
  'data storage ring that is capable of storing information',
  'communicate on a social media app',
  'piece of code capable of destroying data',
  'someone who codes',
]

/*function getHint() {
  console.log("HINT: " + HINTS[WORDS.indexOf(rightGuessString)])
}*/

/* end of hint.js */

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)
console.log(WORDS.indexOf(rightGuessString))

/* Fourth Button for Reload*/
var reload = document.getElementById('buttonFour');

reload.addEventListener('click', function(reload) {
  location.reload();
})

/* Three Button for Answer*/
var answer = document.getElementById('buttonThree');

answer.addEventListener('click', function(answer) {
  toastr.info("ANSWER: " + rightGuessString);
})

/* Second Button for Hints*/
var light = document.getElementById('buttonTwo');

light.addEventListener('click', function(light) {
  toastr.warning("HINT: " + HINTS[WORDS.indexOf(rightGuessString)])
  light.target.classList.toggle('onButton');
})
/* First Button for Instructions */
var instructions = document.getElementById('button');

instructions.addEventListener('click', function(instructions) {
  alert("HINT: Guess the CODELE in 6 tries\nEach guess is a 5 a letter word, however, the answer will be a coding/tech word\nA green tile means the letter is in the word and in the correct spot\nA yellow tile means the letter is in the word, but in the wrong spot\nA gray tile means the letter is not in the word\nYou may use the hint button, which will give you a code snippet with the keyword blanked out or a definition of the word\nThe answer can be revealed to you, if you choose\nClick new game when ready")
})

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

initBoard()

document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        checkGuess()
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

function insertLetter (pressedKey) {
    if (nextLetter === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    animateCSS(box, "pulse")
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -= 1
}


function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if (oldColor === 'green') {
                return
            } 

            if (oldColor === 'yellow' && color !== 'green') {
                return
            }

            elem.style.backgroundColor = color
            break
        }
    }
}

function checkGuess () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != 5) {
        toastr.error("Not enough letters!")
        var audio = new Audio('/assets/sounds/hit.mp3');
        audio.play();
        return
    }

    if (!WORDS.includes(guessString)) {
        toastr.error("Word not in list!")
        var audio = new Audio('/assets/sounds/hit.mp3');
        audio.play();
    }

    let check = false;
    for (let i = 0; i < 5; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        
        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = 'grey'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (currentGuess[i] === rightGuess[i]) {
                // shade green 
                letterColor = 'green'
                if(check == false) {
                var questionSound = new Audio('/assets/sounds/question.mp3');
                questionSound.play();
                }
                check = true;
            } else {
                // shade box yellow
                letterColor = 'yellow'
            }

            rightGuess[letterPosition] = "#"
        }

        let delay = 250 * i
        setTimeout(()=> {
            //shade box
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)
    }

    if (guessString === rightGuessString) {
        toastr.success("You guessed right! Game over!")
        var victorySound = new Audio('/assets/sounds/Victory.mp3');
        victorySound.play();
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            toastr.error("You've run out of guesses! Game over!")
            toastr.info(`The right word was: "${rightGuessString}"`)
            var audio = new Audio('/assets/sounds/Error.mp3');
            audio.play();
        }
    }
}

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("keyboard-button")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element
    node.style.setProperty('--animate-duration', '0.3s');
    
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

/*function createCookie(cName, cValue) 
{
  document.cookie = cName + "=" + cValue;
}
function accessCookie(cName) 
{
  var name = cName + "=";
  var cookieArray = document.cookie.split(';');

for(var i=0; i<cookieArray.length; i++) 
{
  var temp = cookieArray[i].trim();
  if(temp.indexOf(name)==0)
  return temp.substring(name.length,temp.length);
}
  return ""; 
}

function checkCookie()
  {
    var user = accessCookie("cookie");
    if (user == "") 
    { 
      user = prompt("Please enter your name to save your stats");
      
      if (user!="" && user!=null)
      {
        createCookie("cookie", user);
      }
    } 
    else
    {
      toastr.success("Welcome Back "+ user + "!!")
      var user = localStorage.getItem()
    }
  }

*/