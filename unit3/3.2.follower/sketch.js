
let debug = true;
let x = 0;
let y = 0;
let d = 0;

function setup(){
  createCanvas(800,800);

  x = random(wdith);
  y = random(height);
}

function draw() {
  background(220);
  //distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2)

  if (debug) {
  textSize(30);
  text("mouseX: " + mouseX, 50, 50);
  text("mouseY: " + mouseY, 50, 80);
  text("x: " + x, 50, 120);
  text("y: " + y, 50, 150);
  text("d: " + d, 50, 180);
  }
}















