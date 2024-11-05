function setup() {
  createCanvas(600, 600);
  noStroke(); // Disable the stroke
  noLoop();
}

function draw() {
  background(220);
  for (let i = 0; i < 100; i++) { // Draw 10 squares
    fill(random(255), random(255), random(255)); // Set the fill color to a random color
    let x = random(width); // Random x position
    let y = random(height); // Random y position
    rectMode(CENTER); // Set the rectangle mode to center
    rect(x, y, random(50,100), random(50,100)); // Draw the square at the random position
  }
}
