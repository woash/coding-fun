let img
let r
function preload() {
  img = loadImage('pxArt.jpeg');
  hair = loadImage('pngegg.png');
}

function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES)
  
}

function draw() {
  background(img);
  
  push()
  fill('rgb(255,255,255)')
  noStroke()
  translate (200,450)
  ellipse (0,0,20,180)
  rotate(25)
  ellipse (-35,0,20,180)
  ellipse (-60,0,20,180)
  rotate (-45)
  ellipse (35,0,20,180)
  ellipse (60,0,20,180)
  pop()

  push()
  stroke('white')
  strokeWeight(10)
  line (170,212,120,300)
  line(170,120,280,300)
  pop()
 
  
  drawBottom(150,350)
  drawHead(200,150,100)
     
  // push()
  // fill('black')
  // circle(185,150,5)
  // circle(210,150,5)
  // pop()
  
  hair.resize(300, 400);
  image(hair, 130, 50);
  
  push()
  fill('grey')
  quad(130,308,96,270,116,275,136,306)
  pop()
  
  
  //arc (170, 250, 128, 250, b-100, 45, 0)
 //circle(mouseX,mouseY,10)

  
  //mouse coordinate tracker 
  // push()
  //   fill('red')
  //   text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  // pop()
  
  if (mouseIsPressed) {
  push()
  strokeWeight(10)
  stroke('red');
  line(mouseX, mouseY, mouseX ,mouseY-40); 
  pop()
}
  
  textSize(40);
  text('⭐︎', 300, 145);

}

function drawHead (x, y, rad, r){
  r = 40
  
   if (mouseIsPressed) {
    r = 90
  }
  
  push()
  circle (x, y, rad)
  pop()

  push()
  //noStroke()
  fill('rgb(255,224,57)')
  circle(x-20,y+50,10)
  circle(x-10,y+55,10)
  circle(x+20,y+50,10)
  circle(x+10,y+55,10)
  circle(x,y+55,10)
  pop()
  
  push()
  //noStroke()
  fill('rgb(253,153,233)')
  circle(x-10, y +30,r)
  pop()
  
  push()
  noStroke()
  circle(x+120,y-20,80)
  circle(x+80,y-10,20)
 // triangle(280,80,270,100,300,90)
  pop()
  
 
}

function drawBottom (a,b) {
  push()
  fill('grey')
  quad(a+20,b-150, a+80, b-150, a+100,b,a,b)
  quad (a,b, a+100,b,a+120, b+60,a-20,b+60 )
  pop()
}

function keyPressed() {

  if (key == 's') {
    save("mySketch.png");
  }
}