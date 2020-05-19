document.addEventListener("DOMContentLoaded", () => {
  //const scoreDisplay = document.getElementById('score')
  const width = 28;
  let score = 0
  const maze = document.querySelector(".maze");

  var r1 = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  var r2 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r3 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r4 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r5 = [
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1
  ];
  var r6 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r7 = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  var r8 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r9 = [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ];
  var r10 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r11 = [
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1
  ];
  var r12 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r13 = [
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1
  ];
  var r14 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r15 = [
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1
  ];
  var r16 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r17 = [
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1
  ];
  var r18 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r19 = [
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1
  ];
  var r20 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r21 = [
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1
  ];
  var r22 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r23 = [
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1
  ];
  var r24 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r25 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r26 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r27 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  var r28 = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];

  var myArray = [].concat(
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
    r16,
    r17,
    r18,
    r19,
    r20,
    r21,
    r22,
    r23,
    r24,
    r25,
    r26
  );

  //console.log(d)

  function sortArray() {
    var i, j, k;
    for (i = myArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray[i];
      myArray[i] = myArray[j];
      myArray[j] = k;
    }
  }
  sortArray();

  const layout = [].concat(r1, r2, myArray, r27, r28);

  // var myArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28);
  // shuffle(myArray);

  //const layout = [].concat.shuffle(myArray);

  /*
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
    1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,
    1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,
    1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,
    1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,
    1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,
    1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,
    1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,
    1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,
    1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,
    1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  */

  // 0 - empty
  // 1 - wall

  const squares = [];

  //create your board--> need to change to randomized board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      maze.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("empty"); //not needed in MVP
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
        // } else if (layout[i] === 2) {
        //   squares[i].classList.add('ghost-lair')
        // } else if (layout[i] === 3) {
        //   squares[i].classList.add('power-pellet') //not needed in MVP
      }
    }
  }
  createBoard();

  //create Characters
  //draw pacman onto the board
  let pacmanCurrentIndex = 729;
  squares[pacmanCurrentIndex].classList.add("pac-man");

  let judyCurrentIndex = 54;
  squares[judyCurrentIndex].classList.add("judy");

  //let blinkyCurrentIndex = 32
  //squares[blinkyCurrentIndex].classList.add('blinky')

  //let pinkyCurrentIndex = 280
  //squares[pinkyCurrentIndex].classList.add('pinky')

  //let inkyCurrentIndex = 516
  //squares[inkyCurrentIndex].classList.add('inky')

  //let claydeCurrentIndex = 730
  //squares[pinkyCurrentIndex].classList.add('clyde')

  //get the coordinates of pacman on the maze with X and Y axis
  // function getCoordinates(index) {
  //   return [index % width, Math.floor(index / width)]
  // }

  // console.log(getCoordinates(pacmanCurrentIndex))

  //move pacman
  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man");
    switch (e.keyCode) {
      case 37:
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= 1;
        if (squares[pacmanCurrentIndex - 1] === squares[363]) {
          pacmanCurrentIndex = 391;
        }
        break;
      case 38:
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;
        break;
      case 39:
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += 1;
        if (squares[pacmanCurrentIndex + 1] === squares[392]) {
          pacmanCurrentIndex = 364;
        }
        break;
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;
        break;
      case 90:
        if (
          pacmanCurrentIndex + width <
          width *
            width /*&&
          !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')*/
        )
          pacmanCurrentIndex = 729;
        break;
    }
    squares[pacmanCurrentIndex].classList.add("pac-man");
    //pacDotEaten()
    powerPelletEaten(); //rescue 小倩
    checkForGameOver();
    checkForWin();
  }
  document.addEventListener("keyup", movePacman);

  /* what happens when you eat a pac-dot
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }*/

  // what happens when you eat a power-pellet aka rescue 小倩
  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("judy")) {
      score += 2000;
      scoreDisplay.innerHTML = score;
      // ghosts.forEach(ghost => ghost.isScared = true)
      //setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove("judy");
    }
  }

  /*//make the ghosts stop flashing
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }*/

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      //this.isScared = false
      this.timerId = NaN;
    }
  }

  //树精姥姥
  ghosts = [
    new Ghost("blinky", 60, 999),
    new Ghost("pinky", 248, 999),
    new Ghost("inky", 516, 999),
    new Ghost("clyde", 661, 999)
  ];

  //draw my ghosts onto the maze
  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  //move the Ghosts randomly
  ghosts.forEach((ghost) => moveGhost(ghost));

  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
      //if the next square your ghost is going to does not have a ghost and does not have a wall
      if (
        !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
        !squares[ghost.currentIndex + direction].classList.contains("wall")
      ) {
        //remove the ghosts classes

        squares[ghost.currentIndex].classList.remove(ghost.className);
        squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
        //move into that space
        ghost.currentIndex += direction;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        //else find a new random direction
      } else direction = directions[Math.floor(Math.random() * directions.length)];

      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scared-ghost");
      }

      //if the ghost is currently scared and pacman is on it
      /*if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }*/
      checkForGameOver();
    }, ghost.speed);
  }

  //check for a game over
  function checkForGameOver() {
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("Game Over! Try again!");
      }, 500);
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score >= 1000) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("You're very handsome. You have WON!");
      }, 500);
    }
  }
})
