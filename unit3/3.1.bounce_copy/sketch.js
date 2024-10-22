function setup() {
  createCanvas(400, 400);
  xspeed1 = random(5, 10); //first ball horizontal speed
  yspeed1 = random(6, 11); //first ball vertical speed
  xspeed2 = random(5, 10); //second ball horizontal speed
  yspeed2 = random(6, 11); //second ball vertical speed
}

//start position of ball 1
let x1 = 100; 
let y1 = 0;
let xspeed1;
let yspeed1;
//starting color & size of ball 1
let r1 = 255;
let g1 = 0;
let b1 = 0;
let diameter1 = 40;

//start position of ball 2
let x2 = 300; 
let y2 = 400;
let xspeed2;
let yspeed2;
//starting color & size of ball 2
let r2 = 0;
let g2 = 0;
let b2 = 255;
let diameter2 = 40;

function draw() {
  background(220);

  let d = dist(x1, y1, x2, y2);
  if (d < (diameter1 / 2 + diameter2 / 2)) {
    //reverse direction of both balls
    xspeed1 *= -1;
    yspeed1 *= -1;
    xspeed2 *= -1;
    yspeed2 *= -1;

    //move balls apart to avoid repeated collisions
    x1 += xspeed1;
    y1 += yspeed1;
    x2 += xspeed2;
    y2 += yspeed2;

    //change color on collision
    r1 = random(0, 255);
    g1 = random(0, 255);
    b1 = random(0, 255);
    diameter1 = random(30,70);
    r2 = random(0, 255);
    g2 = random(0, 255);
    b2 = random(0, 255);
    diameter2 = random(30,70);
  }

  //FIRST CIRCLE
  if (x1 < 0 || x1 > width) {
    xspeed1 = xspeed1 * -1;
    diameter1 = random(30,70);
  }
  if (y1 < 0 || y1 > height) {
    yspeed1 = yspeed1 * -1; 
    diameter1 = random(30,70);
  }
  x1 = x1 + xspeed1;
  y1 = y1 + yspeed1;
  fill(r1, g1, b1);
  circle(x1, y1, diameter1);
 

//SECOND CIRCLE
  if (x2 < 0 || x2 > width) {
    xspeed2 = xspeed2 * -1;
    diameter2 = random(30,70);
  }
  
  if (y2 < 0 || y2 > height) {
    yspeed2 = yspeed2 * -1;
    diameter2 = random(30,70);
  }

  x2 = x2 + xspeed2;
  y2 = y2 + yspeed2;
  fill(r2, g2, b2);
  circle(x2, y2, diameter2);
}