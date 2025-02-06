let scene = 1;

let bgImg1, bgImg2;
let playerImg, playerAniImg1, playerAniImg2;
let player;
let dialog;

let sceneOffset = 0;

let boxImg;
let showBox = false;
let getBox = false;

let showStairs = true
let neighborImg;
let showNeighbor;
let adImg, dresseropenImg, hammerImg;
let getAd = false;
let showDresser = false;
let getHammer = false;

let juicerImg;
let showJuicer = false;
let hiddenGlass = false;

let cobwebImg;
let getCobweb = false;
let hiddenWin = false;

let paperImg1, paperImg2;
let showPaper2 = false;
let spaperImg;
let printerImg;
let showPrinter = false;
let documentImg;
let showDocument = false;
let clockImg;
let showClock = false;
let end = false;

let drops = []

function preload() {
  bgImg1 = loadImage('assets/f11.png');
  bgImg2 = loadImage('assets/f3.png');
  playerImg = loadImage('assets/fronthong.png');
  playerAniImg1 = loadImage('assets/left1.png');
  playerAniImg2 = loadImage('assets/left2.png');
  boxImg = loadImage('assets/lockbox2.png')
  adImg = loadImage('assets/guangao.png')
  dresseropenImg = loadImage('assets/dresseropen.png')
  hammerImg = loadImage('assets/hammer.png')
  neighborImg = loadImage('assets/neighbor.png')
  juicerImg = loadImage('assets/juicer2.png')
  cobwebImg = loadImage('assets/cobweb.png')
  paperImg1 = loadImage('assets/paper_machine.png')
  paperImg2 = loadImage('assets/paper_machine2.png')
  spaperImg = loadImage('assets/paper.png')
  printerImg = loadImage('assets/printer2.png')
  documentImg = loadImage('assets/document.png')
  clockImg = loadImage('assets/clock2.png')
}

function setup() {
  createCanvas(1200, 300)

  bgImg1.resize(0, height)
  bgImg2.resize(width, 0)
  playerImg.resize(playerImg.width / 2, 0)
  playerAniImg1.resize(playerAniImg1.width / 2, 0)
  playerAniImg2.resize(playerAniImg2.width / 2, 0)
  boxImg.resize(boxImg.width / 2, 0)
  adImg.resize(adImg.width / 2, 0)
  dresseropenImg.resize(dresseropenImg.width / 2, 0)
  hammerImg.resize(hammerImg.width / 2, 0)
  neighborImg.resize(neighborImg.width / 2, 0)
  juicerImg.resize(juicerImg.width / 2, 0)
  cobwebImg.resize(cobwebImg.width / 2, 0)
  paperImg1.resize(paperImg1.width / 2, 0)
  paperImg2.resize(paperImg2.width / 2, 0)
  spaperImg.resize(spaperImg.width / 2, 0)
  printerImg.resize(printerImg.width / 2, 0)
  documentImg.resize(documentImg.width / 2, 0)
  clockImg.resize(clockImg.width / 2, 0)

  player = new Player(530, 100);
  dialog = new Dialog([
    "It's dark now, I need to go home.",
    "My home is on the second floor.",
    "Mom and Dad must have already made dinner and are waiting for me."
  ])
}

function draw() {
  background(88, 86, 82)

  noStroke();

  push();
  translate(sceneOffset, 0);
  image(bgImg1, 0, 0)
  fill(105, 106, 106)
  rect(800, 205, 420, 92)
  if (showBox) {
    image(boxImg, 443 - boxImg.width / 2, 154 - boxImg.height / 2)
  }
  pop()

  push();
  translate(-width + sceneOffset, 0);
  image(bgImg2, 0, 0)
  pop()

  if (scene == 2 && sceneOffset != width) {
    if (sceneOffset < width) {
      sceneOffset += 10;
      if (sceneOffset >= width) {
        dialog = new Dialog([
          "！！",
          "where is this place？this isn’t my home",
          "third floor？",
          "But I only went up one floor…",
          "I need to hurry downstairs.",
        ])
      }
    }
  }

  if (sceneOffset >= width) {
    if (!showStairs) {
      fill(88, 86, 82)
      rect(0, 0, 210, 203)
      if (showNeighbor) {
        image(neighborImg, 50, 100)
      }
    }

    fill(64, 29, 21)
    rect(231, 63, 68, 95)
    if (!getAd) {
      image(adImg, 0, 0)
    }

    if (showDresser) {
      image(dresseropenImg, 0, 0)
      if (!getHammer) {
        image(hammerImg, 0, 0)
      }
    }

    if (showJuicer) {
      image(juicerImg, 0, 0)
    }

    if (hiddenGlass) {
      fill(131, 126, 134)
      rect(571, 74, 101, 79)
    }

    if (getCobweb) {
      fill(88, 86, 82)
      rect(689, 10, 98, 106)
    }

    if (hiddenWin) {
      fill(88, 86, 82)
      rect(556, 57, 134, 115)
    }

    if (showPaper2) {
      image(paperImg2, 0, 0);
    }

    if (showPrinter) {
      image(printerImg, 0, 0)
    }

    if (showDocument) {
      image(documentImg, 0, 0)
    }

    if (showClock) {
      image(clockImg, 0, 0)
    }
  }

  player.update();
  player.display();

  if (getBox) {
    image(boxImg, 1170 - boxImg.width / 2, 260 - boxImg.height / 2)
  }

  for (let i = 0; i < drops.length; i++) {
    let dp = drops[i]
    dp.display()
    dp.update()
  }

  if (dialog) {
    dialog.display()
  }
}

