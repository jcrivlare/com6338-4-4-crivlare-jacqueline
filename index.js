// Creating an array of words.
var words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
  ];
  
  // var words = [
  //   'programming',
  // ];
  
  // Pick a random word.
  var word = words[Math.floor(Math.random() * words.length)];
  
  // Set up answer array.
  var answerArr = [];
  for (var i = 0; i < word.length; i++) {
    answerArr[i] = "_";
  }
  var wordToGuessEl = document.getElementById('word-to-guess')
  wordToGuessEl.innerHTML = answerArr.join("");
  
  
  var remainingLetters = word.length;
  var remainingGuesses = 10;
  
  var remainingGuessesEl = document.getElementById('remaining-guesses')
  remainingGuessesEl.innerHTML = remainingGuesses;
  
  var incorrectLettersEl = document.getElementById("incorrect-letters");
  
  document.onkeydown = (e) => {
    var key = e.key.toLowerCase();
    if (word.indexOf(key) == -1) {
      incorrectLettersEl.innerHTML += " " + key;
      remainingGuesses--;
      remainingGuessesEl.innerHTML = remainingGuesses;
    } else {
      for (var i = 0; i < word.length; i++) {
        if(word[i] == key){
          answerArr[i] = key;
        }
      }
      
      wordToGuessEl.innerHTML = answerArr.join("");
    }
  }
  
  // // Word game loop.
  // while (remainingGuesses > 0) {
  //   // alert(answerArr.join(" "));
  
  //   // Get a guess from the player.
  //   var wordToGuess = [];
  //   if (guess === null) {
  //     // Exit the game loop.
  //     break;
  //   } else if (guess.length !== 1) {
  //     alert("Please enter a single letter.");
  //   } else {
  //   // Update the game with the guess.
  //     for (var j = 0; j < word.length; j++) {
  //       if (word[j] === guess) {
  //         answerArr[j] = guess;
  //       }
  //     }
  //   }
  
  //   // Show answer.
  //   // alert(answerArr.join(" "));
  
  // }
  
  
  
  //*-------------------------------------------------------
  //*
  // var wordToGuessEl = document.getElementById('word-to-guess')
  // var remainingGuessesEl = document.getElementById('remaining guesses')
  // var previousWord = document.getElementById('previous word')
  // var incorrectLetters = document.getElementById('incorrect letters')
  // var winsEl = document.getElementById('wins')
  // var lossesEl = document.getElementById('losses')
  
  // var wins = 0
  // var lossses = 0
  
  
  
  //document.onkeyup = function(e) {
    //var key = e.key.toLowerCase()
    //if (words.indexOf(key) == -1) return
    //var words = words[Math.floor(Math.random() * words.length)]
    //console.log(key, word)
    //if (key ===word) {
      //wins**
      //winsEl.textContent = wins
    //} else {
      //losses**
      //lossesEl.textContent = losses
    //}
  
    //previousWordsEl.textContent = word
    //lastGuessEl.textContent = key
    //}
  //}
  
  