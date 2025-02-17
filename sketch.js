let redbox = false;
let redmove = true;
let redycoord = 0 + 50;
let redymod = 0;

let greenbox = false;
let greenmove = true;
let greenxcoord = 195;
let greenxmod = 0;

let bluebox = false;
let bluemove = true;
let blueycoord = 195 + 50;
let blueymod = 0;

let cyanbox = false;
let cyanmove = true;
let cyanxcoord = 5;
let cyanxmod = 0;

let magentabox = false;
let magentamove = true;
let magentaxcoord = 60;
let magentaycoord = 60 + 50;
let magentaymod = 0;

let yellowbox = false;
let yellowmove = true;
let yellowxcoord = 190;
let yellowycoord = 290 + 50;
let yellowxmod = 0;

let box = false;
let boxmove = true;
let boxxcoord = 265;
let boxycoord = 210 + 50;
let boxxmod = 0;
let boxymod = 0;

let spinbox = false;
let spin = true;
let spinxcoord = 115;
let spinycoord = 60 + 50;
let spinxmod = 0;
let spinymod = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(25);
  greenxcoord = greenxcoord + windowWidth/2 - 200;
  cyanxcoord = cyanxcoord + windowWidth/2 - 200;
  magentaxcoord = magentaxcoord + windowWidth/2 - 200;
  yellowxcoord = yellowxcoord + windowWidth/2 - 200;
  boxxcoord = boxxcoord + windowWidth/2 - 200;
  spinxcoord = spinxcoord + windowWidth/2 - 200;
}

