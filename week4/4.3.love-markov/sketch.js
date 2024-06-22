
// create markov model
let rm = RiTa.markov(5);
// find data
let data = document.getElementById("source").innerText;
// training the model
rm.addText(data);
//function preload() {
 //result = loadStrings('');
//}
function setup(){
// generate # of sentences
let lines = rm.generate(20);
// finding the corresponding letter DIV
let letter = select("#letter");
// add greeting
letter.child( createP(" Daily Logs From A 19th Century Time Traveler,"));
for (let l = 2; l < lines.length; l++){
letter.child(
createP( lines[l] )
);
}
// add a complimentary closing
letter.child( createP("It's up to YOU to decide what you do with is information, <br> -The 19th Century Time Traveler"));
}
function mousePressed(){
letter.remove();
letter = createDiv();
letter.id("letter");
setup();
}