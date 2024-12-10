function setup() {
  // create a canvas
  createCanvas(800, 800); // Adjusted canvas size to fit three seals

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  
  // Draw three seals
  drawSeal(200, 650);
  drawSeal(400, 400);
  drawSeal(600, 150);
}

function drawSeal(x, y) {
  // the face 
  fill(100, 100, 100);
  stroke(150, 150, 150);
  strokeWeight(10);
  circle(x, y, 300);

  // draw the eyes
  fill("black");
  stroke("#000000");
  strokeWeight(0.7);

  // left eye 
  ellipse(x - 45, y - 40, 35, 40);

  // right eye 
  ellipse(x + 45, y - 40, 35, 40);

  // the nose
  fill(0);
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, 20, 15);

  // the mouth 
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(x, y + 50, 75, 60, 0, PI);

  // the whiskers
  line(x - 100, y - 10, x - 50, y);
  line(x - 100, y + 20, x - 50, y + 20);
  line(x + 100, y - 10, x + 50, y);
  line(x + 100, y + 20, x + 50, y + 20);
}