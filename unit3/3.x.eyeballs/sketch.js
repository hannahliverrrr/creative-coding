function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(235, 255, 0); 
  
  //coordinates for center of eyes
  let eyeX = width / 2 - 100;
  let eyeY = height / 2;
  let eyeX2 = width / 2 + 100;

  //calculate angle for eyes to follow mouse
  let angle1 = atan2(mouseY - eyeY, mouseX - eyeX);
  let angle2 = atan2(mouseY - eyeY, mouseX - eyeX2);

  //draw first eye
  drawEye(eyeX, eyeY, angle1);

  //draw second eye
  drawEye(eyeX2, eyeY, angle2);
}

function drawEye(x, y, angle) {
  //eye dimensions
  let eyeSize = 100;
  let pupilSize = 50;
  let pupilOffset = eyeSize / 4;

  //draw the white part of eye
  fill(255);
  ellipse(x, y, eyeSize, eyeSize);

  //calculate pupil position
  let pupilX = x + cos(angle) * pupilOffset;
  let pupilY = y + sin(angle) * pupilOffset;

  //draw pupil
  fill(0);
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
}