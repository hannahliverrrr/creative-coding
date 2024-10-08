function setup() {
  createCanvas(400, 400);
  background(155,110,0);
  frameRate(5);
  noStroke();
}

function draw() {
  background(155, 110, 0);
    // clear the background every 2 seconds (2000 milliseconds); referenced: https://p5js.org/reference/p5/millis/#:~:text=Reference%20millis()-,millis(),for%20timing%20events%20and%20animations.
    if (millis() % 2000 < 200) {
      // background(155, 110, 0);
    }
  let border = 15; // border size
  let spacing = 10; // space between squares
  let cols = 14; // how many columns
  let rows = 14; // how many rows
  let w = (width - 2 * border - (cols - 1) * spacing) / cols; // dimensions & positioning of col
  let h = (height - 2 * border - (rows - 5) * 1.5 * spacing) / rows; // dimensions & positioning of row
  
  for (let row = 0; row < rows; row++) { // help identify row and color 
    let c = lerpColor(color(193, 220, 255, 180), color(20, 25, 32), row / (rows - 1)); // gradient
    for (let col = 0; col < cols; col++) { // help identify horizontal position of square
      let x = border + col * (w + spacing);
      let y = border + row * (h + spacing);
      
      let yOffset = random(-h / 4, h / 4); // offset position of squares horizontally
      
      y += yOffset;

      fill(c); // set fill color for the current row
      rect(x, y, w, h);

    } 
  }
}