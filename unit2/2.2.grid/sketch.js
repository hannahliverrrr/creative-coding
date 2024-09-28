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
    strokeWeight(random(1,20))
    stroke(random(0,255),random(0,255),random(0,255))
    fill(random(0,255),random(0,255),random(0,255))
    //draw the circle
    rect(x*90,y*90,random(10-150))
    pop()
  }
  }

}