//Aashita Verma 


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background('#A0E2FF');
  noStroke();

//Background
  push()
    fill('rgb(68,68,68)')
    rect(0,230,400,250)
  pop()
  push()
    fill('#EED384')
    rect(0,0,400,60)
  pop()
  push()
    fill('#E4C15A')
    quad(270,60,400,0,400,400,300,300)
    rect(0,145,200,100)
  pop()
  push()
    fill('#79D6FF')
    quad(270,100,400,50,400,230,300,200)
    fill('#6DB857')
    quad(270,200,400,150,400,230,300,200)
    stroke('#666666');
    strokeWeight(5);
    line(400,230,300,200)
    line(270,100,400,50)
    line(100,60,0,60)
    line(90,145,0,145)
    line(0,100,100,100)
  pop()

//Seat Legs 
  push()
    stroke('#1C2247');
    strokeWeight(30);
    line(50,350,60,400)
  pop()

//Seat Legs 
  push()
    stroke('#1C2247');
    strokeWeight(30);
    line(325,350,325,400)
  pop()
  
//Seat Top
  push()
    fill('#589FC0')
    quad(100, 50, 300, 50, 325, 250, 75, 250);
//Seat Top Curved
   noSmooth();
    beginShape();
    curveVertex(75, 250);
    curveVertex(75, 250);
    curveVertex(100, 50);
    curveVertex(300, 50);
    curveVertex(325, 250);
    curveVertex(325, 250);
    endShape(); 
  pop()

//Title
  push()
    textFont('Verdana', 14);
    textStyle(BOLD);
    fill('rgb(255,255,255)');
    textAlign(CENTER, CENTER);
    text("MR. CHIMP CHIMP RIDES THE BUS", 200, 40);
  pop()
  
//Seat Bottom
  push()
    fill('#4A8DAC')
    quad(75,250,325,250,350,350,25,350);
    quad(0,50,30,50,30,260,0,310)
  pop()

//Seat Bottom Height
  push()
    fill('#3D6A80')
    quad(25,350,350,350,350,375,25,375 );
  pop()
  
//Chimp ears
    fill('rgb(255,255,255)')
    ellipse(162,145,30,30)
    fill('rgb(202,190,168)')
    ellipse(162,145,15,15)
  
    fill('rgb(255,255,255)')
    ellipse(232,140,30,30)
    fill('rgb(202,190,168)')
    ellipse(232,140,15,15)

//Mr.Chimp Head & Body
  push()
    fill('#E9C78E')
    ellipse(200,170,90,90);
    ellipse(200,235,75,85)
  pop()

//Chimp Face & Snout
  push()
    fill('rgb(255,255,255)')
    ellipse(197,160,60,50)
  pop()
  push()
    fill('rgb(202,190,168)')
    ellipse(192,182,50,40)
  pop()
  push()
    fill('rgb(224,217,203)')
    ellipse(190,178,50,40)
  pop()
  push()
    fill('rgb(43,43,43)')
    circle(180,150,07)
    circle(200,148,07)
    triangle(180,160,193,160,185,165)
    stroke('#1C2247');
    strokeWeight(3);
    line(196,180,204,180)
  pop()

//Chimp Legs and Arms
  push()
    //translate(width/2,height/2);
    rotate(10);
    fill('#E9C78E')
    rect(210,220,20,140,10)
    rotate(-10);
    rect(210,250,20,140,10)
    rotate(-15)
    rect(15,250,140,20,10)
    rotate(25)
    rect(215,170,140,20,10)
  pop()

//Chimp Velcro
  push()
    fill('white')
    circle(90,245,15)
    circle(305,236,15)
    circle(220,380,15)
    circle(156,383,15)
  pop()
  
//SeatBelt
  push()
    /*noFill();
    strokeWeight(2);
    stroke(0);
    curve(40, 10, 300, 50, 50, 300, 10, 10);*/
    blendMode(DIFFERENCE)
    fill('rgb(58,49,49)')
    quad(58,284,200,230,200,240,50,300)
    quad(200,230,323,106,324,130,200,240)
  pop()
  

  
//mouse coordinate tracker 
  push()
    fill('red')
    text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  pop()

  
}
function keyPressed() {

  if (key == 's') {
    save("mySketch.png");
  }
}