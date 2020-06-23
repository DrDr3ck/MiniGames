var x = null;
var ball;

function setup() { 
  createCanvas(800, 600);
  background(random()*255,random()*255,random()*255);
  ball = new Ball();

  document.cookie = "hello=world;expires=31 Dec 2020;";
  x = localStorage.getItem("spacePressed");
  if( x === null ) {
    x = 0;
    localStorage.setItem("spacePressed",x);
    console.log("Hello, new player");
  } else {
    console.log("Nice to see you again!");
  }
} 

function draw() { 
  if( mouseIsPressed ) {
    ball.setForced(true);
  } else if( !mouseIsPressed ) {
    ball.setForced(false);
  }
  ball.setPosition(mouseX, mouseY);
  ball.show();
}

function keyReleased() {
  if( key === ' ') {
    console.log("space released");
  }
}

function keyPressed() {
  if( key === ' ') {
    background(random()*255,random()*255,random()*255);
    x++;
    localStorage.setItem("spacePressed",x);
  }
}