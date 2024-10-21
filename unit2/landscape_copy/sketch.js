function setup(){
  createCanvas(400, 400)
  noLoop()
  noFill()
  noStroke()
}

function draw(){
  background(220)

  translate(50,50)
  rect(0,0,300,300)


  let from = color("blue")
  let to = color("orange")
  for (let x = 0; x < 300; x++){
    //fill("purple")
    let fill_color = lerpColor(from, to, x / 300)

    fill(fill_color)

    rect(0,x,300,1)
  }
}