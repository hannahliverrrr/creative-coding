function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}
function draw() {
  background(220);

  for(let x=1; x<9; x+=1){
    for (let y=1; y<9; y +=1){
    circle(x*60,y*60,50)
  }
  }

}