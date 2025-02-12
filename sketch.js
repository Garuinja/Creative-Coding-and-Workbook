let box = false;
let cyanbox = false;
let magentabox = false;
let yellowbox = false;
let greenbox = false;
let redbox = false;
let bluebox = false;
let spin = true;
let spinxcoord = 20;
let spinycoord = 20;
let spinxmod = 0;
let spinymod = 0;
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
  if(redbox == true || mouseY >= height - 203 && mouseY <= height && mouseX >= 23 && mouseX <= 73){
    fill(c, r, r);
    rect(23 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(23, height - 203, 50, 200);
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(greenbox == true || mouseY >= height - 203 && mouseY <= height && mouseX >= 73 && mouseX <= 123){
    fill(r, c, r);
    rect(73 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(73, height - 203, 50, 200);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(bluebox == true || mouseY >= height - 203 && mouseY <= height && mouseX >= 123 && mouseX <= 173){
    fill(r, r, c);
    rect(123 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(123, height - 203, 50, 200);
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(cyanbox == true || mouseY >= height - 203 && mouseY <= height && mouseX >= 173 && mouseX <= 223){
    fill(r, c, c);
    rect(173 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(173, height - 203, 50, 200);
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(magentabox == true || mouseY >= height - 203 && mouseY <= height && mouseX >= 223 && mouseX <= 273){
    fill(c, r, c);
    rect(223 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(223, height - 203, 50, 200);
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(yellowbox == true || mouseY >= height - 203 && mouseY <= height && mouseX >= 273 && mouseX <= 323){
    fill(c, c, r);
    rect(273 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(273, height - 203, 50, 200);
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

  // spinx = 230;//280
  // spiny = 20;//70
  //spinx spinxcoord spinxmod
  x = random(-20, 20);
  y = random(-20, 20);
  c = random(1, 255);
  r = random(1, 100);
  if(mouseY >= spinycoord && mouseY <= spinycoord + 50 && mouseX >= spinxcoord && mouseX <= spinxcoord + 50){
    fill(c,r,c);
    spin = false;
    noStroke();
    let butt = random(0 + 13, width - 53);
    let fart = random(0 + 13, height - 53);
    rect(butt + x, fart + y, 50, 50);
    rect(spinxcoord + x, spinycoord + y, 50, 50);

  }else{
    fill(255);
    spin = true;
    rect(spinxcoord, spinycoord, 50, 50);
  }

  if(spin == true){
    if(spinxcoord < 250 && spinycoord == 20){
      spinxmod = 5;
    }else if(spinxcoord > 20 && spinycoord == 70){
      spinxmod = -5;
    }else{
      spinxmod = 0;
    }
    if(spinxcoord == 250 && spinycoord < 70){
      spinymod = 5;
    }else if(spinxcoord == 20 && spinycoord > 20){
      spinymod = -5;
    }else{
      spinymod = 0;
    }
    spinxcoord = spinxcoord + spinxmod;
    spinycoord = spinycoord + spinymod;
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