function mouseReleased() {
  for (let i = 0; i < drops.length; i++) {
    let dp = drops[i]
    dp.mouseReleased()
  }
}

function mousePressed() {
  console.log(mouseX + ", " + mouseY)
  if (!dialog) {

    if (!showStairs) {
      for (let i = 0; i < drops.length; i++) {
        let dp = drops[i]
        dp.mousePressed()
      }

      if (!showClock && showPaper2 && dist(845, 73, mouseX, mouseY) < 40) {
        showClock = true;
      }

      if (showPaper2 && showClock && dist(405, 181, mouseX, mouseY) < 20) {
        showPaper2 = false;
        drops.push(new Drop(0, 0, 473, 183, 781, 181, 's_paper'))
      }

      if (!getCobweb && hiddenGlass && dist(mouseX, mouseY, 735, 45) < 40) {
        getCobweb = true;
        drops.push(new Drop(67, 200, 800, 247, 624, 115, 'cobweb'))
        dialog = new Dialog([
          'obtain a cobweb'
        ])
      }

      
      if (!getHammer && showDresser && dist(875, 168, mouseX, mouseY) < 35) {
        getHammer = true
        drops.push(new Drop(1070 - hammerImg.width / 2 - 266, 260 - boxImg.height - 125, 1086, 251, 623, 111, 'hammer'))
        dialog = new Dialog(["obtain a hammer"])
      }

      
      if (showJuicer && !showDresser && dist(875, 168, mouseX, mouseY) < 35) {
        showDresser = true
      }

      
      if (!getAd && dist(273, 113, mouseX, mouseY) < 40) {
        getAd = true
        drops.push(new Drop(1120 - adImg.width / 2 + 200, 260 - boxImg.height - 77, 995, 247, 404, 114, 'ad'))
        dialog = new Dialog(["obtain some leaflet"])
      }


    }

    if (scene == 2 && mouseX < 208 && showStairs && !showPrinter) {
      showStairs = false
      showNeighbor = true
      dialog = new Dialog([
        "Me: ！？",
        "Me: why are you here",
        "Me: who are you？",

        "Neighbor: i am the resident of this floor",
        "Neighbor:You must be here to ask me about the password.",

        "Me: ……no I accidentally ended up on the wrong floor. Do you know how to get downstairs?",

        "Neighbor: you can’t go home ",
        "Neighbor:you should help me first，so i will give you the password of the lockbox.",
        "Neighbor:There’s a printer in the hallway, but I don’t know how to use it. Go and help me print out a document.",
        "Neighbor:I’m sleepy. I’ll go take a nap for a while.",

        "Me: ……completely ignoring me",
        "Me: Looks like I have no choice but to do as he says for now.",
      ])
    }

    if (showBox && dist(443, 154, mouseX, mouseY) < 25) {
      showBox = false
      getBox = true;
      dialog = new Dialog([
        "obtain a lockbox——A locked box, needs a four-digit code.",
        "What could be inside?",
        "Perhaps it’s best to return home for now."
      ])
    }

    if (getBox && mouseX < 208) {
      scene = 2;
    }
  }

}

function keyPressed() {
  if (dialog) {
    dialog.keyPressed()
  } else {
    if (keyCode === LEFT_ARROW) {
      player.move(-3);
    } else if (keyCode === RIGHT_ARROW) {
      player.move(3);
    }
  }
}

