function setup() {
  createCanvas(400, 400);
  background(155,110,0);
  noLoop();
  noStroke();
}
function draw() {
  let border = 15; // border size
  let spacing = 7; // space between squares
  let cols = 14; // how many columns
  let rows = 14; // how many rows
  let w = (width - 2 * border - (cols - 1) * spacing) / cols; // dimensions & positioning of col
  let h = (height - 2 * border - (rows - 5) * 1.5 * spacing) / rows; // dimensions & positioning of row
  
  for (let row = 0; row < rows; row++) { // help identify row and color 
    let c = lerpColor(color(193, 220, 255, 180), color(20, 25, 32), row / (rows - 1)); // gradient
    for (let col = 0; col < cols; col++) { // help identify horizontal position of square
      let x = border + col * (w + spacing);
      let y = border + row * (h + spacing);
      
      let yOffset = random(-h / 8, h / 8); // offset position of squares horizontally
      
      y += yOffset;

      fill(c); // set fill color for the current row
      rect(x, y, w, h);

    } 
  }
}