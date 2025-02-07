let box = false;
let cyanbox = false;
let magentabox = false;
let yellowbox = false;
let greenbox = false;
let redbox = false;
let bluebox = false;
function setup() {
  createCanvas(400, 400);
  frameRate(25);
}

function draw() {
  background(220);
  fill(255);
  stroke(93, 226, 231);
  strokeWeight(5);

  x = random(-10, 10);
  y = random(-10, 10);
  let c = random(1, 255);
  let r = random(1, 100);
  let num = random(1, 4);
  
  text(num, 20, 20);
  if(greenbox == true || mouseY >= 100 && mouseY <= 300 && mouseX >= 100 && mouseX <= 150){
    fill(r, c, r);
    rect(100 + x, 100 + y, 50, 200);
  }else{
    fill(255);
    rect(100, 100, 50, 200);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(bluebox == true || mouseY >= 100 && mouseY <= 300 && mouseX >= 210 && mouseX <= 260){
    fill(r, r, c);
    rect(210 + x, 100 + y, 50, 200);
  }else{
    fill(255);
    rect(210, 100, 50, 200);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(redbox == true || mouseY >= 100 && mouseY <= 300 && mouseX >= 10 && mouseX <= 90){
    fill(c, r, r);
    rect(10 + x, 100 + y, 50, 200);
  }else{
    fill(255);
    rect(10, 100, 50, 200);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(yellowbox == true || mouseY >= 40 && mouseY <= 90 && mouseX >= 10 && mouseX <= 210){
    fill(c, c, r);
    rect(10 + x, 40 + y, 200, 50);
  }else{
    fill(255);
    rect(10, 40, 200, 50);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(magentabox == true || mouseY >= 100 && mouseY <= 300 && mouseX >= 290 && mouseX <= 340){
    fill(c, r, c);
    rect(290 + x, 100 + y, 50, 200);
  }else{
    fill(255);
    rect(290, 100, 50, 200);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(cyanbox == true || mouseY >= 330 && mouseY <= 380 && mouseX >= 10 && mouseX <= 210){
    fill(r, c, c);
    rect(10 + x, 330 + y, 200, 50);
  }else{
    fill(255);
    rect(10, 330, 200, 50);
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(box == true || mouseY >= 10 && mouseY <= 30 && mouseX >= 310 && mouseX <= 330){
    fill(c,c,c);
    rect(310 + x, 10 + y, 20, 20);
  }else{
    fill(255);
    rect(310, 10, 20, 20);
  }
}

function mousePressed(){
  if(mouseY >= 10 && mouseX >= 310 && mouseY <= 30 && mouseX <= 330){
    if(box == true){
      box = false
    }else{
      box = true;
    }
  }
}