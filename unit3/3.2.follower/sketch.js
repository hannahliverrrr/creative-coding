
let debug = true;
let x = 0;
let y = 0;
let d = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let score = 0;
let goalx = 0;
let goaly = 0;
let goalSize = 30;


function setup(){
  createCanvas(800,800);

  x = random(wdith);
  y = random(height);

  goalx = random(width);
  gaoly = random(height);
}

function draw() {
  background(220);

  rect(goalx, goaly, goalSize, goalSize);

  //distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2)

  x += speedx;
  y += speedy; 

  //circle for follower
  circle(x,y,50);

  if (mouseX > x) {
    //move to the right
    speedx = speedfactor;
  }else{
    //move to the left
    speedx = -speedfactor;
  }
  if (mousey > y) {
    //move to the right
    speedy = speedfactor;
  }else{
    //move to the left
    speedy = -speedfactor;
  }
//check for collision
  if (d < 25) {
    score += 1;
    x = random(width);
    y = random(height);
  }

  //check for collision with square
  if (
    mouseX > goalx &
    mouseX < goalx + goalSize &
    mouseY > goaly &
    mouseY < goaly + goalSize
  ){
    score += 1;
    //reset follower
    x = random(width);
    y = random(height);
  }


  if (debug) {
  textSize(30);
  text("mouseX: " + mouseX, 50, 50);
  text("mouseY: " + mouseY, 50, 80);
  text("x: " + x, 50, 120);
  text("y: " + y, 50, 150);
  text("d: " + d, 50, 180);
  text("score: " + score, 50, 210);
  }
}















