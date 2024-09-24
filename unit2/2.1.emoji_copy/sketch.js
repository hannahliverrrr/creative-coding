function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  //i want to draw a seal
  //the face 
  fill(100,100,100)
  stroke(150,150,150)
  strokeWeight(10)
  circle(200,200,300)

  //draw the eyes
  fill("black")
  stroke("#000000")
  strokeWeight(0.7)

  //left eye 
  ellipse(155,160,35,40,40)

  //right eye 
  ellipse(250,160,35,40,40)

  //the mouth 
  arc(200, 210, 75, 60, 700, QUARTER_PI);

  stroke('black');
  strokeWeight(5);
//the whiskers
  line(100, 190, 150, 200);
  line(100, 220, 150, 220)
  line(300, 190, 250, 200)
  line(300, 220, 250, 220)

 

  
}