function draw() {
  background(220);
  strokeWeight(5);

  let x = random(-10, 10);
  let y = random(-10, 10);
  let c = random(1, 255);
  let r = random(1, 100);
  if(redbox == true || mouseY >= redycoord && mouseY <= redycoord + 200 && mouseX >= 5 + windowWidth/2 - 200 && mouseX <= 55 + windowWidth/2 - 200){
    fill(c, r, r);
    noStroke();
    redmove = false;
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    rect(5 + x + windowWidth/2 - 200, redycoord + y, 50, 200);
  }else{
    fill(255);
    stroke(93, 226, 231);
    redmove = true;
    rect(5 + windowWidth/2 - 200, redycoord, 50, 200);
  }

  if(redmove == true){
    if(redycoord == 0 + 50){
      redymod = 5;
    }else if(redycoord == 400 - 205 + 50){
      redymod = -5;
    }
    redycoord = redycoord + redymod;
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(greenbox == true || mouseY >= 5 + 50 && mouseY <= 55 + 50 && mouseX >= greenxcoord && mouseX <= greenxcoord + 200){
    fill(r, c, r);
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    greenmove = false;
    rect(greenxcoord + x, 5 + y + 50, 200, 50);
  }else{
    fill(255);
    stroke(93, 226, 231);
    greenmove = true;
    rect(greenxcoord, 5 + 50, 200, 50);
  }

  if(greenmove == true){
    if(greenxcoord == 5 + windowWidth/2 - 200){
      greenxmod = 5;
    }else if(greenxcoord == 195 + windowWidth/2 - 200){
      greenxmod = -5;
    }
    greenxcoord = greenxcoord + greenxmod;
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(bluebox == true || mouseY >= blueycoord && mouseY <= blueycoord + 200 && mouseX >= 345 + + windowWidth/2 - 200 && mouseX <= 395 + windowWidth/2 - 200){
    fill(r, r, c);
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    bluemove = false;
    rect(345 + x + windowWidth/2 - 200, blueycoord + y, 50, 200);
  }else{
    fill(255);
    stroke(93, 226, 231);
    bluemove = true;
    rect(345 + windowWidth/2 - 200, blueycoord, 50, 200);
  }

  if(bluemove == true){
    if(blueycoord == 5 + 50){
      blueymod = 5;
    }else if(blueycoord == 195 + 50){
      blueymod = -5;
    }
    blueycoord = blueycoord + blueymod;
  }
  
  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(cyanbox == true || mouseY >= 345 + 50 && mouseY <= 395 + 50 && mouseX >= cyanxcoord && mouseX <= cyanxcoord + 200){
    fill(r, c, c);
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    cyanmove = false;
    rect(cyanxcoord + x, 345 + y + 50, 200, 50);
  }else{
    fill(255);
    stroke(93, 226, 231);
    cyanmove = true;
    rect(cyanxcoord, 345 + 50, 200, 50);
  }

  if(cyanmove == true){
    if(cyanxcoord == 5 + windowWidth/2 - 200){
      cyanxmod = 5;
    }else if(cyanxcoord == 195 + windowWidth/2 - 200){
      cyanxmod = -5;
    }
    cyanxcoord = cyanxcoord + cyanxmod;
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(magentabox == true || mouseY >= magentaycoord && mouseY <= magentaycoord + 150 && mouseX >= magentaxcoord && mouseX <= magentaxcoord + 50){
    fill(c, r, c);
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    magentamove = false;
    rect(magentaxcoord + x, magentaycoord + y, 50, 150);
  }else{
    fill(255);
    stroke(93, 226, 231);
    magentamove = true;
    rect(magentaxcoord, magentaycoord, 50, 150);
  }

  if(magentamove == true){
    if(magentaycoord == 60 + 50){
      magentaymod = 5;
    }else if(magentaycoord == 140 + 50){
      magentaymod = -5;
    }
    magentaycoord = magentaycoord + magentaymod;
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(yellowbox == true || mouseY >= yellowycoord && mouseY <= yellowycoord + 50 && mouseX >= yellowxcoord && mouseX <= yellowxcoord + 150){
    fill(c, c, r);
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    yellowmove = false;
    rect(yellowxcoord + x, yellowycoord + y, 150, 50);
  }else{
    fill(255);
    stroke(93, 226, 231);
    yellowmove = true;
    rect(yellowxcoord, yellowycoord, 150, 50);
  }

  if(yellowmove == true){
    if(yellowxcoord == 60 + windowWidth/2 - 200){
      yellowxmod = 5;
    }else if(yellowxcoord == 190 + windowWidth/2 - 200){
      yellowxmod = -5;
    }
    yellowxcoord = yellowxcoord + yellowxmod;
  }

  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(box == true || mouseY >= boxycoord && mouseY <= boxycoord + 20 && mouseX >= boxxcoord && mouseX <= boxxcoord + 20){
    fill(c,c,c);
    noStroke();
    boxmove = false;
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    rect(boxxcoord + x, boxycoord + y, 20, 20);
  }else{
    fill(255);
    stroke(93, 226, 231);
    boxmove = true;
    rect(boxxcoord, boxycoord, 20, 20);
  }

  if(boxmove == true){
    if(boxxcoord < 265 + windowWidth/2 - 200 && boxycoord == 115 + 50){
      boxxmod = 5;
    }else if(boxxcoord > 170 + windowWidth/2 - 200 && boxycoord == 210 + 50){
      boxxmod = -5;
    }else{
      boxxmod = 0;
    }
    if(boxxcoord == 265 + windowWidth/2 - 200 && boxycoord < 210 + 50){
      boxymod = 5;
    }else if(boxxcoord == 170 + windowWidth/2 - 200 && boxycoord > 115 + 50){
      boxymod = -5;
    }else{
      boxymod = 0;
    }
    boxxcoord = boxxcoord + boxxmod;
    boxycoord = boxycoord + boxymod;
  }

  // spinx = 230;//280
  // spiny = 20;//70
  //spinx spinxcoord spinxmod
  x = random(-20, 20);
  y = random(-20, 20);
  c = random(1, 255);
  r = random(1, 100);
  if(spinbox == true || mouseY >= spinycoord && mouseY <= spinycoord + 50 && mouseX >= spinxcoord && mouseX <= spinxcoord + 50){
    fill(c,r,c);
    spin = false;
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    rect(spinxcoord + x, spinycoord + y, 50, 50);
  }else{
    fill(255);
    stroke(93, 226, 231);
    spin = true;
    rect(spinxcoord, spinycoord, 50, 50);
  }

  if(spin == true){
    if(spinxcoord < 290 + windowWidth/2 - 200 && spinycoord == 60 + 50){
      spinxmod = 5;
    }else if(spinxcoord > 115 + windowWidth/2 - 200 && spinycoord == 235 + 50){
      spinxmod = -5;
    }else{
      spinxmod = 0;
    }
    if(spinxcoord == 290 + windowWidth/2 - 200 && spinycoord < 235 + 50){
      spinymod = 5;
    }else if(spinxcoord == 115 + windowWidth/2 - 200 && spinycoord > 60 + 50){
      spinymod = -5;
    }else{
      spinymod = 0;
    }
    spinxcoord = spinxcoord + spinxmod;
    spinycoord = spinycoord + spinymod;
  }
}

function mousePressed(){
  if(mouseY >= boxycoord && mouseY <= boxycoord + 20 && mouseX >= boxxcoord && mouseX <= boxxcoord + 20){
    setTimeout(partzero, 0);
    setTimeout(partone, 2000);
    setTimeout(parttwo, 4000);
    setTimeout(partthree, 6000);
  }
}
function partzero(){
  if(box == true){
    box = false;
  }else{
    box = true;
  }
}

function partone(){
  if(box == false){
    spinbox = false;
  }else{
    spinbox = true;
  }
}

function parttwo(){
  if(box == false){
    magentabox = false;
    yellowbox = false;
  }else{
    magentabox = true;
    yellowbox = true;
  }
}

function partthree(){
  if(box == false){
    redbox = false;
    bluebox = false;
    greenbox = false;
    cyanbox = false;
  }else{
    redbox = true;
    bluebox = true;
    greenbox = true;
    cyanbox = true;
  }
}