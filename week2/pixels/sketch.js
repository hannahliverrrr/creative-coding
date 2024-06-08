
let img;
let sampleX = 12;
let sampleY = 14;



function preload(){
	img = loadImage('https://stephenmcc48.github.io/creative-coding/week2/pixels/GreenLantern.jpg');
}

function setup() {
  createCanvas (900, 980);
  img.loadPixels();
  
}

function draw() {
  background('forestgreen');
for (let lineX = 0; lineX < 1; lineX += 1) {
    for (let lineY = 0; lineY < 2; lineY += 1) {
 
  for (let x = 0; x < 1; x += 1) {
    for (let y = 0; y < 1; y += 1) {

      
   

      push();

      
    
    translate(x * 100, y * 100);

    
    stroke(122,34,33, 200);
    strokeWeight(5)
   
    

    stroke(12,23,222);
    



    


      pop();

strokeWeight( random(3, 2)  );    
stroke(random(0, 255),120,255);
    frameRate(7)
 

translate(100, 100);
//image(img, -101, -120);


for (let x = -0; x <= img.width; x += sampleX){
  for (let y = 0; y <= img.height; y += sampleY){
    var index = (x + y * img.width) * 4;
    var r = img.pixels[index + 0];
    var g = img.pixels[index + 1];
    var b = img.pixels[index + 2];

    fill(r,g,b);
    rect(x,y,sampleX,sampleY);

          }
        }
      }
    }
  }
}
}