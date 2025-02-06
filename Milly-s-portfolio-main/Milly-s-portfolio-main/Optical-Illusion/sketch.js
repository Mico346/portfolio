function setup() {
    createCanvas(600, 600);
    noStroke();
    fill(255);
  }
  
  function draw() {
   background(0);
      
    translate(width / 2, height / 2);
  
    let numDots = 30;
    let radius = 200;
    let angleOffset = frameCount * 0.05;
  
    for (let i = 0; i < numDots; i++) {
    let angle = map(i, 0, numDots, 0, TWO_PI) + angleOffset;
    let x = cos(angle) * radius
    let y = sin(angle) * radius
    let dotSize = map(i, 0, numDots, 5, 30);
  
    fill("pink")
    ellipse(x, y, dotSize);
      
      
    radius -= 4;
      
      
      
    }
  }
  