
let rm;

function setup() {
  rm = RiTa.markov(2);

  let data = document.getElementById("source").innerText;

  rm.addText(data);

  let lines = rm.generate(6);

  let letter = select("#letter");

  letter.child(createP('Dear Best Friend,'));

  for (let l = 0; l < lines.length; l++) {
    let paragraph = createP(lines[l]);
    letter.child(paragraph);
  }

  letter.child(createP('Best,<br>Hannah'));
}

function mousePressed(){
  letter.remove();
  letter = createDiv();
  letter.id("letter");
  setup();
}


