
let msg = document.getElementById("msg")
console.log(msg)
let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".game-btn")
let userScoreValue = document.getElementById("your-score")
let compScoreValue = document.querySelector("#computer-score")

//winning patterns you-rock , comp-scissor you win 
// you-scissor comp-paper you win
// you-paper comp-rock you win

//rock-scissor rock wins , scissor-paper scissor wins , paper-rock paper wins    same action->draw 


//for Computers Choice we will generate that randomly and do every task by making functions so if in case we need them in other functions we can use them thats why try to generate function for each step 

const computerChoice = ()=> {
    // array chosen because we can access elements by index which string methods dont provide easily so array is better choice as we will generate random index which can be used on this array to get element from that randomIndex to print a random value thats why 
     const choices = ["rock" , "paper" , "scissor"]
    //  Math.random() // yeh Math.random me math ek class ha aur math.random ek func ha joh 0 se 1 value generate krta ha aur agar tume lets say 0 se 9 chaiye toh math.random() me 10 se multiplykrdo ese hota ha here we need 0 se 2 as 3 elements ha toh 0 se 2 indexing hojayegi choices array me isliye Math.random()*3 krdenge and iska floor le lenge
     const randomIndex = Math.floor(Math.random()*3)
     return choices[randomIndex]
}

const gameDraw = ()=> {
    console.log("Game was Draw")
    msg.innerText = "Game Was Draw, Play Again"
    msg.style.backgroundColor = "red"
}

const showWinner = (userWin , userChoice , compChoice) => {
     if(userWin) {
         userScore++;
         userScoreValue.innerText = userScore
         console.log("you win")
         msg.innerText = `You win! Your ${userChoice} beats ${compChoice} `
         msg.style.backgroundColor = "green"
     }
     else {
         compScore++;
         compScoreValue.textContent = compScore
         console.log("You lost!")
         msg.innerText = `You lose! Your ${compChoice} beats your ${userChoice}`
         msg.style.backgroundColor = "red";
     }
}


const playGame = (userChoice)=> {
      console.log(`User Choice: ${userChoice}`)
      const compChoice = computerChoice()
      console.log(`Computer Choice: ${compChoice}`)
     
     if(userChoice === compChoice) {
         gameDraw()
     }
     else {
         let userWin = true;
         if(userChoice === "rock") {
             //scissor , paper
             userWin = compChoice ==="paper"?false:true;
         }
         else if(userChoice === "paper") {
             //rock , scissor
             userWin = compChoice ==="scissor"?false:true;
         }
         else {
             //rock , paper
             userWin = compChoice === "rock"? false:true;
         }
         showWinner(userWin , userChoice , compChoice)
     }

}

choices.forEach((choice)=> {
      choice.addEventListener("click" , ()=> {
        // with this u can get ids of all choice 
        //   const userChoice = choice.getAttribute("id")
        //   console.log("clicked" , userChoice)
         const userChoice = choice.getAttribute("id")
         playGame(userChoice)
      })
})

