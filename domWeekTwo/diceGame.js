// Rules

// single player dice
// you roll a dice - if you score 1 , you lose
//if you are on 20 and roll a 1, you lose. You do not win.
// if you score 21 or more, you win


// Two player dice
// you roll a dice and if you score 1 then you lose
// if you score 21 or more, then you win
// you can hold your roll and  keep your score,
// whilst passing the roll to the other player

// TODO Generate a dice roll, random number, from 1 to 6



let max = 6;
let min = 1;
// let number = 

let result = document.getElementById("result")
let win = document.getElementById("winMessage")
let lose = document.getElementById("loseMessage")
let message = document.getElementById("message")
let btn = document.getElementById("roll")
let reset = document.getElementById("reset")


    let clicks = 0;
    let go =0;
   

const clickCounter = () => {
            go++
        // turns.value = clicks++;
            if (go <= 5) {
                message.textContent = ("you had " + go + " rolls")
            }    else {
                message.textContent = ("all your rolls are used up. Play again.")
            }
            return go;
            console.log("clicking")

    }



const numbers = [1]
let savedNumbers = [];
let totalRolls = 0;
let winningNum = 21;
// let sum = 

const rolls = () => {
    for (const number of numbers) {

        let number = Math.floor(Math.random() * (+max - +min) +min)
         result.textContent = "Number you rolled is: " + number
             
             console.log(number)
            
             savedNumbers.push(number)
             console.log(savedNumbers)
             let sum = savedNumbers.reduce((a,b)=>a+b)
             if (savedNumbers.length < 5) {
                 console.log("saving numbers")
             } else if (savedNumbers.length = 5) {
                 result.textContent = "Total rolls is: " + sum 
                 console.log("reached rolls limit")
             } else if (savedNumbers.length = 5){ 
                 result.textContent = "Total rolls is: " + sum + " So you lost!"
             } else {
                 savedNumbers = []
             }

 }

}



btn.addEventListener("click", () => {
    clickCounter()
    rolls()

})




const resetGo = () => {
    go = 0;
    message.textContent = " "
    result.textContent = " "
    savedNumbers = []


}

reset.addEventListener("click", () => {
    resetGo()
})


// TODO Rule 1: if you score 1, you lose. If that occurs - lose
// TODO Rule 2: 21 or more wins game for you -win 

// logic behind game is important 


    // btn.addEventListener("click", () => {
    //     clickCounter()


    //     let number = Math.floor(Math.random() * (+max - +min) +min)
    //         result.textContent = "Number you rolled is:" + number

        // let rolledNumbers = 
        // totalScore.textContent = "Your total roll score is:" + rolledNumbers
        // console.log(`number is ${result.textContent}`);
        // if (result.textContent =1) {
        //     lose.textContent = "you lose"
        // } else if (totalScore.textContent =20 && (result.textContent= 1)){
            
        // }
//     }
// )

            // switch (clickCounter) {
            //     case 1:
            //     case 2:
            //     case 3:
            //     case 4:
            //         message.textContent("Keep rolling.")
            //     case 5:
            //         message.textContent("You have used all your turns.")
            // }
            // return go;




// const winLose = () => {
    
//     if (savedNumbers.values == winningNum) {
//         
//    } else if ((savedNumbers.values == 20) & (savedNumbers[4] == 1)) {
//         lose.textContent = "you rolled 1 on a score of 20 so you lost!"
//    } else {
//         lose.textContent = "Total rolls is not 21 so you lost!"
//    }

// }
                    // if (savedNumbers.length < 5) {
                    //     console.log("saving numbers")
                    // } else if (savedNumbers.length = 5) {
                    //     result.textContent = "Total rolls is: " + sum 
                    //     console.log("reached rolls limit")
                    // } else if (savedNumbers.length = 5){ 
                    //     result.textContent = "Total rolls is: " + sum + " So you lost!"
                    // } else {
                    //     savedNumbers = []
                    // }
                
                    // return sum  
                           
                
    
                // }
                
                
                // Rule 2: 21 or more wins game for you -win 
                
                
                // // Rule 1: if you score 1, you lose. If that occurs - lose
                // const one = () => {
                //     // for (index=0; index <savedNumbers.length; index++) {
                //         if (savedNumbers !== 1){  
                //             lose.textContent = " "       
                //         } else {
                //             lose.textContent = "you rolled 1 so you lost!"
                //         }    
                
                // }
    // if (player.innerText="player 1") {
    //     player.innerText="player 2"
    // } else {
    //     player.innerText="player 1"
    // }





    // btn.addEventListener("click", () => {
    //     clickCounter()


    //     let number = Math.floor(Math.random() * (+max - +min) +min)
    //         result.textContent = "Number you rolled is:" + number

        // let rolledNumbers = 
        // totalScore.textContent = "Your total roll score is:" + rolledNumbers
        // console.log(`number is ${result.textContent}`);
        // if (result.textContent =1) {
        //     lose.textContent = "you lose"
        // } else if (totalScore.textContent =20 && (result.textContent= 1)){
            
        // }
//     }
// )

            // switch (clickCounter) {
            //     case 1:
            //     case 2:
            //     case 3:
            //     case 4:
            //         message.textContent("Keep rolling.")
            //     case 5:
            //         message.textContent("You have used all your turns.")
            // }
            // return go;