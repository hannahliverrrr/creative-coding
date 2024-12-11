//define color variables
let color1;
let color2; 
let color3; 
let color4;
let color5;
let color6;
let color7;
let color8;
let spacing;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //whole tab canvas size

  //defines cool tones for first grid
  color1 = color(random(0,100), random(100,255), random(100,255));
  color2 = color(random(0,100), random(100,255), random(100,255));
  //defines warm tones for second grid
  color3 = color(random(150,255), random(100,200), random(0,100));
  color4 = color(random(150,255), random(100,200), random(0,100));
  //defines unique tones for third grid
  color5 = color(random(100,255), random(0,100), random(100,255));
  color6 = color(random(100,255), random(0,100), random(100,255));
  //defines unique tones for fourth grid
  color7 = color(random(100,255), random(100,255), random(0,100));
  color8 = color(random(100,255), random(100,255), random(0,100));
  
  //randomize spacing and size upon refreshing
  spacing = random(30,50);
  size = random(10,60);

  //used for grid rotation based on mouse positioning
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //map mouse position across entire tab
  let angleX = map(mouseY, 0, height, -180, 180);
  let angleY = map(mouseX, 0, width, -180, 180);

  //first grid animation
  push();
  translate(-300, -200, 0); //first grid positioning on canvas
  rotateX(angleX);
  rotateY(angleY * 0.2); //rotates grid based on mouse positioning
  rotateZ(angleY * 0.2); //same as above

  //creates actual loop, positions a 5 by 5 grid
  for (let x = -100; x <= 100; x += spacing) { 
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color1, color2, t); //creates gradient for stroke
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

  //second grid animation
  push();
  translate(300, -200, 0); //positions grid on second half of the canvas
  rotateX(angleX);
  rotateY(angleY * 0.1); //rotates grid based on mouse positioning
  rotateZ(angleY * 0.1); //same as above

  //same as first grid, creates the loop to generate the grid
  for (let x = -100; x <= 100; x += spacing) {
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color3, color4, t); //creates gradient for stroke
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

  //third grid animation
  push();
  translate(-300, 200, 0); //positions grid below the first grid
  rotateX(angleX);
  rotateY(angleY * 0.2); //rotates grid based on mouse positioning
  rotateZ(angleY * 0.2); //same as above

  //same as first grid, creates the loop to generate the grid
  for (let x = -100; x <= 100; x += spacing) { 
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color5, color6, t); //creates gradient for stroke
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

  //fourth grid animation
  push();
  translate(300, 200, 0); //positions grid below the second grid
  rotateX(angleX);
  rotateY(angleY * 0.1); //rotates grid based on mouse positioning
  rotateZ(angleY * 0.1); //same as above

  //same as first grid, creates the loop to generate the grid
  for (let x = -100; x <= 100; x += spacing) {
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color7, color8, t); //creates gradient for stroke
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