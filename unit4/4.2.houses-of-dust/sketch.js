//17 matierals, 26 places, 4 lightsources, 22 inhabitants - this multiplied together to create 38,896 possible outcomes

let quatrin = 'rtbttr';

let grammar = tracery.createGrammar({
 "material": [
  "sand",
  "dust",
  "leaves",
  "paper",
  "tin",
  "roots",
  "brick",
  "broken dishes",
  "wood",
  "straw",
  "weeds"
 ],
 "origin": "a house of #materials#"
});

quatrain = grammar.flatten("#origin#");


function setup (){
  createCanvas(800,800);
  noLoop();
}

function draw(){
  background(220);

  textSize(40);
  text(quatrain, 50, 70);
}



//let poem;
//let grammar = tracery.createGrammar({
   //"origin": "A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#",
   //"material": ["wood", "stone", "brick", "glass", "metal"],
   //"place": ["in the forest", "by the ocean", "on the mountain", "in the city", "in the desert", "in the suburbs", "in the sky", "under the sea", "next to the park"],
   //"light_source": ["torches", "overhead fans", "the sun", "the LED lghtbulbs", "fireflies", "fire", "bonfire", "explosion"],
   //"inhabitants": ["ghosts", "ohioans", "old ladies", "kiddos", "animals", "a pack of rodents", "a group of norwegian warriors", "vikings", "the obama family"]
//});

//function setup() {
  //createCanvas(800, 800);
  //noLoop();
//}

//function draw() {
  //poem = grammar.flatten("#origin#");
  //text(poem, 10, 10, width - 20, height - 20);
//}
//function draw() {
  //background(220);
  //let y = 10;
  //for (let i = 0; i < 8; i++) { // Adjust the number of quatrains as needed
     //poem = grammar.flatten("#origin#");
     //text(poem, 10, y, width - 20, height - 20);
     //y += 80; // Adjust spacing between quatrains
  //}
//}