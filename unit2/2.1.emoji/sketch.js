function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  // draw the face - yellow circle
  fill("gold")
  circle(200,200,300)
  //draw the eyes
  elipse(200,200,200,200)

}