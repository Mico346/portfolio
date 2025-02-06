function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
    let x = mouseX
    let y = mouseY
    if (mouseIsPressed){
    let r = random(200,255);
    let g = random(100,150);
    let b = random(100,230);
    fill(r,g,b);}
    rect(x,y,x,y);
    
    let eyeSize = x/6;
    let eyeY = y+y/3;
    let leftEyeX =x+x/1.24;
    let rightEyeX=x+x/6;
    
    let highlightSize = eyeSize/4;
    let highlightY = eyeY/1.02;
    let lefthighlightX = leftEyeX/1.02;
    let righthighlightX = rightEyeX/1.02;
    
    let mouthSize = x/6;
    let mouthY = y+y/1.5
    let leftmouthX = x+x/2.5
    let rightmouthX = x+x/1.8
    
  
    push()
    fill(0);
    ellipse(leftEyeX,eyeY,eyeSize,eyeSize)
    ellipse(rightEyeX,eyeY,eyeSize,eyeSize)
    pop()
    
    push()
    fill("white")
  ellipse(lefthighlightX,highlightY,highlightSize,highlightSize)
    ellipse(righthighlightX,highlightY,highlightSize,highlightSize)
    pop()
    
    push()
    noFill()
    arc(leftmouthX, mouthY, 20, mouthSize, 0,PI );
    arc(rightmouthX,mouthY,20,mouthSize,0,PI,OPEN);
    pop()
    
   
    
    
    
    
  }