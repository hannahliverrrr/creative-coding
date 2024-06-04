let x = 0;
let y = 0;
let xspeed = 2;
let yspeed = 2;
let = img;
let sampleX = 12;
let sampleY = 14;

function preload(){
  img = loadImage('https://stephenmcc48.github.io/creative-coding/week2/pixels/GreenLantern.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  fill('yellow')
  
}

function draw() {
  background(220);

textSize(20);

    translate(width / 20000, height / 2000);
//let rotation_amount =random(23, 24);
 //let rotate_by = map (x, 0,rotation_amount, 0, rotation_amount * yspeed);
    //rotate(rotate_by);
  
  
 ellipse(x,28,14)
  
  ellipse(89,y, 20)
  ellipse(89,y, 10)

  ellipse(x,yspeed, 20)



ellipse(x,y, 35)

ellipse(40,y, 35, 40)
ellipse(x,y, 60)
ellipse(x,24, 50)

triangle(x,34,34,y,x,y)
  
 if (x > 170 | x < -170){
    xspeed = -xspeed;
    fill(random(255), 100, 100, 200) 
  }

  if (y > 170 | y < -170){
    yspeed = -yspeed;
    fill(random(255), 100, 100, 200) 
  }

  



   

  // Rotate the coordinates.
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);



  box(35); 
    
 

ellipse(158,23,45,y)


ellipse(45,34,x,200)
ellipse(45,34,x,70)

triangle(x,124,x,12,100,y)
if (x > 333 | x < -185){

    
     
  }

  if (y > 184 | y < -185){
    
    
  }

rotateX(frameCount * 0.08);
  rotateY(frameCount * 0.07);

  // Draw the box.

  box(35);
  stroke(random(255),-100,255);
  frameRate(20); 


  y += yspeed; 
  x += xspeed;



  //let rotation_amount =random(23, 24);
 //let rotate_by = map (x, -5,rotation_amount, 3, xspeed * yspeed);
    //rotate(rotate_by);

  
  }



