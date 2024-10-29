//classify rippler variable
let ripplers = [];
//make canvas/background
function setup() {
  createCanvas(800, 600);
  background(255);
}
//draw ripplers
function draw() {
  background(255);
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw();
  }
}
//create ripples when clicking canvas
function mousePressed() {
  let r = new Rippler(mouseX, mouseY);
  ripplers.push(r);
}
//construct rippler parameters
class Rippler {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 0;
    this.fade = 255;
  }

  draw() {
    noFill();
    stroke(0, this.fade);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    this.diameter += 2; //adjust growth rate as needed
    this.fade -= 2; //adjust fade of ripples
  }
}
