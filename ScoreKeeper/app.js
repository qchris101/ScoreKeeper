const p1Btn = document.querySelector("#p1btn")
const p2Btn = document.querySelector("#p2btn")
const p1Display =document.querySelector("#p1Display")
const p2Display =document.querySelector("#p2Display")
const resetGame = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playto")

let p1Score = 0
let p2Score = 0
let winningScore = 5
let gameOver = false


winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset()
})

p1Btn.addEventListener('click', function(){
   if (!gameOver){
       p1Score+=1 
       if (p1Score === winningScore){
        gameOver = true
       
       }
       p1Display.textContent = p1Score
   } 
    
})

p2Btn.addEventListener('click', function(){
   if (!gameOver){
       p2Score+=1 
       if (p2Score === winningScore){
        gameOver = true
       }
       p2Display.textContent = p2Score
   } 
    
})

resetGame.addEventListener("click", reset)

function reset (){
    p1Score = 0
    p2Score = 0
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    gameOver = false
}