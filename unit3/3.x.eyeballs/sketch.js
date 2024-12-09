//this assignment always reminded me of monsters inc characters, 
//so I made the one that has three eyes - his name is Fungus and he's 
//one of the workers at the door factory I think I can't remember


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(250, 75, 80);//red color for skin hue

  //center the eyes
  let eyeX1 = width / 2 - 150;
  let eyeX2 = width / 2;
  let eyeX3 = width / 2 + 150;
  let eyeY = height / 2;

  // Calculate angle for eyes to follow mouse
  let angle1 = calculateAngle(mouseX, mouseY, eyeX1, eyeY);
  let angle2 = calculateAngle(mouseX, mouseY, eyeX2, eyeY);
  let angle3 = calculateAngle(mouseX, mouseY, eyeX3, eyeY);

  // Draw eyes
  drawEye(eyeX1, eyeY, angle1);
  drawEye(eyeX2, eyeY, angle2);
  drawEye(eyeX3, eyeY, angle3);
}

function drawEye(x, y, angle) {
  // Eye dimensions
  let eyeSize = 100;
  let pupilSize = 50;
  let pupilOffset = eyeSize / 4;
  
  // Draw the white part of eye
  fill(255); 
  ellipse(x, y, eyeSize, eyeSize);
  
  // Calculate pupil position
  let pupilX = x + cos(angle) * pupilOffset;
  let pupilY = y + sin(angle) * pupilOffset;
  
  // Draw pupil
  fill(80, 160, 250); // pupil color to blue
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
}

function calculateAngle(mouseX, mouseY, x, y) {
  let d = dist(mouseX, mouseY, x, y);
  let ang;
  if (mouseX > x) {
    ang = asin((mouseY - y) / d);
  } else {
    ang = (PI / 2 - asin((mouseY - y) / d)) + PI / 2;
  }
  return ang;
}