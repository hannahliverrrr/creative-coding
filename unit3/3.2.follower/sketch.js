//define variables
let debug = true;
let debug1 = false;
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
let img;

function preload (){
  img = loadImage('https://hannahliverrrr.github.io/creative-coding/unit3/3.2.follower/horse.jpeg.jpg');
}

//set parameters
function setup() {
  createCanvas(600,600);

  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

//draw the sprite and square
function draw() {
  background(255);

  //color the square
  fill(50,75,100);
  rect(goalx, goaly, goalSize, goalSize);

  //distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2);
  
  x += speedx;
  y += speedy;

  img(x,y,goalSize, goalSize);

  //if collision happens, reset sprite
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
    //update score when collision happens
    score += 1;
    x = random(width);
    y = random(height);

    //reset goal
    goalx = random(width);
    goaly = random(height);
  }

  // add text for position
    if (debug1){
      textSize(30);
      text("mouseX:" + mouseX, 50,50);
      text("mouseY:" + mouseY, 50,80);
      text("x: " + x, 50,120);
      text("y: " + y, 50,150);
      text("d: " + d, 50,180);
    }
    //add text for score when collision happens
      if (debug) {
        fill(0,160,90);
        text("score: " + score, 20, 150);
      }
      
    }
