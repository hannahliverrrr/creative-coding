let debug = true; 
let x = 20;
let y = 10;
let d = 2;
let speedfactor = 5
let speedx = speedfactor;
let speedy = speedfactor;
let score = 0; 
let goalx = 0;
let goaly = 0;
let goalSize = 45;
let img1;






function preload() {
  img1 = loadImage('https://cdn.pixabay.com/photo/2016/04/01/10/32/evil-1299920_1280.png')
  
 
}




function setup() {
  createCanvas(1000,800);

 

  x = random(width);
  y = random(height);
}

function draw() {
  background(0, 100, 60, 40);




//distance form
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2); 

//movement
x += speedx; 
y += speedy;

  //follower
  image(img1, x, y, 110,110);
   if (mouseX > x){
    //move right 
    speedx = speedfactor
  }else{
//left
    speedx = -speedfactor
  }

    if (mouseY > y){
    //move right 
    speedy = speedfactor
  }else{
//left
    speedy = -speedfactor
  }



if (d < 25){
  score -= 1; 
  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);


}

//collission with treasure 
strokeWeight(5)
stroke(random(255),200,50,255)
circle(goalx,goaly,goalSize)
fill(25,200,200,200)
circle(goalx,goaly,70)



noStroke();


if(
  mouseX > goalx & 
  mouseX < goalx + goalSize & 
  mouseY > goaly & 
  mouseY < goaly + goalSize
  ){
  score += 1;
//reset treasure 
  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

  if (debug){
  textSize(40)
 // text("mouseX: " + mouseX, 50,50);
  //text("mouseY: " + mouseY, 50,80); 
  //text("x: " + x, 50,120);
  //text("y: " + x, 50,150);
  //text("d: " + x, 50,180);
  text("Orbs Caught: " + score, 50,110);

  push();

  stroke('yellow')
  strokeWeight(2)
circle(200,30,40)
pop();

push();
strokeWeight(2)
stroke('red')
fill('purple')
circle(500,200,80)

  pop();

  push();
strokeWeight(8)
stroke('white')
fill('blue')
circle(380,520,30)
  pop();

  push();
strokeWeight(2)
stroke('red')
fill('purple')
circle(300,700,80)

  pop();
  push();
strokeWeight(2)
stroke('black')
fill('blueviolet')
circle(800,510,100)

  pop();
  push();
strokeWeight(2)
stroke('gold')
fill('black')
circle(878,245,80)

  pop();
  push();
strokeWeight(6)
stroke('blue')
fill('white')
circle(90,400,80)

  pop();
  push();
strokeWeight(2)
stroke('orange')
fill('yellow')
circle(700,700,20)

  pop();




  }
}