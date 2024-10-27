//classify variable name
let ripples = []; 

//set variable parameters
class Ripples { 
  constructor(x, y) {
    this.x = x; //sets the x to wherever the click is
    this.y = y; //sets the y to wherever the click is
    this.diameter = 0; //starts the animation from 0 
    this.fade = 255; //shows where the animation will start fading
  }

  //draw the ripples
  draw() {
    this.diameter += 2; //this increases the diameter
    this.fade -= 2; //thisincreases the fade
    noFill(); //doesn't fill ripple with color
    stroke(0, 0, 0, this.fade); //ripple line thickness and adds in transparency with the fade classification
    ellipse(this.x, this.y, this.diameter); //shapes the parameters I set up into a circle
  }

  //reset the animation
  isFinished() {
    return this.fade <= 0; 
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255); 

  //create the ripples with the above specifications
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].draw();
    if (ripples[i].isFinished()) {
    }
  }
}

//make sure the animation happens wherever the mouse clicks the screen
function mousePressed() {
  let newRipples = new Ripples(mouseX, mouseY);
  ripples.push(newRipples);
}