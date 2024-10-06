function setup() {
  createCanvas(400, 400);
  background(155,110,0);
  noLoop();
  noStroke();
}
function draw() {
  let border = 15; // Border size
  let spacing = 9; // space between squares
  let cols = 14; // how many columns
  let rows = 14; // how many rows
  let w = (width - 4 * border - (cols - 5) * spacing) / cols; //dimensions & positioning of col
  let h = (height - 1.5 * border - (rows + 1.5) * spacing) / rows; //dimensions & positioning of row
  
  for (let row = 0; row < rows; row++) { // help identify row and color 
    let c = lerpColor(color(212, 225, 222,215), color(10, 40, 50), row / (rows - 1)); // gradient
    // used p5.js reference page for lerpColor
    for (let col = 0; col < cols; col++) { // help identify horizontal position of square
      let x = border + col * (w + spacing);
      let y = border + row * (h + spacing);
    
      let yOffset = random(-h / 4, h / 4); // offset position of squares
    
      y += yOffset;
      
      fill(c); // set fill color for the current row
      rect(x, y, w, h);
    } 
  }
}