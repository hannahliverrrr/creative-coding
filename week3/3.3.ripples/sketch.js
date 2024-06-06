let rings = [];

function preload(){
  cursorImg = loadImage("https://static.vecteezy.com/system/resources/previews/019/017/599/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-goblin-free-png.png")
}
function setup() {
  createCanvas(800, 800);
  noCursor();
}

function mouseDragged(){
  
 rings.push (new Ring(mouseX, mouseY)); 
}

function draw() {
  background(0, 0, 0);
  image(cursorImg, mouseDragged);

  for (let x = 0; x < 9; x += 1) {
    for (let y = 0; y < 9; y += 1) {
      push();


translate(x * 87, y * 86);
      strokeWeight(9)
    stroke(random(0, 255),180,221);

    fill(34, 77, 220);

      rect(7,5,90,100);
      pop();
    }
  }

  for (let i = 0; i < rings.length; i++) {
    rings[i].display();
    rings[i].grow();
    rings[i].fade()
    
    if (rings[i].apha< 0){
    rings.splice(i,4);

    cursor(CROSS);
    }
  }
}



class Ring {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.d = 4;
    this.alpha=220
  }

  display() {
    noFill();
    strokeWeight(5);
    stroke(random(0,255), 145, 220, this.alpha);
    circle(this.x, this.y, this.d);
  }

  grow() {
    this.d += random(1.5,3);
  }
  
  fade() {
    this.alpha -=random(1,6)
}
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)
}

