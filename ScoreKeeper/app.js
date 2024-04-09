// const p1Btn = document.querySelector("#p1btn")
// const p2Btn = document.querySelector("#p2btn")
// const p1Display =document.querySelector("#p1Display")
// const p2Display =document.querySelector("#p2Display")
const resetGame = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playto")

 const p1 = {
    score: 0,
    button: document.querySelector("#p1btn"),
    display: document.querySelector("#p1Display")
 }

 const p2 = {
    score: 0,
    button: document.querySelector("#p2btn"),
    display: document.querySelector("#p2Display")
 }
 
// let p1Score = 0
// let p2Score = 0
let winningScore = 5
let gameOver = false

function updateScore (player, opponent){
    if (!gameOver){
        player.score+=1 
        if (player.score === winningScore){
         gameOver = true
        player.display.classList.add("has-text-success")
        opponent.display.classList.add("has-text-danger")
        player.button.disabled = true
        opponent.button.disabled = true
        }
        player.display.textContent = player.score
    } 
}


winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset()
})
 
p1.button.addEventListener('click', function(){
//    if (!gameOver){
//        player.score+=1 
//        if (player.score === winningScore){
//         gameOver = true
//        player.display.classList.add("has-text-success")
//        opponent.display.classList.add("has-text-danger")
//        player.button.disabled = true
//        opponent.button.disabled = true
//        }
//        player.display.textContent = player.score
//    } 
    updateScore(p1,p2)
})

p2.button.addEventListener('click', function(){
//    if (!gameOver){
//        p2Score+=1 
//        if (p2Score === winningScore){
//         gameOver = true
//         p2Display.classList.add("has-text-success")
//         p1Display.classList.add("has-text-danger")
//         p1Btn.disabled = true
//         p2Btn.disabled = true
//        }
//        p2Display.textContent = p2Score
//    } 
    updateScore(p2,p1)
})

resetGame.addEventListener("click", reset)

function reset (){
    gameOver = false
    for (p of [p1,p2]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove("has-text-success", "has-text-danger")
        p.button.disabled = false
    }
    // p1.score = 0
    // p2.score = 0
    // p1.display.textContent = p1.score
    // p2.display.textContent = p2.score
    // p1.display.classList.remove("has-text-success", "has-text-danger")
    // p2.display.classList.remove("has-text-success", "has-text-danger")
    // p1.button.disabled = false
    // p2.button.disabled = false
}