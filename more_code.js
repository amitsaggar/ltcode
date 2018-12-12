let words = ["--...-.", "--...-.", "--...--.", "--...--." ];
console.log (words.filter( (value, index, self) => { return self.indexOf(value) === index; } ));