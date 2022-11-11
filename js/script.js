//Build a game of battling alien spaceships

//start with six alien ship

//player ship properties: 
// hull - 20
// firepower - 5
// accuracy - .7

//alien ship properties: 
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8

//battling round:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again … etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed

//main class with constructor

class Ship {
    constructor(name, hull, firepower, accuracy,isAlive) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
      this.isAlive = isAlive
    }

    attack(target) {
      let ranNum = Math.random();
      //alert(`Accuracy threshold is ${ranNum}`);
      if (ranNum < this.accuracy) {
        //target defeted!
          alert(target.name + ` been direct hit!`);
          //console.log(target)
          target.hull = target.hull - this.firepower;
          alert(target.name + ` has ${target.hull} hull points left.`);
          if (target.hull <= 0) {
              target.isAlive = false;
              alert(target.name + ` is destroyed!`);
          }
      } else {
        //target escaped
        alert(this.name + ` missed the target ${target.name}!`);
      }

  }
}



//Define playership

    let playerShip = new Ship("UssWarrior", 20, 5, .7, true);

   console.log(playerShip);

//Main function that will return a random number between a specified range source https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    const randomNum = (min, max) => {
         min = Math.ceil(min)
         max = Math.floor(max)
        return Math.floor (Math.random() * (max - min +1)) + min
        
      }
      
      //create and define Alienship
      let alienShips = []

      const alienShip = () => {
        for(let i = 1; i <= 6; i++){
          let name = `Alienship ${i}`
          let hull = randomNum(3, 6)
          let firepower = randomNum(2, 4)
          let accuracy = randomNum(6, 8)/10
          let isAlive = true
          let enemy = new Ship(name, hull, firepower, accuracy, isAlive)
          console.log(enemy)
          alienShips.push(enemy)
        }


      } 
      
      alienShip();
      
  

      const battle = () => {

        while(true)
        {
          let playerChoice = prompt("Attack alien ship or quit?", "(a)ttack || (q)uit")
          if(playerChoice === "a") {
            
            if  (playerShip.isAlive || alienShips[0].isAlive) {
              playerShip.attack(alienShips[0]);
              if (alienShips[0].isAlive) {
                alienShips[0].attack(playerShip);
              }
              else
              {
                alienShips.shift();
              }
              if (!playerShip.isAlive) {
                alert(`${playerShip.name} lost the game.`);
                break;
              } 
              else if (alienShips.length === 0){  
                alert(`${playerShip.name} won the game.`);
                break;
              }
          }
          } 
          else if (playerChoice === "q") {
            break;
          } else {
            alert("please select correct choice")
          }
        }
    }
    
    battle();
     