let font;
let scene = 0;
let food1 = [];
let food2 = [];
let dialogues = [];
let currentDialogue = 0;
let startButton, nextButton;
let bgImages = [];
let img;
let gamebg, kitchen, girl, boy, boyyuck;
let foodPlaced = [];
let correctOrder1 = [1, 3, 2, 0];
let correctOrder2 = [0, 3, 1,2];
let panRadius = 100; 
let panCenter; 
let slider;
let gameFramePos, gameFrameWidth, gameFrameHeight;
let foodImages = [];
let foodImagePaths1 = ['Ginger garlic.png', 'oil2.png', 'Onions.png', 'Butter.png'];
let foodImagePaths2 = ['Chicken.png', 'Small peppers.png', 'Cream.png', 'Bowl.png'];
let pan;
let sliderCorrect1 = 4;
let sliderCorrect2 = 8;
let isCorrect = true;
let sliderMin = 0;
let sliderMax = 10;
let recipe;
let hand
let submitButton;
let sliderInteracted = false;
let bgmusic

function preload() {
  img = loadImage('mirch.jpg');
  gamebg = loadImage('gamebg.png');
  kitchen = loadImage('gameintro2.png');
  font = loadFont('alagard.ttf');
  font2 = loadFont('Satoshi-Medium.otf');
  girl = loadImage('girl.png');
  boy = loadImage('boy-1.png');
  boyyuck = loadImage('boy yuck.png');
  pan = loadImage('Pan.png');
  recipe = loadImage('recipe.png');
  hand = loadImage('hand.png')
  bgmusic = loadSound('SailorMoon - Moonlight - Caja musical.mp3')
  
  for (let path of foodImagePaths1) {
    foodImages.push(loadImage(path));
  }
  for (let path of foodImagePaths2) {
    foodImages.push(loadImage(path));
  }
}

class Dialogue {
  constructor(text) {
    this.text = text;
  }

  display() {
    textFont(font);
    textSize(17);
    fill('rgb(255,255,255)');
    textAlign(CENTER, CENTER);
    text(this.text, gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.16);
  }
}

class Food {
  constructor(id, x, y, img) {
    this.id = id;
    this.img = img;
    this.pos = createVector(x, y);
    this.rad = 50;
    this.placed = false;
  }

  display() {
    push();
    imageMode(CENTER);
    let aspectRatio = this.img.width / this.img.height;
    let newWidth = 140;
    let newHeight = newWidth / aspectRatio;
    image(this.img, this.pos.x, this.pos.y, newWidth, newHeight);
    pop();
  }

  update() {
    if (!this.placed) {
      let dis = p5.Vector.dist(this.pos, createVector(mouseX, mouseY));
      if (dis < this.rad && mouseIsPressed) {
        this.pos = createVector(mouseX, mouseY);
      }

      let panDist = p5.Vector.dist(this.pos, panCenter);
      if (panDist < panRadius / 2) {
        this.placed = true;
        foodPlaced.push(this.id); 
      }
    }
  }
}

class Button {
  constructor(x, y, w, h, label) {
    this.x = gameFramePos.x + x;
    this.y = gameFramePos.y + y;
    this.w = w;
    this.h = h;
    this.label = label;
  }

  makebutton() {
    rectMode(CENTER);
    fill('white');
    rect(this.x, this.y + 2, this.w, this.h, 20);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(14);
    textFont(font2);
    text(this.label, this.x, this.y);
  }

  isClicked() {
    return (mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2);
  }
}

function setup() {
  createCanvas(500, 500);
  gameFrameWidth = 500;
  gameFrameHeight = 500;
  gameFramePos = createVector(width / 2 - gameFrameWidth / 2, height / 2 - gameFrameHeight / 2);
  
  startButton = new Button(gameFrameWidth / 2, gameFrameHeight / 1.07, 90, 30, "S T A R T");
  nextButton = new Button(gameFrameWidth / 2, gameFrameHeight / 1.08, 40, 25, "→");
  submitButton = new Button(gameFrameWidth / 2, gameFrameHeight / 1.2, 90, 30, "NEXT");
  RestartButton = new Button(gameFrameWidth / 1.2, gameFrameHeight / 1.1, 90, 30, "RESTART");

  panCenter = createVector(gameFramePos.x + gameFrameWidth * 0.6, 
    gameFramePos.y + gameFrameHeight * 0.7);
  
  dialogues.push(new Dialogue("Your lunch looks so good! Did you make it?"));
  dialogues.push(new Dialogue("Nope, I got it downstairs.. I miss home cooked meals."));
  dialogues.push(new Dialogue("I can cook for you, come over."));
  dialogues.push(new Dialogue("Wow, that's so nice."));
  dialogues.push(new Dialogue("Yeah, I'm a great chef."));

  let foodPositions1 = [
    createVector(gameFramePos.x + 410, gameFramePos.y + 100),
    createVector(gameFramePos.x + 300, gameFramePos.y + 100),
    createVector(gameFramePos.x + 80, gameFramePos.y + 120),
    createVector(gameFramePos.x + 70, gameFramePos.y + 260)
  ];

  let foodPositions2 = [
    createVector(gameFramePos.x + 410, gameFramePos.y + 100),
    createVector(gameFramePos.x + 300, gameFramePos.y + 100),
    createVector(gameFramePos.x + 80, gameFramePos.y + 120),
    createVector(gameFramePos.x + 70, gameFramePos.y + 260)
  ];

  for (let i = 0; i < 4; i++) {
    food1.push(new Food(i, foodPositions1[i].x, foodPositions1[i].y, foodImages[i]));
  }
  for (let i = 0; i < 4; i++) {
    food2.push(new Food(i, foodPositions2[i].x, foodPositions2[i].y, foodImages[i + 4]));
  }
  
  slider = createSlider(sliderMin, sliderMax, 0, 1);
  slider.hide();
}

