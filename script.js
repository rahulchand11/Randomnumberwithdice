const totalscore1 = document.querySelector(".scores-hold1");
const totalscore2 = document.querySelector(".scores-hold2");
totalscore1.textContent = 0;
totalscore2.textContent = 0;
const rollbtn = document.querySelector(".roll-dice");
const holdscore = document.querySelector(".hold-value");
const currentscore1 = document.querySelector(".current-score1");
const currentscore2 = document.querySelector(".current-score2");
currentscore1.textContent = 0;
currentscore2.textContent = 0;
const scores = [0,0];
let currentscore = 0;
let activeplayer = 1;
const imgdice = document.querySelector(".diceimg");
rollbtn.addEventListener("click", function(){
    // Random number generated
    const dicenumber = Math.trunc(Math.random() * 6) +1;
    // console.log(dicenumber);
    imgdice.classList.remove("hidden");
    imgdice.src = `dice${dicenumber}.png`;
    if(dicenumber !== 1){
        currentscore = currentscore + dicenumber;
        console.log(currentscore);
        document.getElementById(`cscore${activeplayer}`).textContent = currentscore;
    }else{ // switch to player next when the dice is one
        document.getElementById(`cscore${activeplayer}`).textContent = 0;
        currentscore = 0;
        activeplayer = activeplayer === 1 ? 2 : 1;
    }
})
holdscore.addEventListener("click", function(){
    scores[activeplayer] = scores[activeplayer] + currentscore;
    document.querySelector(`.scores-hold${activeplayer}`).textContent = scores[activeplayer];    
    document.getElementById(`cscore${activeplayer}`).textContent = 0;
    currentscore = 0;  
    activeplayer = activeplayer === 1 ? 2 : 1; 

})