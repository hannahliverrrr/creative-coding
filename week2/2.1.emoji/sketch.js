function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

    stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250) 
  stroke("black")
  strokeWeight(1)
  fill("white")
  ellipse(146, 180, 90);


  stroke("black")
  strokeWeight(1)
  fill("white")
  ellipse(255, 180, 90);

  fill("black")
  ellipse(130, 180, 20)

  fill("black")
  ellipse(270, 180, 20)

  

  arc(200, 210, 180, 140, PI / 9, 8 * PI / 9, OPEN);
  }