//Name = Aashita Verma

var x
let y
let size = 200
let eyesize
let blush
let blushalpha
let typesize = 20
let r
let g
let b
let phrase
    
function setup() {
  createCanvas(400, 400);
   typesize = 20
   r = 250
   g = 117 
   b = 11
  phrase = 'Dont tickle me'
   angleMode(DEGREES);
}

function draw() {
  background(r,g,b);
  x= width/2
  y= height/2
  size = mouseX
  eyesize = mouseX/8
  blush = mouseX/11
  blushalpha = mouseX/2
 
  //Body 
    push()
      noStroke()
      fill('rgb(255,255,255)')
      circle (x,y,200)
      circle (x,y,size);
      strokeWeight(10)
    pop()
  //Eyes
  push()
      fill('black')
      ellipse(170, 180, 10, 10)
      ellipse(230, 180, 10, 10)
      ellipse(170, 180, 10, eyesize)
      ellipse(230, 180, 10, eyesize)
      //line(180,250,220,250)
      rect(195,200,20,2)
      rect(195,200,20,eyesize)
  pop()
  
//blush left
  push()
    noStroke()
    translate (140,200)
    rotate(30);
    fill (255, 0, 0,30)
    ellipse(0,0,30,20)
  pop()
  
  push()
    noStroke()
    translate (140,200)
    rotate(30);
    fill (255, 0, 0,blushalpha)
    ellipse(0,0,blush,blush)
  pop()
  
//blush right
  push()
    noStroke()
    translate (260,200)
    rotate(-30);
    fill (255, 0, 0,30)
    ellipse(0,0,30,20)
  pop()
  
  push()
    noStroke()
    translate (260,200)
    rotate(-30);
    fill (255, 0, 0,blushalpha)
    ellipse(0,0,blush,blush)
  pop()
  
//bowtie
  push()
    noStroke()
    fill (r,b,g)
    ellipse(180,300,40,40)
    ellipse(220,300,40,40)
  pop()
  
  
  push()
    noStroke()
    fill ('black')
    ellipse(200,300,20,20)
  pop()
  
  
  //Hair
  push()
     noFill();
     //arc(200, 200, 70, 70, 0, QUARTER_PI);
  pop()
  
  push();
  noStroke();
  fill('black');
  textSize(typesize);
  text(phrase, mouseX, mouseY);
  pop();
  

  //mouse coordinate tracker 
 // push()
   // fill('red')
    //text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  //pop()

  
}

function mousePressed() {
  
  typesize = random (10,80);
  r = random (0,255);
  g = random (0,255);
  b = random (0,255);
  phrase = 'Hey stop that!'
  
  
}

function keyPressed() {

  if (key == 's') {
    save("mySketch.png");
  }
}