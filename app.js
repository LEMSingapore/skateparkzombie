document.addEventListener('DOMContentLoaded', () => {

  //const scoreDisplay = document.getElementById('score')
  //const mySound 
  const width = 28
  let score = 0
  const maze = document.querySelector('.maze')
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,3,1,
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

  // 0 - empty
  // 1 - wall

  const squares = []

  //start game track
  //mySound = new sound("gamaMusic-cut.mp3")

  //create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      maze.appendChild(square)
      squares.push(square)

      //add layout to the board
      if(layout[i] === 0) {
        squares[i].classList.add('empty') //not needed in MVP 
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
     // } else if (layout[i] === 2) {
     //   squares[i].classList.add('ghost-lair')
     // } else if (layout[i] === 3) {
     //   squares[i].classList.add('power-pellet') //not needed in MVP 
      }
    }
  }
  createBoard()


  //create Characters
  //draw pacman onto the board
  let pacmanCurrentIndex = 729
  squares[pacmanCurrentIndex].classList.add('pac-man')

  let judyCurrentIndex = 54
  squares[judyCurrentIndex].classList.add('judy')


  let blinkyCurrentIndex = 32
  squares[blinkyCurrentIndex].classList.add('blinky')

  let pinkyCurrentIndex = 280 //pink
  squares[pinkyCurrentIndex].classList.add('pinky')

  let inkyCurrentIndex = 516 //green
  squares[inkyCurrentIndex].classList.add('inky')

  let claydeCurrentIndex = 735 // orange
  squares[pinkyCurrentIndex].classList.add('clyde')

  //get the coordinates of pacman on the maze with X and Y axis
  // function getCoordinates(index) {
  //   return [index % width, Math.floor(index / width)]
  // }

  // console.log(getCoordinates(pacmanCurrentIndex))

 

  //move pacman
  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    switch(e.keyCode) {
      case 37:
        if(
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
          )
        pacmanCurrentIndex -= 1
        if (squares[pacmanCurrentIndex -1] === squares[363]) {
          pacmanCurrentIndex = 391
        }
        break
      case 38:
        if(
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
          ) 
        pacmanCurrentIndex -= width
        break
      case 39:
        if(
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += 1
        if (squares[pacmanCurrentIndex +1] === squares[392]) {
          pacmanCurrentIndex = 364
        }
        break
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += width
        break
      case 90:
        if (
          pacmanCurrentIndex + width < width * width /*&&
          !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')*/
        )
        pacmanCurrentIndex = 729
        break
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    //pacDotEaten()
    powerPelletEaten()//rescue 小倩
    checkForGameOver()
    checkForWin()
  }
  document.addEventListener('keyup', movePacman)

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
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
      score +=1000
      scoreDisplay.innerHTML = score
      // ghosts.forEach(ghost => ghost.isScared = true)
      //setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }

  /*//make the ghosts stop flashing
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }*/

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      //this.isScared = false
      this.timerId = NaN
    }
  }

  //树精姥姥
  ghosts = [
    new Ghost('blinky', 182, 999),
    new Ghost('pinky', 183, 999),
    new Ghost('inky', 208, 999),
    new Ghost('clyde', 209, 999)
    ]

  //draw my ghosts onto the maze
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })

  //move the Ghosts randomly
  ghosts.forEach(ghost => moveGhost(ghost))

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      //if the next square your ghost is going to does not have a ghost and does not have a wall
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move into that space
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      //if the ghost is currently scared and pacman is on it
      /*if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }*/
    checkForGameOver()
    }, ghost.speed)
  }

  //check for a game over
  function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ alert("You're an idiot! Game Over! Try again!"); }, 500)
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score >= 1000) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ alert("You're very handsome. You have WON!"); }, 500)
    }
  }
})
