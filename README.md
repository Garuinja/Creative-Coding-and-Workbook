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

I have an idea which is to have the boxes constantly moving and then have them stay in one spot when they glitch out. Trying to make the boxes move was difficult because I couldn't figure out how to make it move so I went back to a [previous workshop task](https://github.com/Garuinja/workshop-task-9) which has work where there are moving objects. But the code I want to make would be slightly different because in the previous code has the objects move from left to right while in this one I was planning to make go in like a circle loop. Which lead me to this.
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

I got a clear idea on what the final product of the artwork is going to be. First, I'm going to take the red, green, blue and cyan boxes I made before and make them moving and start them off at different corners of the canvas. Then I'm going to have the magenta and yellow boxes and also make them moving but in between the red, green, blue and cyan boxes and then I'm going to take the original moving box and put that in between the magenta and yellow boxes. Finally, I will take the box that can be turned on and off and place that in the center and have that be a button that can turn on the 'glitches' for everything else. Of course, the boxes will still 'glitch out' when the mouse hovers over them but the button box will turn on the 'glitch' for every box.

I decided to make the boxes all have the following features: 'glitching' when the mouse hovers over them, movement and pausing when 'glitching'. An example of this code would be
` let x = random(-10, 10);
  let y = random(-10, 10);
  let c = random(1, 255);
  let r = random(1, 100);
  if(redbox == true || mouseY >= redycoord && mouseY <= redycoord + 200 && mouseX >= 5 && mouseX <= 55){
    fill(c, r, r);
    noStroke();
    redmove = false;
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    rect(5 + x, redycoord + y, 50, 200);
  }else{
    fill(255);
    stroke(93, 226, 231);
    redmove = true;
    rect(5, redycoord, 50, 200);
  }`

  `if(redmove == true){
    if(redycoord == 0){
      redymod = 5;
    }else if(redycoord == height - 205){
      redymod = -5;
    }
    redycoord = redycoord + redymod;
  }`

This code is for the red box and the blue and magenta boxes are similar as they also move vertically while the codes for green, cyan and yellow are like this
`  x = random(-10, 10);
  y = random(-10, 10);
  c = random(1, 255);
  r = random(1, 100);
  if(greenbox == true || mouseY >= 5 && mouseY <= 55 && mouseX >= greenxcoord && mouseX <= greenxcoord + 200){
    fill(r, c, r);
    noStroke();
    if(box == true){
      butt = random(0 + 13, width - 53);
      fart = random(0 + 13, height - 53);
      rect(butt + x, fart + y, 50, 50);
    }
    greenmove = false;
    rect(greenxcoord + x, 5 + y, 200, 50);
  }else{
    fill(255);
    stroke(93, 226, 231);
    greenmove = true;
    rect(greenxcoord, 5, 200, 50);
  }`

  `if(greenmove == true){
    if(greenxcoord == 5){
      greenxmod = 5;
    }else if(greenxcoord == 195){
      greenxmod = -5;
    }
    greenxcoord = greenxcoord + greenxmod;
  }`
This is because they move horizontally. The code for the original moving box is basically the same while the original 'glitch' box has been given the moving feature like this.
` x = random(-10, 10);
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
  }`

  `if(boxmove == true){
    if(boxxcoord < 265 && boxycoord == 115){
      boxxmod = 5;
    }else if(boxxcoord > 170 && boxycoord == 210){
      boxxmod = -5;
    }else{
      boxxmod = 0;
    }
    if(boxxcoord == 265 && boxycoord < 210){
      boxymod = 5;
    }else if(boxxcoord == 170 && boxycoord > 115){
      boxymod = -5;
    }else{
      boxymod = 0;
    }
    boxxcoord = boxxcoord + boxxmod;
    boxycoord = boxycoord + boxymod;
  }`
I've also changed code for the mouse press to be like this.
`function mousePressed(){
  if(mouseY >= boxycoord && mouseY <= boxycoord + 20 && mouseX >= boxxcoord && mouseX <= boxxcoord + 20){
    if(box == true){
      box = false;
      redbox = false;
      bluebox = false;
      greenbox = false;
      cyanbox = false;
      magentabox = false;
      yellowbox = false;
      spinbox = false;
    }else{
      box = true;
      redbox = true;
      bluebox = true;
      greenbox = true;
      cyanbox = true;
      magentabox = true;
      yellowbox = true;
      spinbox = true;
    }
  }
}`
Now when the mouse presses over the original 'glitch' box it turns on the simulated 'glitch' effect for every box. But I do want to put it on a delay so then it doesn't become a full overload. Like pressing the original 'glitch' box will cause it to simulate 'glitch' then we have the next box, then the next and so on. I prefer this approach than having a full on information overload because then it's more gradual and showcases the idea of a 'cool glitch' being more about the process rather than the end result and also because I think the end product is an info overload because each box will have another box created at the same time when simulating the 'glitch' out.

