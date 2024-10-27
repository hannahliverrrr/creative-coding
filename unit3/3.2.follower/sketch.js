function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0, 255, 0); // Green color
  ellipse(mouseX, mouseY, 20, 20); // Circle with diameter 20
}