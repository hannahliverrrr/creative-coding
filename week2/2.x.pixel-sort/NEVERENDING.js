
function setup() { 
   createCanvas(100, 100);
  noStroke();
  fill(0);

} 

function draw() { 

 
   

    background(204);
  if (mouseIsPressed == true) {
    push();
    fill(255,0,0)
   text('I', 30, 50)
   text('See', 30, 60)
   text('You', 30, 70)

   pop();
    fill(0, 0, 0, 20); // White

  }
  else {
    push();
    stroke(100,200,50)
    strokeWeight(1.5)
    textSize(18)
    fill('yellow');
     text('Click', 28,42)
     text('Here!', 28,70)
          pop();
    fill(50,60,100, 180);   // Black

   

  }

  rect(25, 25, 50, 50);


  





}

