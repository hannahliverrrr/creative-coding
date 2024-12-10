function setup() {
  createCanvas(800, 800); 

  //disable the animation
  noLoop();
}

function draw() {
  background(50,100,255);
  
  //draw seals with three diff gray shades
  fill(50);  //dark gray
  stroke(100);
  drawSeal(200, 650);
  
  fill(150); //medium gray
  stroke(200);
  drawSeal(400, 400);
  
  fill(220); //light gray
  stroke(255);
  drawSeal(600, 150);
}

function drawSeal(x, y) {

  //draw the face 
  strokeWeight(10);
  circle(x, y, 300);

  //draw the eyes
  fill("black");
  stroke("#000000");
  strokeWeight(0.7);

  //left eye 
  ellipse(x - 45, y - 40, 35, 40);

  //right eye 
  ellipse(x + 45, y - 40, 35, 40);

  //the mouth/snout thingy
  arc(x, y, 50, 50, 15, 95 );

  //the whiskers
  line(x - 100, y - 10, x - 50, y);
  line(x - 100, y + 20, x - 50, y + 20);
  line(x + 100, y - 10, x + 50, y);
  line(x + 100, y + 20, x + 50, y + 20);
}