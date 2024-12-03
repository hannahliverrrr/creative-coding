//this code is supposed to depict a city skyline with mountains in the background. Similar to salt lake city's skyline.

let rockX = [];
let rockY = [];
let rockSize = [];
let buildingX = [];
let buildingWidth = [];
let buildingHeight = [];

function setup() {
  createCanvas(800, 400);
  generateRocks(10); //create 10 rocks
  generateBuildings(5); //create 5 buildings
}

function draw() {
  background(135, 206, 235); //blue sky
  
  drawMountains();
  drawRocks();
  drawBuildings();
}

function drawMountains() {
  fill(34, 139, 34); //green color for mountains
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x++) {
    let y = map(noise(xoff), 0, 1, height - 250, height - 100);
    vertex(x, y);
    xoff += 0.005; //smoothness of the mountains
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function generateRocks(numRocks) {
  for (let i = 0; i < numRocks; i++) {
    rockX[i] = random(width);
    rockY[i] = random(height - 15, height - 0); //rock positioning
    rockSize[i] = random(10,20); //random rock size
    }
}

function drawRocks() {
  fill(100, 100, 100); // Brown color for rocks
  for (let i = 0; i < rockX.length; i++) {
    ellipse(rockX[i], rockY[i], rockSize[i], rockSize[i]);
  }
}

function generateBuildings(numBuildings) {
  for (let i = 0; i < numBuildings; i++) {
    let x = random(width);
    let widthBuilding = random(30, 50);
    let heightBuilding = random(100, 150); // Random height for the buildings
    buildings.push({x: x, width: widthBuilding, height: heightBuilding});
  }
}

function drawBuildings() {
  fill(169, 169, 169); // Grey color for buildings
  for (let building of buildings) {
    rect(building.x, height - building.height, building.width, building.height);
  }
}