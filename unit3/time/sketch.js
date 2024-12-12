
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES); //call in DEGREES for rotating the pedals
}

function draw() {
  background(255); 

  let now = new Date(); //pull the current time
  let seconds = now.getSeconds(); //pulls cureent seconds
  let minutes = now.getMinutes(); //pulls current minutes
  let hours = now.getHours(); //pulls current hours

  //draws the hours flower loop
  translate(width / 2, height / 6); //positions flower
  for (let i = 0; i < hours; i++) {
    push();
    rotate(i * 360 / 24); //this rotates the pedal and divides it into 24 parts for hours
    let [r, g, b] = getColor(i, 24);
    fill(r, g, b, 150); //applies the gradient color
    drawPetal();
    pop();
  }

  //draws minute loop
  translate(0, height / 3); 
  for (let i = 0; i < minutes; i++) {
    push();
    rotate(i * 360 / 60); //rotates pedals and divides by 60 minutes
    let [r, g, b] = getColor(i, 60);
    fill(r, g, b, 150); 
    drawPetal();
    pop();
  }

  //seconds loop
  translate(0, height / 3); 
  for (let i = 0; i < seconds; i++) {
    push();
    rotate(i * 360 / 60); //rotates pedals and divides by 60 seconds
    let [r, g, b] = getColor(i, 60);
    fill(r, g, b, 150); 
    drawPetal();
    pop();
  }
}
//actual dimensions of pedals
function drawPetal() {
  beginShape();
  vertex(0, -100);
  bezierVertex(50, -50, 50, 50, 0, 100);
  bezierVertex(-50, 50, -50, -50, 0, -100);
  endShape(CLOSE);
}

//color gradient 
function getColor(i, total) {
  let r, g, b;
  if (i < total / 6) { //red to orange
    r = 255;
    g = map(i, 0, total / 6 - 1, 0, 165);
    b = 0;
  } else if (i < 2 * total / 6) {  //orange to yelolow
    r = 255;
    g = map(i, total / 6, 2 * total / 6 - 1, 165, 255);
    b = 0;
  } else if (i < 3 * total / 6) { //yellow to green
    r = map(i, 2 * total / 6, 3 * total / 6 - 1, 255, 0);
    g = 255;
    b = 0;
  } else if (i < 4 * total / 6) { //green to blue
    r = 0;
    g = map(i, 3 * total / 6, 4 * total / 6 - 1, 255, 0);
    b = map(i, 3 * total / 6, 4 * total / 6 - 1, 0, 255);
  } else if (i < 5 * total / 6) { //blue to purple
    r = map(i, 4 * total / 6, 5 * total / 6 - 1, 0, 128);
    g = 0;
    b = 255;
  } else { //purple
    r = 128;
    g = 0;
    b = map(i, 5 * total / 6, total - 1, 255, 128);
  }
  return [r, g, b];
  
}