let time = 0;
let second = 0;
let minute = 0;
let incenseHeight = 350;
let incenseOriginalHeight = 350;
let flameHeight = 20;
let flameWidth = 10;
let incenseX = 280;
let incenseY = 500;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");
  time += deltaTime;
  // print(time)

  if (time >= 1000) {
    time = 0;
    second = second + 1;
    
  }
  print(second);
  if (second >= 60) {
    second = 0;
    minute = minute + 1;
  }

  print(minute);

  if (second < 60) {
    incenseHeight = incenseOriginalHeight - (incenseOriginalHeight / 60) * second;
  } else {
    incenseHeight = 0;
  }

  if (incenseHeight > 0) {
    fill(130, 70, 20);
    rect(incenseX - 5, incenseY - incenseHeight, 10, incenseHeight);
  }

  let flameY = incenseY - incenseHeight - flameHeight / 2;
  if (incenseHeight > 0) {
    fill(255, 165, 0);
    ellipse(incenseX, flameY, flameWidth, flameHeight);

    flameHeight = 20 + random(-3, 3);
    flameWidth = 10 + random(-1, 1);
  }
   
}
