//define variables
let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_mil = 50;

let currentSecond = 0;
let milliFreeze = 0;
let mm;

function setup(){
  createCanvas(600,400);
}

function draw(){
  //determine interpolation based on seconds
  let secondFactor = map(second(), 0, 59, 0, 1);
  //change color from yellow to blue
  let bgColor = lerpColor(color(255, 255, 0), color(0, 0, 255), secondFactor);
  
  background(bgColor);

 
  //textual reference of the time
  textSize(25);
  text("hour: " + hour(),50, 50);
  text("minute: " + minute(), 50, 75);
  text("second: " + second(), 50, 100);
  text("millisecond: " + mm, 50, 125);

  if (currentSecond != second()){
    currentSecond = second();

    milliFreeze = millis();
  }

  mm = millis() - milliFreeze;

  push();
  //draw barriers of animation
  line(50, 150, 50, 350);
  line(550,150,550,350);
  pop();

  //draw the circles
  push();
  noStroke();
  fill("white");

  //assign value to xhour using map
  x_hour = map(hour(), 0, 23, 50, 550);
  circle(x_hour, 180, 40);
  //assign value to xminute using map
  x_minute = map(minute(), 0, 59, 50, 550);
  circle(x_minute, 240, 40);
  //assign value to xsecond using map
  x_second = map(second(), 0, 59, 50, 550);
  circle(x_second, 300, 40);
  //assign value to xmil using map
  x_mil = map(mm, 0, 999, 50, 550);
  circle(x_mil, 350, 20);
  pop();
  
}
