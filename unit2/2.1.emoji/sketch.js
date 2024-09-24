function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
CSSNumericValue(200,200,100)

  rectMode(CENTER);
  <script>
  const canvas = document.getElementById('smileyCanvas');
  const ctx = canvas.getContext('2d');

  // Draw the face
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, Math.PI * 2, true); // Outer circle
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.stroke();

  // Draw the eyes
  ctx.beginPath();
  ctx.arc(70, 70, 10, 0, Math.PI * 2, true);  // Left eye
  ctx.arc(130, 70, 10, 0, Math.PI * 2, true); // Right eye
  ctx.fillStyle = 'black';
  ctx.fill();

  // Draw the mouth
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.stroke();
</script>
}