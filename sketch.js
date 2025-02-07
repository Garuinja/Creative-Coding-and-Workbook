let box = false;
function setup() {
  createCanvas(400, 400);
  frameRate(25);
}

function draw() {
  background(220);
  fill(255);
  stroke(93, 226, 231);
  strokeWeight(5);
  let x = random(1, 10);
  let y = random(1, 10);
  let c = random(1, 255);
  let r = random(1, 100);
  let num = random(1, 4);
  
  text(num, 20, 20);
  
  fill(r, c, r);
  rect(100 + x, 100 + y, 50, 200);
  
  x = random(1, 10);
  y = random(1, 10);
  c = random(1, 255);
  r = random(1, 100);
  fill(r, r, c);
  rect(210 + x, 100 + y, 50, 200);
  
  x = random(1, 10);
  y = random(1, 10);
  c = random(1, 255);
  r = random(1, 100);
  fill(c, r, r);
  rect(10 + x, 100 + y, 50, 200);
  
  x = random(1, 10);
  y = random(1, 10);
  c = random(1, 255);
  r = random(1, 100);
  fill(c, c, r);
  rect(10 + x, 40 + y, 200, 50);
  
  x = random(1, 10);
  y = random(1, 10);
  c = random(1, 255);
  r = random(1, 100);
  fill(c, r, c);
  rect(290 + x, 100 + y, 50, 200);
  
  x = random(1, 10);
  y = random(1, 10);
  c = random(1, 255);
  r = random(1, 100);
  fill(r, c, c);
  rect(10 + x, 330 + y, 200, 50);

  if(box == true || mouseY <=50){
    rect(310 + x, 10 + y, 20, 20);
  }else{
    rect(310, 10, 20, 20);
  }
}

function mousePressed(){
  if(mouseY <= 50){
    if(box == true){
      box = false
    }else{
      box = true;
    }
  }
}