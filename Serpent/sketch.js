var s;
var scl = 40;
var oeuf;
var bestScore = 0;
var lastScore = 0;
var bestName = "";
var imgPomme = null;
var imgSerpent = null;
var imgSerpentEating = null;
var imgSerpentDead = null;
var widthScreen = 800;
var state = "die";
var input;
var button;

function preload() {
  imgPomme = loadImage("./pomme.png");
  imgSerpent = loadImage("./serpent.png");
  imgSerpentEating = loadImage("./serpentEating.png");
  imgSerpentDead = loadImage("./serpentDead.png");
}

function setup() { 
  
  createCanvas(widthScreen+200, 600);
  s=new Serpent();
  frameRate(10);
  pickLocation();
  bestScore = localStorage.getItem("bestScore");
  if( bestScore === null ) {
    bestScore = 0;
  }
  bestName = localStorage.getItem("bestName");
  if( bestName === null ) {
    bestName = "---";
  }
  lastScore = sessionStorage.getItem("lastScore");
  if( lastScore === null ) {
    lastScore = 0;
  }
  input = createInput();
  input.position(-width, 65);
  button = createButton('Enter your name');
  button.position(-width, 65);
  button.mousePressed(saveBestScore);
} 

function pickLocation() {
  var cols = floor(widthScreen/scl);
  var rows = floor(height/scl);
  oeuf = createVector(floor(random(cols)), floor(random(rows)));
  oeuf.mult(scl);
}

function draw() { 
  background(51);

  fill(151);
  rect(widthScreen, 0, width, height);

  fill(255);
  textSize(32);
  text('Best: '+bestScore.toString(), widthScreen+10, 30);
  text('Name: '+bestName.toString(), widthScreen+10, 60);
  text('Last: '+lastScore.toString(), widthScreen+10, 90);
  text('Score: '+s.total.toString(), widthScreen+10, 120);

  if( state==="play") {
    // draw food
    fill(255,0,100);
    image(imgPomme, oeuf.x, oeuf.y,scl,scl);

    s.update();
    s.show();

    if( s.eat(oeuf) ) {
      pickLocation();
    }

    if( s.die() ) {
      state="die";
      if( bestScore < s.total ) {
        bestScore = s.total;
        localStorage.setItem("bestScore", bestScore);
        bestName = "???";
        state="bestScore";
        input.position(20, 65);
        button.position(input.x + input.width, 65);
      }
      lastScore = s.total;
      sessionStorage.setItem("lastScore", lastScore);
    }
  } else if( state === "bestScore" ) {
    s.show();
  } else if( state === "die" ) {
    s.show();
    fill(255);
    textSize(32);
    text('Press Space to Start', 300, 100);
  }
}

function saveBestScore() {
  bestName = input.value();
  input.value('');
  localStorage.setItem("bestName", bestName);
  s.reset();
  state = "play";
  input.position(-width, 65);
  button.position(-width, 65);
}

function keyPressed() {
  if( keyCode === UP_ARROW) {
    s.setDir(0,-1);
  } else if( keyCode === DOWN_ARROW) {
    s.setDir(0,1);
  } else if( keyCode === RIGHT_ARROW) {
    s.setDir(1,0);
  } else if( keyCode === LEFT_ARROW) {
    s.setDir(-1,0);
  }
  if( state === "die" ) {
    if( key === " " ) {
      s.reset();
      state = "play";
    }
  }
}