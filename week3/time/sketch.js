let x_hour = 50;
let x_minute = 50;
let x_second = 50; 
let x_millis = 50;




function setup() {
  createCanvas(800, 1000);
  
}

function draw() {
  background(10);

textSize(25);
  //text("hour: " + hour(), 50, 50);
  //text("minute: " + minute(), 50, 75);
  //text("second: " + second(), 50, 100);
  //text("millisecond: " + millis(), 50, 125);



  push();
//lights of rooms turning on/people moving 

  //top square since it's hour 
  noStroke();
  fill(255,204,0, 180);
  x_hour = map(hour(),0,23, 50, 550);
  rect(x_hour,0,80, 200);

  pop();
//middle square since it's minute 
  push();
  noStroke();
  fill(255,204,0, 180);
  x_minute = map(minute(), 0, 59, 40, 450)
  rect(x_minute,300,80,200)

  
  pop();

  push();
  //bottom squares since they are seconds
  noStroke();
  fill(255,204,0, 180);
  x_second = map(second(), 0, 59, 10, 800)
  rect(x_second, 400, 50, 1000);
  pop();

  push();//brick building color and placement 
  fill("brown")
  rect(-10,590,1000,100)
  pop();

  push();
  fill('brown')
  //in order by size
rect(-10,990,1000,100)

  rect(-10,400,1000,100)

  rect(-10,800,1000,100)


  rect(-10,200,1000,100)

  rect(-10,0,1000,100)
    

  pop();
push();
stroke("grey")
//60 secs room
strokeWeight(4)
line(175,500,175,600);
line(20,500,20,590);
line(344,500,344,590);
line(120,500,120,590);
line(228,500,228,590);
line(285,500,285,590);
line(70,500,70,590);
line(400,500,400,590);
line(450,500,450,590);
line(500,500,500,590);
line(550,500,550,590)
line(600,500,600,590);
line(670,500,670,590);
line(760,500,760,590);
line(712,500,712,590);
line(820,500,820,590);
line(600,500,600,590);
line(870,500,870,590);
line(670,500,670,590);



line(190,690,190,800);
line(40,690,40,800);
line(360,690,360,800);
line(140,690,140,800);
line(240,690,240,800);
line(300,690,300,800);
line(90,690,90,800);
line(420,690,420,800);
line(480,690,480,800);
line(530,690,530,800);
line(580,690,580,800)
line(630,690,630,800);
line(670,690,670,800);
line(780,690,780,800);
line(750,690,750,800);
line(820,690,820,800);
line(800,690,800,800);
line(850,690,850,800);
line(720,690,720,800);


line(780,300,780,400);
//minutes room (by counted by 10's)
line(20,300,20,400);
line(160,300,160,400);
line(240,300,240,400);
line(320,300,320,400);
line(400,300,400,400);
line(480,300,480,400);
line(550,300,550,400);
line(630,300,630,400);
line(90,300,90,400);
line(710,300,710,400);
//12 hour rooms since its 24 hrs is broken into 2 halfs 
line(20,200,20,100);
line(160,200,160,100);
line(240,200,240,100);
line(320,200,320,100);
line(400,200,400,100);
line(480,200,480,100);
line(550,200,550,100);
line(630,200,630,100);
line(90,200,90,100);
line(710,200,710,100);
//60 secs continued
line(175,902,175,990);
line(20,902,20,990);
line(360,902,360,990);
line(120,902,120,990);
line(228,902,228,990);
line(320,902,320,990);
line(70,902,70,990);
line(400,902,400,990);
line(450,902,450,990);
line(500,902,500,990);
line(550,902,550,990)
line(600,902,600,990);
line(670,902,670,990);
line(760,902,760,990);
line(712,902,712,990);
line(820,902,820,990);
line(600,902,600,990);
line(870,800,870,990);
line(799,900,799,990);
line(670,500,670,590);
line(640,900,640,990);
line(280,902,280,990);







pop();

  


}