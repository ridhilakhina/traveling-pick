function setup() {
  createCanvas(400, 400);
  // slow down my framerate
  frameRate(13);
    
  // create color
  let myColor = color(255, 204, 20);
  // color the background
  background(myColor);
}

function draw() {
  // create a collection of colors
  let colorCollection = ["#7ef542", "#37FA6A", "#378BFA","#378BFA", "#A251FA", "#f5427b"];
  
  // choose a color
  let choosenColor = random(colorCollection);
  
  // each time  I call a drop, change the color
  // loop 
  drop(random(400), random(400), choosenColor);
}

function drop(x, y, c) {
  //color my circle
  fill(c);
  // put a dot in the middle
  ellipse(x, y, 1110);
  // remove filling color
  noFill();
  // put a bigger circle around it
  ellipse(x, y, 120);
  
  
  // define sometimes
  let sometimes = random(10);
  // show me how much is sometimes now
  // console.log(sometimes);
  
  // sometimes I want 3 circles around
  if(sometimes <= 3) {
    ellipse(x, y, 30);
  }
}