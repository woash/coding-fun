let angle = 0;
let isRotating = true; 

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background('black');

  for (let i = -300; i < width; i += 100) {
    for (let j = -300; j < height; j += 100) {
      
      push();
      translate(-300, -300, 0);
      line(i, 0, i, 600);
      line(0, j, 600, j);
      pop();


      push();
      if (isRotating) rotateZ(angle); 
      translate(i, j, 0);
      normalMaterial();
      torus(30, 10+ mouseX/10);
      pop();
      
      for (let k = 2; k <= 2; k += 100) { 
      //   for (let l = -30; l <= 30; l += 30) {
      push();
      if (isRotating) rotateZ(angle); 
      translate(i + k, j, 0); 
      normalMaterial();
          torus(10, 4+ mouseX/10); 
          pop();
        } 
      
    }
  }


  if (isRotating) {
    angle += 0.01;
  }
}


function mouseClicked() {
  isRotating = !isRotating;
}

function keyPressed() {

  if (key == 's') {
    save("mySketch.png");
  }
}