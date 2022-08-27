const diceElement = document.getElementsByClassName('dice')[0];
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
let cscorePlayerOne = document.getElementById('cscore--0');
const cscorePlayerTwo = document.getElementById('cscore--1');
let currentScore = 0;
let activePlayer = 0;
  document.getElementsByClassName('btn--roll')[0].addEventListener('click',()=>{
    const chanse = Math.trunc(Math.random()*6)+1;
    //1biad
    if(chanse==1){
    diceElement.src = "./dices/dice-1.png";
    if(activePlayer===0){
    cscorePlayerOne.textContent = 0;
    }
    else{
    cscorePlayerTwo.textContent = 0;
    }
       activePlayer = (activePlayer === 0 ? 1 : 0);
       currentScore=0;
       document.getElementsByClassName('score')[0].classList.toggle('active');
       document.getElementsByClassName('score')[1].classList.toggle('active');
       diceElement.src = "./dices/dice-0.png";
    }
    //1nayad
    else{
    if(chanse==2)
    diceElement.src = "./dices/dice-2.png";
    else if(chanse==3)
    diceElement.src = "./dices/dice-3.png";
    if(chanse==4)
    diceElement.src = "./dices/dice-4.png";
    else if(chanse==5)
    diceElement.src = "./dices/dice-5.png";
    else if(chanse==6)
    diceElement.src = "./dices/dice-6.png";
    currentScore += chanse;
    if(activePlayer==0){
        cscorePlayerOne.textContent = currentScore;
    }
    else if(activePlayer==1){
        cscorePlayerTwo.textContent = currentScore;
    }
    }
})

document.getElementById('nextPlayer').addEventListener('click',()=>{
    if(activePlayer===0){
        let ans = Number(scorePlayerOne.textContent);console.log(ans);
        ans += currentScore;
        scorePlayerOne.textContent=ans;
        currentScore=0;
        cscorePlayerOne.textContent = currentScore;
        activePlayer = (activePlayer === 0 ? 1 : 0);
        }
        else{
            let ans = Number(scorePlayerTwo.textContent);console.log(ans);
            ans += currentScore;
            scorePlayerTwo.textContent=ans;
            currentScore=0;
            cscorePlayerTwo.textContent = currentScore;
            activePlayer = (activePlayer === 0 ? 1 : 0);
        }
    document.getElementsByClassName('score')[0].classList.toggle('active');
    document.getElementsByClassName('score')[1].classList.toggle('active');    
    whogame();
    diceElement.src = "./dices/dice-0.png";
})
document.getElementById('startgame').addEventListener('click',endgame)
function endgame(){
    document.getElementsByClassName('score')[0].classList.add('active');
    scorePlayerOne.textContent=0;scorePlayerTwo.textContent=0;cscorePlayerOne.textContent=0;cscorePlayerTwo.textContent=0;currentScore = 0;activePlayer = 0;
}
function whogame(){
    let ans1 = Number(scorePlayerTwo.textContent);
    let ans0 = Number(scorePlayerOne.textContent)
    if(ans0>50){
        alert(ans0+" Player One win!😎");
        endgame();
    }
    else if(ans1>50){
        alert(ans1+" Player Two win!😎");
        endgame();
    }
}