//import { WORDS } from "./words.js";

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
  'a visible impression',
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
  'a piece of code that can be applied to correct and error',
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

// Delete this after

//var light = document.getElementById('buttonTwo');

//toastr.error("Not enough letters!")
//light.addEventListener('click', function(light) {
//  toastr.error(getHint())
//})

function getHint() {
  console.log(
    "HINT: " + HINTS[WORDS.indexOf(rightGuessString)])
}