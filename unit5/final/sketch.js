//define color variables
let color1;
let color2; 
let color3; 
let color4;

function setup() {
  createCanvas(1200, 800, WEBGL); // increased canvas width to accommodate two animations

  //defines cool tones for first grid
  color1 = color(random(0,100), random(100,255), random(100,255));
  color2 = color(random(0,100), random(100,255), random(100,255));
  //defines warm tones for second grid
  color3 = color(random(150,255), random(100,200), random(0,100));
  color4 = color(random(150,255), random(100,200), random(0,100));
  //used for grid rotation based on mouse positioning
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //map mouse position across entire tab
  let angleX = map(mouseY, 0, height, -180, 180);
  let angleY = map(mouseX, 0, width, -180, 180);

  //first grid
  push();
  translate(-300, 0, 0);//first grid positioning on canvas
  rotateX(angleX);
  rotateY(angleY * 0.2);//rotates grid based on mouse positioning
  rotateZ(angleY * 0.2);//same as above

  let spacing = 50;
  let size = 25;

  //creates actual loop, positions a 5 by 5 grid
  for (let x = -100; x <= 100; x += spacing) { 
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color1, color2, t);//creates gradient for stroke
        stroke(c);
        noFill();
        push();
        translate(x, y, z);
        box(size);
        pop();
      }
    }
  }
  pop();

  //second grid
  push();
  translate(300, 0, 0); //positions grid on second half of the canvas
  rotateX(angleX);
  rotateY(angleY * 0.2);//rotates grid based on mouse positioning
  rotateZ(angleY * 0.2);//same as above

  //same as first grid, creates the loop to generate the grid
  for (let x = -100; x <= 100; x += spacing) {
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color3, color4, t);//creates gradient for stroke
        stroke(c);
        noFill(); 
        push();
        translate(x, y, z);
        box(size);
        pop();
      }
    }
  }
  pop();
}