function draw() {
  background('black');
  gameframe();

  switch (scene) {
    case 1:
      showDialogue();
      break;
    case 2:
      showEveningScene();
      break;
    case 3:
      showThoughtScene();
      break;
    case 4:
      recipepage();
      break;
    case 5:
      makefood(food1, correctOrder1, 6);
      fill('white');
      push();
    fill(0, 0, 0, 100);
    rectMode(CENTER);
    rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05, 490, 40, 4);
    pop();
      push()
      textSize(15)
      textFont(font2)
      text('Drag ingredients into the pan', gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05);
      pop();
      break;
    case 6:
      makefood(food1, correctOrder1, 6);
      sliderScene(sliderCorrect1, 7);
      fill('white');
      push();
    fill(0, 0, 0, 100);
    rectMode(CENTER);
    rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05, 490, 40, 4);
    pop();
      textSize(15)
      textFont(font2)
      text('Cook by moving the slider', gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05);
      break;
    case 7:
      makefood(food2, correctOrder2, 8);
      fill('white');
      push();
    fill(0, 0, 0, 100);
    rectMode(CENTER);
    rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05, 490, 40, 4);
    pop();
      push()
      textSize(15)
      textFont(font2)
      text('Drag ingredients into the pan', gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05);
      pop();
      break;
    case 8:
      makefood(food2, correctOrder2, 8);
      sliderScene(sliderCorrect2, 9);
      fill('white');
      push();
    fill(0, 0, 0, 100);
    rectMode(CENTER);
    rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05, 490, 40, 4);
    pop();
      push()
      textSize(15)
      textFont(font2)
      text('Cook by moving the slider', gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.05);
      pop()
      break;
    case 9:
      finalScene();
      break;
    default:
      intro();
      break;
  }
}

function gameframe() {
  push();
  fill('#fe9dd4');
  rectMode(CORNER);
  rect(gameFramePos.x, gameFramePos.y, gameFrameWidth, gameFrameHeight);
  pop();
}

function intro() {
  image(kitchen, gameFramePos.x, gameFramePos.y, gameFrameWidth, gameFrameHeight);
  push();
  fill(0, 0, 0, 150);
  rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.18, 450, 100, 4);
  pop();
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(24);
  fill('white');
  text("Date Night : A liar's cookbook", width / 2, gameFramePos.y + gameFrameHeight / 1.2);
  startButton.makebutton();
}

function showDialogue() {
  let characterImage = currentDialogue % 2 === 0 ? girl : boy;
  let characterX = currentDialogue % 2 === 0 ? gameFramePos.x - 50 : gameFramePos.x + 90;
  let characterY = gameFramePos.y + gameFrameHeight * 0.16;
  let characterSize = 420;
  image(characterImage, characterX, characterY, characterSize, characterSize);
  push();
  fill(254, 157, 212, 150);
  rectMode(CENTER);
  rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.16, 440, 60, 4);
  pop();
  dialogues[currentDialogue].display();
  nextButton.makebutton();
}

function makefood(foodArray, correctOrder, nextScene) {
  image(gamebg, gameFramePos.x, gameFramePos.y, gameFrameWidth, gameFrameHeight);
  fill(200, 200, 255);

  let panX = gameFramePos.x + gameFrameWidth / 1.82;
  let panY = gameFramePos.y + gameFrameHeight / 1.37;

  let panWidth = panRadius * 3;
  let panHeight = panRadius * 2.7;
  push();
  imageMode(CENTER);
  image(pan, panX, panY, panWidth, panHeight);
  pop();

  for (let f of foodArray) {
    f.display();
    f.update();
  }

  if (foodPlaced.length === foodArray.length) {
    checkOrder(correctOrder);
    scene = nextScene; // Always proceed to next scene
    foodPlaced = [];
  }
  
  image(hand, mouseX-20, mouseY, 50, 50);
}
function checkOrder(correctOrder) {
  isCorrect = true; // Reset isCorrect before checking
  for (let i = 0; i < correctOrder.length; i++) {
    if (foodPlaced[i] !== correctOrder[i]) {
      isCorrect = false;
      console.log(`Order incorrect at index ${i}: expected ${correctOrder[i]}, got ${foodPlaced[i]}`);
      break;
    }
  }
}

