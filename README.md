Link - https://garuinja.github.io/Creative-Coding-and-Workbook/

I have decided to make a work based on the theme of glitches. My first idea towards this idea would be to have some objects simulate a 'glitch out' every now and then. I used boxes since they're the most simple object shape which would make it easier to manipulate and get ideas on how the code would be working. I then wanted to have the boxes 'glitch out' when the mouse hovers over the boxes to symbolise the troubles hidden within people. I originally had the idea of making it so that the box would randomly changed colours which would come from an array but then it got too complicated for me so then I decided to give each box `  let x = random(-5, 5); let y = random(-5, 5); let c = random(1, 255); let r = random(1, 100);`. The x and y are used to make the boxes randomly move so that it looks like it's glitching out. The c and r used to manage the colour of the box and by ordering which RGB level gets what I can make the boxes randomly change colours based on hue. For example, `fill(c, r, r);` can make a box change colours with red being the max colour. Which makes something like this 
` let x = random(-10, 10);
  let y = random(-10, 10);
  let c = random(1, 255);
  let r = random(1, 100);
  if(mouseY >= height - 203 && mouseY <= height && mouseX >= 23 && mouseX <= 73){
    fill(c, r, r);
    rect(23 + x, height - 203 + y, 50, 200);
  }else{
    fill(255);
    rect(23, height - 203, 50, 200);
  }` 
I decided to increase the x and y random ranges between -10 and 10 because -5 and 5 didn't look enough to me. I also made five other versions of this so that each box can be red, green, blue, cyan, magenta and yellow to get the most amount of colour combinations. The `fill(255);` in the bottom else statement is so that when other boxes 'glitch out' the box doesn't get affected as well.

I wanted to try and see if I can get a box to stay glitching out. To do this I will have the users click on the box to make it stay glitching out and then they can click on it again to make it not glitch. I made it a function which looks like this
`function mousePressed(){
  if(mouseY >= 10 && mouseX >= 310 && mouseY <= 30 && mouseX <= 330){
    if(box == true){
      box = false
    }else{
      box = true;
    }
  }
}` 
This code means that when the mouse is pressed while over the box it would turn the box statement either true or false which ties into this.
` x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(box == true || mouseY >= 10 && mouseY <= 30 && mouseX >= 310 && mouseX <= 330){
    fill(c,c,c);
    rect(310 + x, 10 + y, 20, 20);
  }else{
    fill(255);
    rect(310, 10, 20, 20);
  }`
This piece of code will means that while the mouse is over the box it will simulate a glitch out, this effect will also happen when the box statement is true. I'm not sure whether to apply this to the other pieces of code.

I have an idea which is to have the boxes constantly moving and then have them stay in one spot when they glitch out. Trying to make the boxes move was difficult because I couldn't figure out how to make it move so I went back to a previous workshop task (https://garuinja.github.io/workshop-task-9/) which has work where there are moving objects. But the code I want to make would be slightly different because in the previous code has the objects move from left to right while in this one I was planning to make go in like a circle loop. Which lead me to this.
`   if(spinxcoord < 250 && spinycoord == 20){
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
    spinycoord = spinycoord + spinymod;`
I tried to make the objects go in a literal circle but I couldn't get an idea on how much the objects would have to move. I tried modifying the code so that `spinxmod` was larger than `spinymod` and vice versa, but with this layout it would make the objects go in a diagonal line instead. So I settled for making it travel in rectangular loop. The code originally was 
`   if(spinxcoord < 250 && spinycoord == 20){
      spinxmod = 5;
    }else if(spinxcoord > 20 && spinycoord == 70){
      spinxmod = -5;
    }else if(spinxcoord == 250 && spinycoord < 70){
      spinymod = 5;
    }else if(spinxcoord == 20 && spinycoord > 20){
      spinymod = -5;
    }
    spinxcoord = spinxcoord + spinxmod;
    spinycoord = spinycoord + spinymod;`
which would make it go right then down and then disappear. I then changed this layout when I wrote
`   if(spinxcoord < 250 && spinycoord == 20){
      if(spinxcoord == 250 && spinycoord < 70){
        spinymod = 5;
      }else{
        spinxmod = 5;
      }
    }else if(spinxcoord > 20 && spinycoord == 70){
      spinxmod = -5;
    }else if(spinxcoord == 250 && spinycoord < 70){
      spinymod = 5;
    }else if(spinxcoord == 20 && spinycoord > 20){
      spinymod = -5;
    }
    spinxcoord = spinxcoord + spinxmod;
    spinycoord = spinycoord + spinymod;`
which would make the code go right, down and then left.

I have an idea to make the moving box code 'glitch out' as it moves. This pretty simple because then I just combined my 'glitch out' code and moving code together to make
` x = random(-20, 20);
  y = random(-20, 20);
  c = random(1, 255);
  r = random(1, 100);
  if(mouseY >= spinycoord && mouseY <= spinycoord + 50 && mouseX >= spinxcoord && mouseX <= spinxcoord + 50){
    fill(c,r,c);
    rect(spinxcoord + x, spinycoord + y, 50, 50);
  }else{
    fill(255);
    rect(spinxcoord, spinycoord, 50, 50);
  }`

  ` if(spinxcoord < 250 && spinycoord == 20){
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
    spinycoord = spinycoord + spinymod;`
but when the boxes move too fast for the users to see the 'glitch out' so I decided to make it so that the boxes would stay in place to 'glitch out' making it easier for people to see and then when they move the mouse away it goes back to it's loop. Which becomes this.
` x = random(-20, 20);
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
  }`

  `if(spin == true){
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
  }`
Now you may have seen
`   noStroke();
    let butt = random(0 + 13, width - 53);
    let fart = random(0 + 13, height - 53);
    rect(butt + x, fart + y, 50, 50);`
within the code. Now these were added to make it the 'glitch out' look more real. `noStroke();` makes it look like the texture is missing and the other pieces of code are there to make another box show up when the initial box 'glitch out' making it look like another the rest of the code is 'glitching out' as well (the variable names will be changed in the final product but for now they're just placeholders).
