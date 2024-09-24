function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  //i want to draw a vampire face
  //the face - yellow circle
  fill(100,100,300)
  stroke("black")
  strokeWeight(10)
  circle(200,200,300)
  //draw the eyes
  fill("black")
  stroke("#000000")
  strokeWeight(0.7)
  //left eye scrunch
  rect(100,150,80,20,30)
  //right eye scrunch
  rect(215,150,80,20,30)
  //the mouth 
  rect(100,250,200,20,80)
  //the teeth
  triangle(125,270,175,270,150,300)
  //second tooth
  triangle(290,250,200,250,250,300)

}