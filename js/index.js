let firstCard = 6
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Woohoo! You Black Jack")
    hasBlackJack = true
} else {
    console.log("You are out of the game")
    isAlive = false
}

console.log(hasBlackJack)