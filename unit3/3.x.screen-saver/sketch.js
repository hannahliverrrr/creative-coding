let cols = 10; //number of columns
let rows = 10; //number of rows
let margin = 10; //space between squares
let squareSize;
let colors = [];
let targetColors = [];
let lerpAmount = 0;

function setup() {
  createCanvas(1200, 800);
  noStroke();
  squareSize = (width - margin * (cols + 1)) / cols; //add margin space in between squares

  // Initialize colors
  for (let i = 0; i < cols; i++) {
    colors[i] = [];
    targetColors[i] = [];
    for (let j = 0; j < rows; j++) {
      colors[i][j] = color(random(255), random(255), random(255), random(100, 250));
      targetColors[i][j] = color(random(255), random(255), random(255), random(100, 250));
    }
  }
}

function draw() {
  background(255);
  lerpAmount += 0.01; // Adjust this value to control the speed of the fade

  if (lerpAmount >= 1) {
    lerpAmount = 0;
    // Set new target colors
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        colors[i][j] = targetColors[i][j];
        targetColors[i][j] = color(random(255), random(255), random(255), random(100, 250));
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let c = lerpColor(colors[i][j], targetColors[i][j], lerpAmount);
      fill(c);
      let x = i * (squareSize + margin) + margin;
      let y = j * (squareSize + margin) + margin;
      rect(x, y, squareSize, squareSize);
    }
  }
}