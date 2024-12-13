// There are 7 horizontal lines(double lines) that represent the days of the week, the columns are the hours between 9pm and 4am

//Blue squares represent the times i passed out on the couch, red ones are on the bed, white circles are the wheels of torture where i woke up and forced myself to work


let font 
let font2
let hours = [9, 10, 11, 12, 1, 2, 3, 4];
let laptop

function preload(){
  font = loadFont('Satoshi-Black.otf')
  font2 = loadFont('Satoshi-Light.otf')
  
}
function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background('#CDDC39');
  
  push()
  textFont(font)
  fill('black')
  textSize(12)
  textAlign(CENTER)
  text('S L E E P   I S   F O R   T H E   W E E K',300,580)
  pop()
  
  
  let linenum = 7
  let spacing = height/(linenum + 1)
  for (let i = 1; i <= linenum; i++ ){
    let y = i*spacing
    push()
      strokeWeight(1)
      stroke('white')
      line(0,y,width,y)
      line(0,y+10, width, y+10)
    pop()
    // circle(0,y,5)
    //rect(CENTER)
    let circlenum = 8
    let rad = 3
    let squarefill = 'black'
    let spacingcircle = width/(circlenum+1)
    for (let j = 1; j <= circlenum; j++){
      let x = j*spacingcircle
      push()
      textFont(font2)
      fill('black')
      textAlign(CENTER)
      text(hours[j-1], x, 40)
      pop()
      push()
      strokeWeight(0.5)
      stroke('rgb(175,172,172)')
      line(x+1,75,x+1,535)
      pop()
      push()
        noStroke()
        fill(squarefill)
        square(x,y,rad)
        //image(laptop, x,y)
      
      if ((j == 4 && i == 1) || (j == 5 && i == 2) || (j == 5 && i ==3) || (j == 5 && i ==4) || (j == 2 && i == 5) || (j==7 && i == 6) || (j==3 && i == 7)) {
        rad = 10 
        squarefill = 'red' }
      pop()
      
      let distance = dist(mouseX, mouseY, x, y);
      if (distance < 50) {
        fill('rgba(255, 0, 255, 0.5)');
        let circleSize = map(distance, 0, 50, 30, 5); 
        circle(x, y, circleSize); 
      }
    
     if ((j == 4 && i == 1) || (j == 5 && i == 2) || (j == 5 && i ==3) || (j == 5 && i ==4) || (j==3 && i == 7)) {
        //image(laptop, x - laptop.width / 2, y - laptop.height / 2);
       push()
       noFill()
       for (let k=0; k<20; k++){
         let crad= k*5
         stroke('white')
         circle ( x+ 2, y+2, crad)}
       pop()
      } 
      
      if ((j == 2 && i == 1) ||(j == 3 && i == 1) || (j == 4 && i ==3)|| (j == 3 && i ==3) || (j == 2 && i ==4) || (j == 3 && i ==4) || (j == 4 && i ==4) || (j==1 && i == 7)|| (j==2 && i == 7)) {
        push()
        fill('blue')
       square ( x, y, 10)
        pop()
      } 
    }   
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}