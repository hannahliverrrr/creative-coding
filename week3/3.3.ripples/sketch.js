let rings = [];
let colors = [];

function setup() {
  createCanvas(800, 800);
  
  for (let c = 0; c < 100; c++){
    colors.push([random(0),random(34),random(255)]);
    frameRate(16)
  }
}

function mouseDragged(){
  
 rings.push (new Ring(mouseX, mouseY)); 
}

function draw() {
  background(0, 0, 0);

  for (let x = 0; x < 9; x += 1) {
    for (let y = 0; y < 9; y += 1) {

   
      push();
    



translate(x * 87, y * 86);
      strokeWeight(9)
    stroke(random(0, 255),180,221);

    fill(random(34, 255), 220, 223);

      rect(7,5,90,100);

      pop();
    }
  }

  for (let i = 0; i < rings.length; i++) {
    rings[i].display();
    rings[i].grow();
    rings[i].fade()
    
    if (rings[i].apha< 0){
    rings.splice(i,4);
    }
  }
}

class Ring {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.d = 4;
    this.alpha=255
  }

  display() {
    noFill();
    strokeWeight(4);
    stroke(random(0,255), 200, 255, this.alpha);
    circle(this.x, this.y, this.d);
  }

  grow() {
    this.d += random(1.5,7);
  }
  
  fade() {
    this.alpha -= random(5,14)
}
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)
}

