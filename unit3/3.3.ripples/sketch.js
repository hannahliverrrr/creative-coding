//define variables
let ripple_x = 0;
let ripple_y = 0;
let ripple_diameter = 0;
let ripplers = [];

//classify the ripples and 
class Rippler {
  constructor (x,y){
    this.x = x,
    this.y = y,
    this.diameter = 0;
  }

  draw(){
    this.diameter += 1;
    circle(this.x, this.y, this.diameter);
  }
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(150,200,400);
  stroke("white");
  strokeWeight(5);
  noFill();

  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }
}
//implement the parameters above 
function mousePressed(){
  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_diameter = 0;
  ripplers.push(new Rippler(ripple_x, ripple_y)); //got this from the yt video instructions, not really understanding this part though
}
