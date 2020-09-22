// Two player dice
// you roll a dice and if you score 1 then you lose
// if you score 21 or more, then you win
// you can hold your roll and  keep your score,
// whilst passing the roll to the other player

// TODO Generate a dice roll, random number, from 1 to 6
// Rules

// single player dice
// you roll a dice - if you score 1 , you lose
//if you are on 20 and roll a 1, you lose. You do not win.
// if you score 21 or more, you win

//on 5th roll, roll button disappear, only resest button stays


let result = document.getElementById("result")
let win = document.getElementById("winMessage")
let lose = document.getElementById("loseMessage")
let message = document.getElementById("message")
let player = document.getElementById("player")
let btn = document.getElementById("roll")
let reset = document.getElementById("reset")


let go =0;
let playerScore = 0 

const clickCounter = () => {
            go++
        // turns.value = clicks++;
            if (go <= 4) {
                
                message.textContent = ("you had " + go + " rolls")
            }  else if (go = 4) {
                message.textContent = ("you had " + (go + 1) + " rolls. None left")
                btn.remove()
                // winLose()
            } else {
                message.textContent = ("all your rolls are used up. Play again.")
                btn.remove()
                
            }
            return go;
            console.log("clicking")

    }

const playerTwo = () => {

}


// * (+max - +min) +min)
const rolls = () => {
    
            let number =  Math.ceil(Math.random () * 6)
            

                
                if (number !== 1) {
                    console.log("saving numbers")
                    playerScore += number;
                    result.textContent = "Number you rolled is: " + number + " total score is: " + playerScore
                    
                } else if ((playerScore == 20) & (number == 1)) {
                    result.textContent = "You rolled 1 on a score of 20 so you lost!" + number + " total score is: " + playerScore
                   
                }
                else {
                    result.textContent = "You rolled " + number + " so you lost! Total score is: " 
                    
                }

                if (playerScore >= 21) {
                    win.textContent = "Total rolls is: " + playerScore + " so you win!"
                    btn.remove()
                   
                }
}           


btn.addEventListener("click", () => {
    // one()
    clickCounter()
    rolls()
    

})


const resetGo = () => {
    go = 0;
    playerScore = 0;
    message.textContent = " " 
    result.textContent = " "
    lose.textContent = " "
    win.textContent = " "
    document.body.append(btn)
}

reset.addEventListener("click", () => {
    resetGo()
})


// let max = 6;
// let min = 1;
// const numbers = [1]
// let savedNumbers = [];
// let totalRolls = 0;
// let winningNum = 21;

            
                // console.log(number)
                // savedNumbers.push(number)
                // console.log(savedNumbers)
                // let sum = savedNumbers.reduce((a,b)=>a+b)
                