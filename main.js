function Language(a, b) {
	this.greeting = a;
	this.farewell = b;
	this.dictionary = function() {
		console.log('My greeting is "' + this.greeting + '" and my farewell is "' + this.farewell + '"');
	}
}

Language.prototype.phrasebook = function() {
	console.log('Greeting: ' + this.greeting);
	console.log('Farewell: ' + this.farewell);
}

var english = new Language('Hello!', 'Goodbye!');
console.log(english);
for (var i in english) {
	console.log(i, english.hasOwnProperty(i));
}
// english.dictionary();
// english.phrasebook();

var spanish = new Language('Hola!', 'Adios!');
// console.log(spanish);
// spanish.dictionary();
// spanish.phrasebook();

// console.log(english.dictionary == spanish.dictionary);
// console.log(english.phrasebook == spanish.phrasebook);

