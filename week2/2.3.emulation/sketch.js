//Tried to emulate 196 Carrés (Ref V) (1979) by Vera Molnár


let square_size= 40;

let cushion =4;

let cols=14;

let rows=18;

function setup() {
  createCanvas(600, 800);
  noLoop();
}


function draw() {
  background('#D8A90D');
  
  translate(38,38);
  
  rectMode(CENTER);
  
  for(let x=0; x<(square_size* cols); x+= square_size){
    for(let y=0; y<(square_size* cols); y+= square_size){
    
    push();
      
      translate(x,y);
      
  rect(0 + cushion, 0+ cushion, square_size - cushion, square_size - cushion)
      
      
      pop();
      
    
  }
  }
  
  
  

  
 
  
}
