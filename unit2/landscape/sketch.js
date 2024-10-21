let rocks = [];
let buildings = [];

function setup() {
  createCanvas(800, 400);
  generateRocks(20); // Generate 20 rocks
  generateBuildings(10); // Generate 10 buildings
}

function draw() {
  background(135, 206, 235); // Blue sky
  
  drawMountains();
  drawRocks();
  drawBuildings();
}

function drawMountains() {
  fill(34, 139, 34); // Green color for mountains
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x++) {
    let y = map(noise(xoff), 0, 1, height - 250, height - 100);
    vertex(x, y);
    xoff += 0.005; // Adjust this value to change the smoothness of the mountains
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function generateRocks(numRocks) {
  for (let i = 0; i < numRocks; i++) {
    let x = random(width);
    let y = random(height - 50, height - 0); // Random y position within the mountain area
    let size = random(10, 20); // Random size for the rocks
    rocks.push({x: x, y: y, size: size});
  }
}

function drawRocks() {
  fill(139, 69, 19); // Brown color for rocks
  for (let rock of rocks) {
    ellipse(rock.x, rock.y, rock.size, rock.size);
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