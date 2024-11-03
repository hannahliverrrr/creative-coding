function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(235, 255, 0);

  //coordinates for the center of the eyes
  let eyeX = width / 2 - 100;
  let eyeY = height / 2;
  let eyeX2 = width / 2 + 100;

  //calculate the angle for the eyes to follow the mouse
  let angle1 = atan2(mouseY - eyeY, mouseX - eyeX);
  let angle2 = atan2(mouseY - eyeY, mouseX - eyeX2);

  // Draw the first eye
  drawEye(eyeX, eyeY, angle1);

  // Draw the second eye
  drawEye(eyeX2, eyeY, angle2);
}

function drawEye(x, y, angle) {
  // Eye properties
  let eyeSize = 100;
  let pupilSize = 50;
  let pupilOffset = eyeSize / 4;

  // Draw the white part of the eye
  fill(255);
  ellipse(x, y, eyeSize, eyeSize);

  // Calculate the pupil position
  let pupilX = x + cos(angle) * pupilOffset;
  let pupilY = y + sin(angle) * pupilOffset;

  // Draw the pupil
  fill(0);
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
}