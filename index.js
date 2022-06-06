// Creating an array of words.
var words = [
  "bananas",
  "grapes",
  "carousel",
  "milkshake",
  "javascript",
  "limousine",
  "chocolate",
  "programming",
  "meatloaf",
  "ukulele",
  "mango",
];

var wins = 0;
var losses = 0;
var previousWord = "";

initialize();

function initialize() {
  // Pick a random word.
  var word = words[Math.floor(Math.random() * words.length)];

  // Set up answer array.
  var answerArr = [];
  for (var i = 0; i < word.length; i++) {
    answerArr[i] = "_";
  }
  var wordToGuessEl = document.getElementById("word-to-guess");
  wordToGuessEl.innerHTML = answerArr.join("");

  var remainingLetters = word.length;
  var remainingGuesses = 10;

  var remainingGuessesEl = document.getElementById("remaining-guesses");
  remainingGuessesEl.innerHTML = remainingGuesses;

  var winsEl = document.getElementById("wins");
  winsEl.innerHTML = wins;

  var lossesEl = document.getElementById("losses");
  lossesEl.innerHTML = losses;

  var incorrectLettersEl = document.getElementById("incorrect-letters");
  incorrectLettersEl.innerHTML = "";

  var previousWordEl = document.getElementById("previous-word");
  previousWordEl.innerHTML = previousWord;

  document.onkeyup = (e) => {
    var key = e.key.toLowerCase();

    if (incorrectLettersEl.innerHTML.includes(key) || !key.match(/[a-z]/i)) {
      return;
    }

    if (word.indexOf(key) == -1) {
      incorrectLettersEl.innerHTML += key + " ";
      remainingGuesses--;
      remainingGuessesEl.innerHTML = remainingGuesses;

      if (remainingGuesses == 0) {
        losses++;
        previousWord = "";
        initialize();
      }
    } else {
      for (var i = 0; i < word.length; i++) {
        if (word[i] == key) {
          answerArr[i] = key;
        }
      }

      wordToGuessEl.innerHTML = answerArr.join("");

      if (!answerArr.includes("_")) {
        wins++;
        previousWord = word;
        initialize();
      }
    }
  };
}