function keyReleased() {
  player.move(0);
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = playerImg.width;
    this.h = playerImg.height;
    this.speed = 0;
    this.aniActive = true;
  }

  move(step) {
    this.speed = step;
  }

  update() {
    this.x += this.speed;

   
    this.x = constrain(this.x, -15, width - this.w + 15);

    if (frameCount % 10 == 0) {
      this.aniActive = !this.aniActive;
    }

    if (showPrinter && this.x < 180 && !dialog) {
      end = true
      dialog = new Dialog([
        " the stairs are accessible, but there’s still no way down the stairs…",
        "Anyway, I should get off this floor first.",
      ])
    }
  }

  display() {
    if (this.speed == 0) {
      image(playerImg, this.x, this.y)
    } else if (this.speed < 0) {
      image(this.aniActive ? playerAniImg1 : playerAniImg2, this.x, this.y)
    } else if (this.speed > 0) {
      push()
      translate(this.x + playerImg.width, this.y)
      scale(-1, 1)
      image(this.aniActive ? playerAniImg1 : playerAniImg2, 0, 0)
      pop()
    }
  }
}

class Dialog {
  constructor(texts) {
    this.texts = texts;
    this.index = 0;
  }

  display() {
    textAlign(CENTER, CENTER);
    fill(255)
    textSize(18)
    text(this.texts[this.index], width / 2, 250)
  }

  keyPressed() {
    if (key == 'Enter') {
      if (end) {
        this.index = 1;
      } else {
        this.index++;
        if (this.index == this.texts.length) {
          dialog = null

          if (scene == 1 && !showBox && !getBox) {
            showBox = true;
          }

          if (scene == 2 && !showStairs && showNeighbor) {
            showNeighbor = false
          }

          if (scene == 2 && showPrinter) {
            showNeighbor = false
            showStairs = true;
          }
        }
      }
    }
  }
}

class Drop {
  constructor(x, y, realX, realY, targetX, targetY, name) {
    this.x = x;
    this.y = y;
    this.initX = x;
    this.initY = y;
    this.realX = realX;
    this.realY = realY;
    this.targetX = targetX;
    this.targetY = targetY
    this.active = false;
    this.name = name;
    if (this.name == 'ad') {
      this.img = adImg;
    } else if (this.name == 'hammer') {
      this.img = hammerImg;
    } else if (this.name == 'cobweb') {
      this.img = cobwebImg;
    } else if (this.name == 'paper') {
      this.img = paperImg1;
    } else if (this.name == 's_paper') {
      this.img = spaperImg;
    }
    this.life = true;
  }

  display() {
    if (this.life) {
      image(this.img, this.x, this.y)
    }
  }

  update() {
    if (this.active && this.life) {
      this.x += mouseX - pmouseX;
      this.y += mouseY - pmouseY;
    }
  }

  mousePressed() {
    if (this.life && dist(this.realX, this.realY, mouseX, mouseY) < 25) {
      this.active = true;
    }
  }

  mouseReleased() {

    if (this.life && this.active) {
      if (dist(mouseX, mouseY, this.targetX, this.targetY) < 30) {
        if (this.name == 'ad') {
          showJuicer = true;
          dialog = new Dialog([
            "obtain some paste"
          ])
          this.life = false
        } else if (this.name == 'hammer') {
          hiddenGlass = true;
          this.life = false
        } else if (this.name == 'cobweb') {
          hiddenWin = true;
          this.life = false
          drops.push(new Drop(309, 67, 889, 247, 404, 117, 'paper'))
          dialog = new Dialog([
            'obtain paper machine'
          ])
        } else if (this.name == 'paper') {
          showPaper2 = true;
          this.life = false
        } else if (this.name == 's_paper') {
          showPrinter = true
          this.life = false

          showDocument = true
          showNeighbor = true;
          dialog = new Dialog([
            'obtain a document',
            "Me: house purchase agreement?",
            "Me: Address: Garden Residential Area, Unit 3, Room 201…",
            "Me: wait, this is my home？",

            "Neighbor: already done printing？",

            "Me: he grabbed the document……",

            "Neighbor: you did well，you can leave now",
            "Neighbor:The first digital of the password is 1",

            "Me: The first digital？ what about the others？",

            "Neighbor: I don’t know the rest either. You need to ask other people in this building",

            "Me: ...",

          ])

        }
      } else {
        this.x = this.initX;
        this.y = this.initY;
      }
    }
    this.active = false;
  }


}
