function setup() {
  createCanvas(800, 800);
  textSize(32); 
  fill(0); 
}

function draw() {
  background(255); 

  let shapesToDraw = frameCount % 60; //framecount to draw shapes for milliseconds

  // get the current time
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // calculate the elapsed time in milliseconds
  let elapsedTime = (hours * 3600000) + (minutes * 60000) + (seconds * 1000);

  // format the time as HH:MM:SS
  let timeString = nf(hours, 2) + ':' + nf(minutes, 2) + ':' + nf(seconds, 2); 
  text('Time: ' + timeString, 10, 40);

  //draw the shape and loop it, adding the colors
  for (let i = 0; i < shapesToDraw; i++) {
    push();
    translate(400, 400); 
    rotate(TWO_PI * i / 60);
    translate(-400, -400); 

    let [r, g, b] = getColor(i);

    fill(r, g, b, 150); 

    //shape dimensions
    beginShape();
    vertex(400, 200); 
    bezierVertex(500, 300, 500, 500, 400, 600); 
    vertex(400, 600); 
    bezierVertex(300, 500, 300, 300, 400, 200); 
    endShape(CLOSE);

    pop();
  }
}

//gradient to match new shapes being drawn
function getColor(i) {
  let r, g, b;
  if (i < 10) { // red to orange
    r = 255;
    g = map(i, 0, 9, 0, 165);
    b = 0;
  } else if (i < 20) { // orange to yellow
    r = 255;
    g = map(i, 10, 19, 165, 255);
    b = 0;
  } else if (i < 30) { // yellow to green
    r = map(i, 20, 29, 255, 0);
    g = 255;
    b = 0;
  } else if (i < 40) { // green to blue
    r = 0;
    g = map(i, 30, 39, 255, 0);
    b = map(i, 30, 39, 0, 255);
  } else if (i < 50) { // blue to purple
    r = map(i, 40, 49, 0, 128);
    g = 0;
    b = 255;
  } else { // purple
    r = 128;
    g = 0;
    b = map(i, 50, 59, 255, 128);
  }
  return [r, g, b];
}