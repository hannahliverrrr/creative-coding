function setup() {
  createCanvas(400, 400);
  // Initialize speeds with random values
  xspeed1 = random(5, 10);
  yspeed1 = random(5, 10);
  xspeed2 = random(5, 10);
  yspeed2 = random(5, 10);
}

let x1 = 200; // Start positions for the first circle
let y1 = 200;
let xspeed1;
let yspeed1;
let r1 = 255;
let g1 = 0;
let b1 = 0;
let diameter1 = 50;

let x2 = 200; // Start positions for the second circle
let y2 = 200;
let xspeed2;
let yspeed2;
let r2 = 0;
let g2 = 0;
let b2 = 255;
let diameter2 = 50;

function draw() {
  background(220);

  // First circle
  if (x1 < 0 || x1 > width) {
    xspeed1 = xspeed1 * -1;
    // Change color on bounce
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    diameter1 = random(30,70)
  }
  
  if (y1 < 0 || y1 > height) {
    yspeed1 = yspeed1 * -1;
    // Change color on bounce
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    diameter2 = random(30,70)
  }

  x1 = x1 + xspeed1;
  y1 = y1 + yspeed1;

  fill(r1, g1, b1);
  circle(x1, y1, diameter1);

  // Second circle
  if (x2 < 0 || x2 > width) {
    xspeed2 = xspeed2 * -1;
    // Change color on bounce
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
  
  if (y2 < 0 || y2 > height) {
    yspeed2 = yspeed2 * -1;
    // Change color on bounce
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }

  x2 = x2 + xspeed2;
  y2 = y2 + yspeed2;

  fill(r2, g2, b2);
  circle(x2, y2, diameter2);
}