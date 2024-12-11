

//define color variables
let color1;
let color2;

function setup() {
  createCanvas(600, 600, WEBGL); //call in 3D mode

  //generate random colors for the gradient below
  color1 = color(random(255), random(255), random(255)); 
  color2 = color(random(255), random(255), random(255)); 
  //used for grid rotation by cursor position
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //maps out mouse position
  let angleX = map(mouseY, 0, height, -180, 180);
  let angleY = map(mouseX, 0, width, -180, 180);

  //rotate the grid with the mouse movement
  rotateX(angleX);
  rotateY(angleY * .2); //controls rotation sensitivity so it's not so speedy
  rotateZ(angleY * .2); //same thing as above - don't want it rotating so fast

  let spacing = 50;
  let size = 40;

  for (let x = -150; x <= 150; x += spacing) {
    for (let y = -150; y <= 150; y += spacing) {
      for (let z = -150; z <= 150; z += spacing) {
        let t = map(x + y + z, -450, 450, 0, 1);
        let c = lerpColor(color1, color2, t);
        stroke(c);
        noFill();
        push();
        translate(x, y, z);
        box(size);
        pop();
      }
    }
  }
}