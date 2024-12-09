let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
}

function mousePressed() {
  let b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(20, 50);
    this.speed = random(1, 3);
  }

  move() {
    this.y -= this.speed;
  }

  display() {
    noStroke();
    fill(255, 100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}