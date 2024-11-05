function setup() {
  createCanvas(600, 600);
  noStroke(); // Disable the stroke
  noLoop();
}

function draw() {
  background(220);
  fill(random(255), random(255), random(255)); // Set the fill color to white
  rectMode(CENTER); // Set the rectangle mode to center
  rect(width / 2, height / 2, 100, 100); // Draw the square in the center
}
