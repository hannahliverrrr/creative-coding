//this code creates a series of cube grids that involve a 3D animation. 
//I took inspiration from the tesseract shape from Marvel, and our grid exercises from earlier in the semester.
//My explanation of my work is submitted separately.

//define variables and color list
let colors = [];
let spacing;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //whole tab canvas size, 3D rendering

  //defines unique tones for each grid
  for (let i = 0; i < 25; i++) {
    let color1 = color(random(0, 255), random(0, 255), random(0, 255));
    let color2 = color(random(0, 255), random(0, 255), random(0, 255));
    colors.push([color1, color2]);
  }
  
  //randomize spacing and size upon refreshing
  spacing = random(30, 50);
  size = random(10, 60);

  //used for grid rotation based on mouse positioning
  angleMode(DEGREES);
}

function draw() {
  background(0);

  //map mouse position across entire screen
  let angleX = map(mouseY, 0, height, -180, 180);
  let angleY = map(mouseX, 0, width, -180, 180);

  let gridSpacing = 400; //spacing between each cube grid thing

  //loop to create a 5 by 5 mega awesome grid
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let index = i * 5 + j; //calculates index for each grid position
      let color1 = colors[index][0]; //ensures unique color pairing
      let color2 = colors[index][1]; //same as above

      push();
      translate(-800 + i * gridSpacing, -800 + j * gridSpacing, 0); //position each grid within screen coordinates
      rotateX(angleX);
      rotateY(angleY * 0.2); //rotates grid based on mouse positioning
      rotateZ(angleY * 0.2); //same as above

      //creates actual loop, positions a 5 by 5 grid
      for (let x = -100; x <= 100; x += spacing) { 
        for (let y = -100; y <= 100; y += spacing) {
          for (let z = -100; z <= 100; z += spacing) {
            let t = map(x + y + z, -300, 300, 0, 1);
            let c = lerpColor(color1, color2, t); // creates gradient for stroke
            stroke(c);
            noFill();
            push();
            translate(x, y, z);
            box(size);
            pop();
          }
        }
      }
      pop();
    }
  }
}



//Hannah Livermon
//Creative Coding - Final Project
//Dr. Whalen


//For my final creative coding project, I wanted to build on the grid exercises we did in class, as well as explore the many facets of 3D animations. I enjoyed the different grid variations that everyone created in class, and it was cool to see how everyone came up with their work. Building off the tools from Unit 2 and exploring how 3D animations worked in p5.js, I came up with an idea that would generate a 3D square cube sequence. I wanted to see if I could bring the graphic to life. 
	//To do something like this, first I wanted to pull from artist inspiration online. I went through various 3D geometric art examples to see if something caught my eye. I looked through Artsnova, Reddit, and other smaller coding artist websites. The artists’ creations were very different from each other, but I was more drawn toward the grid and simple shape designs that people came up with. I wanted to test this out on my own since I felt comfortable with the grid assignment. I also needed to use WEBGL in my code to render in 3D graphics. I used to google and the p5.js reference page to understand this function since I had never heard of it before. 
	//Now I had solid information and inspiration to start actually coding. This was a trial-and-error process, especially using 3D coordinates. I started by making cubes and tweaking the code slightly to affect its position and size. The process started to remind me of the tesseract from Marvel (lol). Going off of that, the bright neon blue color of the tesseract got me thinking about creating some type of fluorescent color gradient. This idea had me playing around with the fill of the cubes in the grid and the stroke color. Eventually, I landed on just changing the stroke color. I changed the background to black to have the colors stand out more. I then messed around with how small I wanted the squares to be and how wide they would be spaced. It looked good, but it was simple, and it felt like it needed more to it. 
	//I then decided that instead of only having one cube, I would create more! Why have one when you could have 25 to be specific. I wanted my cubes to not only be in a grid themselves, but to be a part of a larger complex of some sort. With more trial and error and trying to figure out why my cubes were continuously changing colors for instance, I was finally able to get everything positioned correctly and oriented around my mouse movement. The final product displays rotational 3D grids in cube shape positioned evenly across the window. 
	//This final project has shown me there is a lot of room for adding complexities to assignments. At first, I was only able to generate a few grids, but after working at it, I was able to create something better than I anticipated. Coding this has taught me a lot about how many possibilities there are when creating things. Getting inspiration from other creators gave me key insight into new possibilities with what I could have made. I didn’t know a simple grid idea could have been made into something so interesting and complex. 
