let angle = 0;
let slider;
let isRandom = true;
let checkBox;
let button;

function setup() {   
  canvas = createCanvas(600, 400);
  graphic = createGraphics(width, height);
  document.body.style.color = "#fff";
  slider = createSlider(0,PI,PI/6,0.01);
  slider.position(20,100);
  slider.changed(drawTree);
  checkBox = createCheckbox('random', false);
  checkBox.position(20,130);
  checkBox.changed(drawTree);
  button = createButton("New tree");
  button.position(20,20);
  button.mousePressed(drawTree);

  graphic.translate(width/2,height);
  drawTree();
} 

function drawTree() {
  angle = slider.value();
  isRandom = checkBox.checked();
  graphic.background(150);
  const gb = random()*50;
  graphic.stroke(100+random()*155,gb*2,gb);
  branch(100);
}

function draw() { 
  image(graphic,0,0);
}

function branch(len) {
  graphic.strokeWeight(Math.max(1,len/10));
  graphic.line(0,0, 0, -len);
  graphic.push();
  graphic.translate(0,-len);
  graphic.push();
  graphic.rotate(angle);
  if( len > 5 ) {
    const newLen = isRandom ? len*random(1) : len*0.67;
    branch(newLen);
  }
  graphic.pop();
  graphic.push();
  graphic.rotate(-angle);
  if( len > 2 ) {
    const newLen = isRandom ? len*random(1) : len*0.67;
    branch(newLen);
  }
  graphic.pop();
  graphic.pop();
}
