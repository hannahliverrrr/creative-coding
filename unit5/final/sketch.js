//define variables and color list
let colors = [];
let spacing;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //whole tab canvas size, 3D rendering

  //defines unique tones for each grid
  for (let i = 0; i < 25; i++) {
    let color1 = color(random(0, 255), random(0, 255), random(0, 255));
    let color2 = color(random(0, 255), random(0, 255), random(0, 255));
    colors.push([color1, color2]);
  }
  
  //randomize spacing and size upon refreshing
  spacing = random(30, 50);
  size = random(10, 60);

  //used for grid rotation based on mouse positioning
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //map mouse position across entire screen
  let angleX = map(mouseY, 0, height, -180, 180);
  let angleY = map(mouseX, 0, width, -180, 180);

  let gridSpacing = 400; //spacing between each cube grid thing

  //loop to create a 5 by 5 mega awesome grid
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let index = i * 5 + j; //calculates index for each grid position
      let color1 = colors[index][0]; //ensures unique color pairing
      let color2 = colors[index][1]; //same as above

      push();
      translate(-800 + i * gridSpacing, -800 + j * gridSpacing, 0); //position each grid within screen coordinates
      rotateX(angleX);
      rotateY(angleY * 0.2); //rotates grid based on mouse positioning
      rotateZ(angleY * 0.2); //same as above

      //creates actual loop, positions a 5 by 5 grid
      for (let x = -100; x <= 100; x += spacing) { 
        for (let y = -100; y <= 100; y += spacing) {
          for (let z = -100; z <= 100; z += spacing) {
            let t = map(x + y + z, -300, 300, 0, 1);
            let c = lerpColor(color1, color2, t); // creates gradient for stroke
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
  }
}