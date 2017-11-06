var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {
		wordBank : ["rome", "paris", "copenhagen", "geneva", "madrid"],
		wordsWon : 0,
		guessesRemaining : 10,
		currentWord: null,

		startGame : function (word){

			this.resetGuessesRemaining();

			this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

			this.currentWord.getLetters();

			this.keepPromptingUser();
		},
		resetGuessesRemaining : function(){
			this.guessesRemaining = 10;
		},
		keepPromptingUser : function(){
			var self = this;

			prompt.get(['guessLetter'], function(err, result) {

				console.log('The letter you guessed is: ' + result.guessLetter);

			var UserGuesses = self.currentWord.letterFound(result.guessLetter);

			if (UserGuesses == 0){
				console.log('wrong letter');
				self.guessesRemaining--;
			}else{
				console.log('correct');

				if(self.currentWord.wordFound()){
					console.log('you win!');
					return;
				}
			}

			console.log('guesses remaining: ', self.guessesRemaining);
			console.log(self.currentWord.wordRender());
			console.log('these are the correct letters ');

			if ((self.guessesRemaining > 0) && (self.currentWord.found == false)){
				self.keepPromptingUser();
			}
			else if(self.guessesRemaining == 0){
				console.log('game over ', self.currentWord.word);
				console.log('try again');
			}else{
				console.log(self.currentWord.wordRender());
			}

			});
		}
};

game.startGame();

























