function setup() {
  createCanvas(800, 800);
  background(255);
  stroke(0);
  textSize(32); // Set text size
  fill(0); // Set text color to black
}

function draw() {
  background(255); // Clear the canvas each frame

  let shapesToDraw = frameCount % 60; // Determine how many shapes to draw based on the frame count
  let elapsedTime = millis(); // Get the elapsed time in milliseconds

  // Calculate hours, minutes, and seconds
  let hours = int(elapsedTime / 3600000);
  let minutes = int((elapsedTime % 3600000) / 60000);
  let seconds = int((elapsedTime % 60000) / 1000);

  // Format the time as HH:MM:SS
  let timeString = nf(hours, 2) + ':' + nf(minutes, 2) + ':' + nf(seconds, 2); //used nf from reference page: https://p5js.org/reference/p5/nf/

  // Display the elapsed time in the top left corner
  text('Time: ' + timeString, 10, 40);

  for (let i = 0; i < shapesToDraw; i++) {
    push();
    translate(400, 400); // Move to the center of the canvas
    rotate(TWO_PI * i / 60); // Rotate by 60 degrees each iteration
    translate(-400, -400); // Move back to the original position

    // Calculate the color gradient
    let r, g, b;
    if (elapsedTime < 3600000) { // First hour: red to orange
      r = map(i, 0, 59, 255, 255); // Red stays constant
      g = map(i, 0, 59, 0, 165);   // Green increases from 0 to 165
      b = map(i, 0, 59, 0, 0);     // Blue stays constant
    } else { // After one hour: orange to yellow
      r = map(i, 0, 59, 255, 255); // Red stays constant
      g = map(i, 0, 59, 165, 255); // Green increases from 165 to 255
      b = map(i, 0, 59, 0, 0);     // Blue stays constant
    }
    fill(r, g, b, 150); // Set fill color with some transparency

    beginShape();
    vertex(400, 200); // Top point
    bezierVertex(500, 300, 500, 500, 400, 600); // Right curve
    vertex(400, 600); // Bottom point
    bezierVertex(300, 500, 300, 300, 400, 200); // Left curve
    endShape(CLOSE);
    pop();
  }
}