
let rm = RiTa.markov(2);

let data = document.getElementById("source").innerText;
rm.addText(data);

function preload() {
  result = loadStrings('');
}

function setup() {
  noCanvas();
  let lines = rm.generate(6);
  let letter = select("#letter");
  letter.child(createP('My Dearest Harrington,'));
  
  for (let l = 0; l < lines.length; l++) {
    let paragraph = createP(lines[l]);
    letter.child(paragraph);
  }
  letter.child(createP('Sincerely, Markov'));
}

function mousePressed() {
  let letter = select("#letter");
  letter.remove();
  letter = createDiv();
  letter.id("letter");
  setup();
}