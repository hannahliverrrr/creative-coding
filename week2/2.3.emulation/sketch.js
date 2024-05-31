let square_size = 78;
let cols = 3;
let rows = 3;
let cushion = 10;
noLoop();

function setup() {
  createCanvas(275, 275);
  noLoop();
}

function draw() {
  background(235);

  translate(44,60)
  noLoop();

  rectMode(CENTER);
  angleMode(DEGREES);

for (let x = 0; x < (square_size * cols) ; x += square_size){
  for (let y = 0; y < (square_size * rows); y += square_size){

    push(); 
    noLoop();

    translate(x,y);

    fill(224, 102, 91, 220);

    strokeWeight(0);

    let rotation_amount =random(54.2, 24);


    let rotate_by = map (x, 0,rotation_amount, 0, rows * square_size);
    rotate(rotate_by);

    let x_offset = random(24,0) //(-111, 111)
    let y_offset = random(12,30) //(20,-20)

    let x_shift = map(x,0,rows * rows,0, y_offset);
    let y_shift = map(y,0,cols * square_size,0, x_offset);




    rect(x_offset,5,square_size - cushion,square_size - cushion)

    console.log('hey');

    pop();

    }
  }

}