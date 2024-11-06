let cols = 10; //number of columns
let rows = 10; //number of rows
let margin = 10; //space between squares
let squareSize;

function setup() {
  createCanvas(1200, 800);
  noStroke();
  squareSize = (width - margin * (cols + 1)) / cols; //add margin space in between squares
}

function draw() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (frameCount % 60 == 0) { // p5.js reference page https://p5js.org/reference/p5/frameCount/
        fill(random(255), random(255), random(255), random(100, 250)); //generate color of square
      }

      let x = i * (squareSize + margin) + margin;
      let y = j * (squareSize + margin) + margin;
      rect(x, y, squareSize, squareSize);
    }
  }
}