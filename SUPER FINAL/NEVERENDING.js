let poem = '';

let grammar = tracery.createGrammar({
"origin":["#step# RIGHT UP BECAUSE \nEVERYONE IS A #winner# IN #place#\n\nBOUNCER:\nWOAH #nickname#, BEFORE YOU GO IN YOU MUST CHIP IN\n\nAMOUNT YOU GIVE: #amount#\n\nBOUNCER:\nTHAT #works#\nENJOY YOUR STAY AT THE HOUSE OF #material#\n\nSPIN TO WIN! (MATCH 3 IN A ROW TO WIN)\nSPIN!!!: #spin#\n\nBLACKJACK? (SCORE HIGHER THAN DEALER OR GET 21)\nYOU: #you#\nDEALER :#dealer#"],
"place":["VEGAS","TEXAS","ATLANTIC CITY","LOS ANGELES","MIAMI","NEW MEXICO","VERMONT"],
"step":["WALK","RUN","SPRINT","SPEEDWALK","TELEPORT","FLOAT"],
"amount":["$10,000","$1","NOTHING","$20","$100","YOUR LIFE SAVINGS","24K GOLD WATCH","$4"],
"nickname":["BATMAN","BUDDY","PAL","HOMEBOY","HOMESLICE","FRIEND","PARTNER","THERE","SMASHING PUMPKINS","SILLY"],
"winner":["WINNER","LOSER"],
"material":["DUST","STICKS","LOVE","FIRE","DOLLA BILLS", "RICHES","SOULS","FLOWERS"],
"spin":["7 7 7", "🍒 🍑 🍍","🍒f🍒","🍌 🍐 🍐","7 🍒 🍌","🍹 🍹 🍹","🍷 🍇 🍈","🥕🥒🍄","🥒🥒🥒","7 🍄 7", "7 7 🍍"],
"works":["WORKS","DOESN'T WORK BUT ALRIGHT"],
"you":["12","21","14","5","20","4","19","7","18","17","16"],
"dealer":["21","18","17","14","6","16","12","5","15"]

});

function setup() {
  createCanvas(800, 800);
noLoop();
noCursor();
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("impact");
  textSize(30);
  text(poem,10,100);




  
}