function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
    strokeWeight(1)
    
    colorMode(RGB);
    noStroke()
    let colorA = color(255, 182, 193);
    let colorB = color(255, 105, 180);
    let stripeCount = 30;
    let stripeHeight = 240 / stripeCount;
    for (let y = 120; y < 360; y += stripeHeight) {
    let inter = map(y, 120, 360, 0, 1);
    let c = lerpColor(colorA, colorB, inter);
    fill(c)
      rect(140, y, 130, stripeHeight);
    
    }
    
    strokeWeight(1);
    stroke(0)
    noFill();
    rect(140,120,130,240);
    
    fill("pink");
    rect(140,60,130,60);
    
    fill("grey");
    rect(180,90,50,10);
    rect(180,100,50,10);
    
    rect(195,95,20,10);
    
    line(140,100,270,100);
    
    
    
  }