I think I thought of a way to have it gradually get more 'glitchy'. I was planning to use `setTimeout()` and place the `variable = true;` statements in them like `setTimeout(box = true, 2000)` but `setTimeout()` only takes functions so my plan is to make several functions and run it like `setTimeout(function_one, 2000);` or something like that. Then each function would look like this.
`function partone(){
  if(box == false){
    spinbox = false;
  }else{
    spinbox = true;
  }
}`
When I originally tried writing this code it was like this.
`function partone(){
  if(box == true){
    spinbox = false;
  }else{
    spinbox = true;
  }
}`
Because I changed the box toggle from being an if statement to this
`function partzero(){
  if(box == true){
    box = false;
  }else{
    box = true;
  }
}`
Because I was worried that if I had the box toggle as an if statement it would make the other boxes turn do the opposite like when the box was simulating the 'glitch out' the other boxes would be off and also because I thought it would be inefficient to have two `setTimeout()` functions written in an if statement. This now makes my box toggle into this now.
`function mousePressed(){
  if(mouseY >= boxycoord && mouseY <= boxycoord + 20 && mouseX >= boxxcoord && mouseX <= boxxcoord + 20){
    setTimeout(partzero, 0);
    setTimeout(partone, 2000);
    setTimeout(parttwo, 5000);
    setTimeout(partthree, 8000);
  }
}`
And these are the functions for the boxes.
`function partzero(){
  if(box == true){
    box = false;
  }else{
    box = true;
  }
}`

`function partone(){
  if(box == false){
    spinbox = false;
  }else{
    spinbox = true;
  }
}`

`function parttwo(){
  if(box == false){
    magentabox = false;
    yellowbox = false;
  }else{
    magentabox = true;
    yellowbox = true;
  }
}`

`function partthree(){
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
}`

I feel like leaving the `setTimeout()` for 2 seconds is too long but maybe that's just my personal opinion. I'm thinking of maybe making the simulated 'glitches' start to appear faster but I also I feel like my perception of time messed up. I do want to expand the canvas so that it takes up the window but if I do that I feel like it's going to be a lot of math involved because I want the piece to be in the center of the window and having to change all the values to fit the middle on every screen feels like a drag. I should probably add this but I changed the timing of the box toggle from 0secs, 2secs, 5secs, 8secs, to 0secs, 2secs, 4secs, 6secs. 

I think I have an idea of how to move the artwork into the center of the window. The idea would be to use the `createCanvas(windowWidth, windowHeight)` and then I can just just add `+ windowWidth/2 - 200` to the x coordinates and then I want to add like maybe 50p pixels of space from the top meaning I'll have to add `+ 50` to the y coordinates as well. After working on the red box it has to my intention that I defined the numbers before the setup which means that adding something like `+ windowWidth/2 - 200` to the x coordinates mean I'll have to write more lines in the draw function.

Ok so after changing the code so that it works on everything here are some notes. One, this was not as hard as I thought it was and I made it harder for myself because I would add `+ windowWidth/2 - 200` and `+ 50` to the x and y coordinates I had already made respectively but I would keep adding it to statements like 

`rect(5 + x + windowWidth/2 - 200, redycoord + y + 50, 50, 200);` 

and 

`if(redbox == true || mouseY >= redycoord && mouseY <= redycoord + 200 && mouseX >= 5 + windowWidth/2 - 200 && mouseX <= 55 + windowWidth/2 - 200)`

which would make add more space to the detection and placing further than I wanted. Second, when it came to the xcoordinates at first I thought adding `+ windowWidth/2 - 200` to coordinates in the function would work but it didn't because I forgot that the draw function is constantly being run meaning that the coordinates would also be increasing by `+ windowWidth/2 - 200` so to solve this I would write a statement like this `greenxcoord = greenxcoord + windowWidth/2 - 200;` in the set up function. Now this works well, but if the window size were to change while the code is running then the boxes would either stop moving or move off of the screen (which only affects the boxes that utilizes the xcoordinates and no the one using the ycoordinates) but it can be fixed by just refreshing the page and then the code would adapt to the new window size. Third, when boxes simulate the 'glitch out' the amount of boxes created is really apparent so I wanna make boxes relevant to the size of the window so that it becomes it eventually becomes the colourful mess I want it to be in the end. Another thing I want to add, when turning the simulated 'glitches' off all the other boxes disappear, like the boxes created to give the 'glitchy effect' not the moving boxes.

I have an idea of how to solve my problem with the glitch boxes. Maybe I can put the boxes in the functions which allows for the delay to happen. No, it doesn't work, probably because I'm telling the code to make a rectangle but the draw function is drawing over it. I'm probably going to finish here but I do want to try and solve this problem before leaving it.
