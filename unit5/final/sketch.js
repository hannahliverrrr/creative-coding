let color1;
let color2; 
let color3; 
let color4;

function setup() {
  createCanvas(1200, 800, WEBGL); // Increase canvas width to accommodate two animations
  color1 = color(random(0,100), random(100,255), random(100,255));
  color2 = color(random(0,100), random(100,255), random(100,255));
  color3 = color(random(150,255), random(100,200), random(0,100));
  color4 = color(random(150,255), random(100,200), random(0,100));
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let angleX = map(mouseY, 0, height, -180, 180);
  let angleY = map(mouseX, 0, width, -180, 180);

  // First animation
  push();
  translate(-300, 0, 0); // Move the first animation to the left half
  rotateX(angleX);
  rotateY(angleY * 0.2);
  rotateZ(angleY * 0.2);

  let spacing = 50;
  let size = 25;

  for (let x = -100; x <= 100; x += spacing) { // Adjust range for 5 by 5 by 5 grid
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color1, color2, t);
        stroke(c);
        noFill(); // Ensure the cubes are not filled
        push();
        translate(x, y, z);
        box(size);
        pop();
      }
    }
  }
  pop();

  // Second animation
  push();
  translate(300, 0, 0); // Move the second animation to the right half
  rotateX(angleX);
  rotateY(angleY * 0.2);
  rotateZ(angleY * 0.2);

  for (let x = -100; x <= 100; x += spacing) { // Adjust range for 5 by 5 by 5 grid
    for (let y = -100; y <= 100; y += spacing) {
      for (let z = -100; z <= 100; z += spacing) {
        let t = map(x + y + z, -300, 300, 0, 1);
        let c = lerpColor(color3, color4, t);
        stroke(c);
        noFill(); // Ensure the cubes are not filled
        push();
        translate(x, y, z);
        box(size);
        pop();
      }
    }
  }
  pop();
}