let poem = '';

let grammar = tracery.createGrammar({
"origin":["WELCOME TO THE NEVERENDING STORY, I HAVE NEVER SEEN THE FILM.\nHOW THIS WORKS IS CERTAIN WORDS ARE ALWAYS CHANGING TO FORM A NEW AND #DIFFERENT# SENTENCES, SEE?"],




});

function setup() {
  createCanvas(1500, 830);
  noLoop()
}

function draw() {
  background("brown");
  poem = grammar.flatten("#origin#");
  textFont("impact");
  textSize(30);
  text(poem,5,60);
}