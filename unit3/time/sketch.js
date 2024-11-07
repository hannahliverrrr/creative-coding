//Thise code aims to demonstrate time through a rotating spiral that gradually changes color. 
//rotation speed matches seconds passed, the color change matches hours passed.
//the spiral also has a mesmorizing effect, helping to illustrate the concept of time more.

function setup() {
  createCanvas(800, 800);
  background(255);
  stroke(0);
  textSize(32); 
  fill(0); 
}

function draw() {
  background(255); 

  //60 shapes create
  let shapesToDraw = frameCount % 60; 
  //ellapsed time, resets after 6 hours
  let elapsedTime = millis() % 21600000; 

  //calculate hours, minutes, and seconds
  let hours = int(elapsedTime / 3600000);
  let minutes = int((elapsedTime % 3600000) / 60000);
  let seconds = int((elapsedTime % 60000) / 1000);

  //format the time as HH:MM:SS
  let timeString = nf(hours, 2) + ':' + nf(minutes, 2) + ':' + nf(seconds, 2); //found this on reference page and liked it better than text function: https://p5js.org/reference/p5/nf/

  //display the time in the corner to show that the loop is working and matching.
  text('Time: ' + timeString, 10, 40);

  for (let i = 0; i < shapesToDraw; i++) {
    push();
    translate(400, 400); 
    //animate rotation of shapes
    rotate(TWO_PI * i / 60);
    translate(-400, -400); 
    //calculate the color gradient
    let r, g, b;

    //This section is a gradient loop. Every hour from 1-6, the loop goes through the color wheel. The animation starts over after 6 hours.
    //first hour: red to orange
    if (elapsedTime < 3600000) { 
      r = map(i, 0, 59, 255, 255); 
      g = map(i, 0, 59, 0, 165);   
      b = map(i, 0, 59, 0, 0);     
      //second hour: orange to yellow
    } else if (elapsedTime < 7200000) { 
      r = map(i, 0, 59, 255, 255); 
      g = map(i, 0, 59, 165, 255); 
      b = map(i, 0, 59, 0, 0);     
      //third hour: yellow to green
    } else if (elapsedTime < 10800000) { 
      r = map(i, 0, 59, 255, 0);   
      g = map(i, 0, 59, 255, 255); 
      b = map(i, 0, 59, 0, 0);     
      //fourth hour: green to blue
    } else if (elapsedTime < 14400000) { 
      r = map(i, 0, 59, 0, 0);     
      g = map(i, 0, 59, 255, 0);   
      b = map(i, 0, 59, 0, 255);   
      //fifth hour: blue to purple
    } else if (elapsedTime < 18000000) { 
      r = map(i, 0, 59, 0, 128);   
      g = map(i, 0, 59, 0, 0);     
      b = map(i, 0, 59, 255, 128); 
    } else { //sixth hour: purple to pink
      r = map(i, 0, 59, 128, 255); 
      g = map(i, 0, 59, 0, 192);   
      b = map(i, 0, 59, 128, 203); 
    }
    //keep the shapes a little transparent to see gradient
    fill(r, g, b, 150); 

    //create the shape 
    beginShape();
    vertex(400, 200); // Top point
    bezierVertex(500, 300, 500, 500, 400, 600); // Right curve
    vertex(400, 600); // Bottom point
    bezierVertex(300, 500, 300, 300, 400, 200); // Left curve
    endShape(CLOSE);

    pop();
  }
}