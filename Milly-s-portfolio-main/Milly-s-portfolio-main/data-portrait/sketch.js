let fluteData = [
    {duration: 30, mood: "relaxed", bpm: 80},
    {duration: 45, mood: "focused", bpm: 100},
    {duration: 0, mood: "tired", bpm: 0},
    {duration: 0, mood: "tired", bpm: 0},
    {duration: 40, mood: "focused", bpm: 90},
    {duration: 35, mood: "relaxed", bpm: 85},
    {duration: 50, mood: "energetic", bpm: 110},
  
  ];
  
  let index = 0;
  let animationSpeed = 30;
  let frameCounter = 0;
  
  function setup() {
    createCanvas(600, 600);
    background(255);
  }
  
  function draw() {
    background(255);
    
    
    if (index >= fluteData.length) {
      index = 0;
      frameCounter = 0;
      frameCount = 0;
    }
  
    for (let i = 0; i <= index && i < fluteData.length; i++) {
      let x = 50 + i * 65;
      let y = height / 2;
      let noteSize = 20;
      let stickLength = map(frameCount, 0, 60, 0, fluteData[i].duration * 2);
      
      
      let moodColor;
      if (fluteData[i].mood === "relaxed") {
        moodColor = color(173, 216, 230);
      } else if (fluteData[i].mood === "focused") {
        moodColor = color(255, 165, 0);
      } else if (fluteData[i].mood === "energetic") {
        moodColor = color(255, 255, 0);
      } else if (fluteData[i].mood === "tired") {
        moodColor = color(169, 169, 169);
      }
  
      
      fill(moodColor);
      stroke(0);
      strokeWeight(2);
      ellipse(x, y, noteSize, noteSize * 1.5);
  
     
      if (fluteData[i].duration > 0) {
        stroke(0);
        strokeWeight(4);
        line(x + noteSize / 2, y, x + noteSize / 2, y - stickLength);
        
      }
  
      
      let bpmLength = map(fluteData[i].bpm, 60, 120, 5, 15);
      stroke(0);
      line(x, y + noteSize * 1.5, x, y + noteSize * 1.5 + bpmLength);
    }
       
  
    if (frameCounter % animationSpeed === 0 && index < fluteData.length) {
      index++;
    }
    frameCounter++;
    
  }
  