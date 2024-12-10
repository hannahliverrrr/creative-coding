//this assignment always reminded me of monsters inc characters, 
//so I made the one that has three eyes - his name is Fungus and he's 
//one of the workers at the door factory I think I can't remember


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200, 55, 60);//red color for skin as background

  //eye positioning
  let eyeX1 = width / 2 - 150;
  let eyeX2 = width / 2;
  let eyeX3 = width / 2 + 150;
  let eyeY = height / 2;

  //calculate the angles of the eyes to follow the mouse
  let angle1 = calculateAngle(mouseX, mouseY, eyeX1, eyeY);
  let angle2 = calculateAngle(mouseX, mouseY, eyeX2, eyeY);
  let angle3 = calculateAngle(mouseX, mouseY, eyeX3, eyeY);

  //draw the eyes based on positioning above
  drawEye(eyeX1, eyeY, angle1);
  drawEye(eyeX2, eyeY, angle2);
  drawEye(eyeX3, eyeY, angle3);
}

function drawEye(x, y, angle) {
  //eye features and their dimensions
  let eyeSize = 100;
  let pupilSize = 50;
  let pupilOffset = eyeSize / 4;
  
  //white part of the eye
  fill(255); 
  ellipse(x, y, eyeSize, eyeSize);
  
  //pupil positioning
  let pupilX = x + cos(angle) * pupilOffset;
  let pupilY = y + sin(angle) * pupilOffset;
  
  //draw the pupil
  fill(80, 160, 250); 
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
}

function calculateAngle(mouseX, mouseY, x, y) {
  return atan2(mouseY - y, mouseX - x);
}
