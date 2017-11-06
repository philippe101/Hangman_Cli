var Letter = function(letter) {
	this.char = letter;

		this.appear = false;

		this.letterRender = function() {
			return !(this.appear) ? " _ " : this.char;
		};
};

module.exports = Letter;