function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}
function draw() {
  background(220);
  translate(150,100)
//create 8 by 8 grid loop
  for(let x=1; x<9; x+=1){
    for (let y=1; y<9; y +=1){
  //set parameters
  push()
      translate(x*20,y*20)
      strokeWeight(random(7,10))
      stroke(random(100,120),random(10,15),random(22,25))
      fill(random(100,155),random(0,55),random(0,55),random(50,100))
      rect(x*90,y*90,random(75,90))
      pop()

    push()
    translate(x*20,y*20)
    strokeWeight(random(7,10))
    stroke(random(215,240),random(250,260),random(300,315))
    fill(random(195,210),random(220,230),random(270,275))
    //draw the circle
    circle(x*100,y*100,random(35,75))
    pop()


    
  }
  }

}