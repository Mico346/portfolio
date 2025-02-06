function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    background("white");
    fill("pink");
    ellipse(200, 90, 200, 150);
    fill("black");
    ellipse(160, 80, 15, 20);
    ellipse(240, 80, 15, 20);
    fill("white");
    ellipse(157, 77, 10, 10);
    ellipse(237, 77, 10, 10);
    fill(255, 150, 120);
    ellipse(200, 120, 50, 50);
    fill(255, 220, 225);
    ellipse(200, 120, 20, 20);
    fill(255, 20, 100);
    ellipse(150, 115, 30, 20);
    ellipse(250, 115, 30, 20);
  
    fill(255, 140, 0); 
    stroke(0);
    strokeWeight(2);
    rect(140, 260, 60, 40);
  
    fill(255, 204, 0); 
    ellipse(180, 280, 15, 15);
    rect(170,250,30,10);
    
    
    fill(180)
    stroke(0);
    strokeWeight(2);
    rect(10, 265, 130, 30);
  
    stroke(0);
    fill(180);
    for (let i = 10; i <= 130; i += 15) {
      triangle(i, 255, i + 5, 265, i - 5, 265);
      triangle(i, 305, i + 5, 295, i - 5, 295)
    }
    
    
    stroke(0);
    strokeWeight(2);
    line(255, 270, 200, 290);
    line(255, 270, 200, 250);
    
    stroke(0);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(250, 155); 
    vertex(260, 200);
    vertex(250, 220);
    vertex(260, 240);
    vertex(250, 260);
    vertex(260, 280);
    vertex(250, 300);
    vertex(260,320);
    vertex(250,340);
    vertex(260,360);
    vertex(250,380);
    endShape();
    
    
    line(100,380,300,380);
    line(100, 380, 100, 500);
    line(300, 380, 300, 500)
    
    rect(80,500,30,50);
    rect(290,500,30,50);
    fill("white")
    ellipse(80,550,60,25);
    ellipse(320,550,60,25);
  
  
  }
  