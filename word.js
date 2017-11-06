var Letter = require('./letter.js');

var Word = function(word){
	this.word = word;
	this.letters = [];
	this.found = false;

	this.getLetters = function() {
		for(var i = 0; i < this.word.length; i++) {
			 this.letters.push(new Letter(this.word[i]));
		}
	};

	this.wordFound = function()
{
		this.found = this.letters.every(function(currentLetter) {
			return currentLetter.appear;
		});

		return this.found;
};

this.letterFound = function(guessLetter) {
		var updateScore = 0;

		for(var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].char == guessLetter){
					this.letters[i].appear = true;
					updateScore++;
			}
		}

		return updateScore;
	};

	this.wordRender = function() {
		var str = '';

		for(var i = 0; i < this.letters.length; i++){
			str += this.letters[i].letterRender();
		}

		return str;
	};

}

module.exports = Word;








