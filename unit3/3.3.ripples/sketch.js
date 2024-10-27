//define vairables
let debug = false;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;
let goalSize = 30;

//set parameters
function setup() {
  createCanvas(800,800);

  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

//draw the circle and square
function draw() {
  background(220);

  rect(goalx, goaly, goalSize, goalSize);

  d = sqrt((x - mouseX)**2 + (y - mouseY)**2);
  
  x += speedx;
  y += speedy;

  circle(x,y,50);

    if (mouseX > x) {
    speedx = speedfactor;
  }else{
    speedx = -speedfactor;
  }

    if (mouseY > y){
    speedy = speedfactor;
  }else{
    speedy = -speedfactor;
  }

    if (d < 25){
    score += 1;
    x = random(width);
    y = random(height);
  }

  //check collision with square
  if (
    mouseX > goalx & 
    mouseX < goalx + goalSize &
    mouseY > goaly &
    mouseY < goaly + goalSize
  ){
    score += 1;
    x = random(width);
    y = random(height);

    //reset goal
    goalx = random(width);
    goaly = random(height);
  }

    if (debug){
      textSize(30);
      text("mouseX:" + mouseX, 50,50);
      text("mouseY:" + mouseY, 50,80);
      text("x: " + x, 50,120);
      text("y: " + y, 50,150);
      text("d: " + d, 50,180);
      text("score: " + score, 50, 210);
    }
}