function sliderScene(correctValue, nextScene) {
    slider.show();
    slider.position(gameFramePos.x + 20, gameFramePos.y + 20);

    if (mouseX > slider.x && mouseX < slider.x + slider.width && 
        mouseY > slider.y - 10 && mouseY < slider.y + 10) {
        sliderInteracted = true;
    }

    let sliderValue = slider.value();
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(`Minutes Cooked: ${sliderValue}`, gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2 - 30);

    let targetX = map(correctValue, sliderMin, sliderMax, slider.x, slider.x + slider.width);
    // stroke(255, 0, 0);
    // line(targetX, slider.y - 10, targetX, slider.y + 10);
    // noStroke();
    fill(0, 0, 0);
    //text(`Target: ${correctValue}`, targetX, slider.y +30);

    if (sliderInteracted) {
        submitButton.makebutton();
    }
}

function showEveningScene() {
  
   push();
  fill(0,0,0,230);
  rectMode(CORNER);
  rect(gameFramePos.x+10, gameFramePos.y+10, gameFrameWidth-20, gameFrameHeight-20, 20);
  pop(); 
  
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(20);
  fill('white');
  text("Yay! You just got yourself a dinner date,", gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2 - 20);
  text("there's only one little problem...", gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2 + 20);
  text("you don't know how to cook.", gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2 + 60);
  
  nextButton.makebutton();
}

function showThoughtScene() {
  
  push();
  fill(0,0,0,230);
  rectMode(CORNER);
  rect(gameFramePos.x+10, gameFramePos.y+10, gameFrameWidth-20, gameFrameHeight-20, 20);
  pop(); 
  
  // push();
  // fill(0, 0, 0, 150);
  // rectMode(CENTER);
  // rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2, 440, 200, 4);
  
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(20);
  fill('white');
  text("You found an old butter chicken recipe,", gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2 - 20);
  text("how hard could it be?", gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2 + 20);
  
  nextButton.makebutton();
  //pop();
}

function finalScene() {
  textAlign(CENTER, CENTER);
  if (isCorrect) {
    fill('black');
    //textWrap(WORD);
    text("Congratulations! You are an expert liar and love is in the air <3", width / 2, gameFramePos.y + 90);
    push();
    imageMode(CENTER);
    image(girl, gameFramePos.x + gameFrameWidth / 3.5, gameFramePos.y + gameFrameHeight / 1.54, 350, 350);
    image(boy, gameFramePos.x + gameFrameWidth / 1.5, gameFramePos.y + gameFrameHeight / 1.54, 350, 350);
    pop();
  } else {
    push();
    imageMode(CENTER);
    image(boyyuck, gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 1.72, 420, 420);
    pop();
    push();
    fill('black');
    textWrap(WORD);
    text("Whoops, you got caught lying and gave your date food poisoning.", width / 2, gameFramePos.y + 90, gameFrameWidth / 1.5);
    pop();
  }
  RestartButton.makebutton();
}

function mousePressed() {
    if ((scene === 6 || scene === 8) && sliderInteracted && submitButton.isClicked()) {
        let sliderValue = slider.value();
        if ((sliderValue === sliderCorrect1 && scene === 6) || 
            (sliderValue === sliderCorrect2 && scene === 8)) {
            scene++;
            slider.hide();
            sliderInteracted = false;
        } else {
            isCorrect = false;
        }
    } else if (scene === 0 && startButton.isClicked()) {
        scene = 1;
        isCorrect = true;
        bgmusic.play()
    } else if (scene === 1 && nextButton.isClicked()) {
        if (currentDialogue < dialogues.length - 1) {
            currentDialogue++;
        } else {
            scene = 2;
        }
    } else if (scene === 2 && nextButton.isClicked()) {
        scene = 3;
    } else if (scene === 3 && nextButton.isClicked()) {
        scene = 4;
    } else if (scene === 4 && nextButton.isClicked()) {
        scene = 5;
    } else if (scene === 9 && RestartButton.isClicked()) {
        window.location.reload(); 
    }
}

function recipepage() {
  rectMode(CENTER);
  rect(gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2, 450, 430, 4);
  push()
  imageMode(CENTER);
  image(recipe, gameFramePos.x + gameFrameWidth / 2, gameFramePos.y + gameFrameHeight / 2, 450, 430);
  pop()
  nextButton.makebutton();
}