
//define variables
let cols = 10; //number of columns
let rows = 10; //number of rows
let margin = 10; //space between squares
let squareSize; //define variable
let colors = [];
let targetColors = [];
let lerpAmount = 0;

function setup() {
  createCanvas(1200, 800);
  noStroke();
  squareSize = (width - margin * (cols + 1)) / cols; //add margin space in between squares

  // create colors, add transparency
  for (let i = 0; i < cols; i++) {
    colors[i] = [];
    targetColors[i] = [];
    for (let j = 0; j < rows; j++) {
      //randomize colors, make them somewhat transparent
      colors[i][j] = color(random(255), random(255), random(255), random(100, 250));
      //next set of colors as the squares fade in and out
      targetColors[i][j] = color(random(255), random(255), random(255), random(100, 250));
    }
  }
}

function draw() {
  background(255);
  lerpAmount += 0.01; //adjust this value to control the speed of the fade

  if (lerpAmount >= 1) {
    lerpAmount = 0;
    //set new target colors
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        colors[i][j] = targetColors[i][j];
        //creates transition from one color to the next
        targetColors[i][j] = color(random(255), random(255), random(255), random(100, 250));
      }
    }
  }

  //creates loop for each square on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let c = lerpColor(colors[i][j], targetColors[i][j], lerpAmount); //i and j used above, loops color fade in and out
      fill(c); //sets square color
      let x = i * (squareSize + margin) + margin;
      let y = j * (squareSize + margin) + margin;
      rect(x, y, squareSize, squareSize);
    }
  }
}