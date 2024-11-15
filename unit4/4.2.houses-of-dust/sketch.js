//17 matierals, 26 places, 4 lightsources, 22 inhabitants - this multiplied together to create 38,896 possible outcomes
let quatrain = '';
let grammar = tracery.createGrammar({
   "origin": "A house of #material#\n#place#\nusing #light_source#\ninhabited by #inhabitants#",
   "material": ["lies", "pancakes", "chairs", "cardboard", "birch", "sticks", "glue", "rugs", "carpet", "rubies", "diamonds", "gold", "clouds", "dust", "rain", "sponges", "leather"],
   "place": ["under the stars", "near the school", "down the path", "in the laundry", "over the moon", "over the dunes", "in the countryside", "up the mountain", "in the sand", "next to the city", "beside the farm", "beside the waterfall", "in the forest", "by the ocean", "on the mountain", "in the city", "in the desert", "in the suburbs", "in the sky", "under the sea", "next to the park", "across the street", "behind the city", "next to the building", "under the bridge", "near the prison"],
   "light_source": ["torches", "the sun", "fire", "explosion"],
   "inhabitants": ["ohioans", "animals", "a pack of rodents", "a group of norwegian warriors", "vikings", "the obama family", "prison guards", "clowns", "babies", "cats", "dogs", "a school of fish", "a batch of talking cookies", "27 million horses", "unicorns", "teenage boys", "teenage girls", "middle aged white women", "popsiscle lovers", "seals", "wolves of wall street", "dinosaurs"]
});

function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
}

function draw() {
  background(220);
  quatrain = grammar.flatten("#origin#");
  textFont("Impact");
  textSize(40);
  text(quatrain, 50,70);
}
function draw() {
  background(220);
  let y = 10;
  for (let i = 0; i < 5; i++) { // Adjust the number of quatrains
     quatrain = grammar.flatten("#origin#");
     text(quatrain, 10, y, width - 40, height - 40);
     y += 80; // Adjust spacing between quatrains
  }
}