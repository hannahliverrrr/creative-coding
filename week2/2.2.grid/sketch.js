function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background("mediumpurple");
  for (let x = 0; x < 12; x += 1) {
    for (let y = 0; y < 12; y += 1) {

    push(); 
    
    translate(x * 100, y * 100);

    arc(100, 56, 0 ,22, random(0,360 ), random(0, 360) ); 

    strokeWeight(2.5)
    stroke(random(0, 255),180,221);

    fill(random(0,255), 77, 220);
    rect(40,50,50,30);

    strokeWeight(1)
    fill(random(0,255), 190, 75)
    ellipse(120,130,10);

    stroke( random(0, 255), 66, 127);
    strokeWeight(2.3)
    line(120, 280, 120, 5);

    strokeWeight( random(1.5, 2.4)  );
    stroke(random(0, 123),89,56)
    fill(random(0,255), 1, 125)
    triangle(34, 60, 65, 72, 48, 30)
    strokeWeight(random(2.6, 3.7 )  );
    stroke(random(56, 234),60,200)
    fill(random(0,255), 220, 60)
    triangle(27, 50, 64, 60, 48, 30)
    
    strokeWeight(4)
    stroke(random(0, 255), 200, 90  );
    line(54, 92, 104, 54)
fill(random(0,255), 23, 178);
stroke(random(0,255), 255, 190);
arc(67, 12, 33 ,25, random(0,234 ), random(0, 120) ); 





    pop(); 
    }
  } 
}
