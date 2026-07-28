let humScore=0;
let compScore=0;

function getComputerChoice(){
    let ranChoice=Math.random();
    if(ranChoice==0) return "rock";
    else if(ranChoice>0) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let humChoice=prompt("what do u want to choose? (rock/paper/scissors");
    humChoice=humChoice.toLowerCase();
    return humChoice;
}

function playRound(humChoice,ranChoice){
    if(humChoice=="rock" && ranChoice=="paper"){
        console.log("you lose!paper beats rock");
        compScore++;

    }else if(humChoice=="rock" && ranChoice=="scissors"){
        console.log("you won!rock beats scissors");
        humScore++;
    }else if(humChoice=="paper"&& ranChoice=="scissors"){
        console.log("you lose! scissors beats paper");
        compScore++;
    }else if(humChoice=="paper" && ranChoice=="rock"){
        console.log("you won! paper beats rock")
        humScore++;
    }else if(humChoice=="scissors" && ranChoice=="rock"){
        console.log("you lose!rock beats scissors");
        compScore++;
    }else if(humChoice=="scissors" && ranChoice=="paper"){
        console.log("you won! scissors beats paper");
        humScore++;
    }else if(humChoice==ranChoice){
        console.log(`tie! you both chose ${humChoice}`);
    }

}


const ranSelection=getComputerChoice();
const humSelection=getHumanChoice();
playRound(humSelection,ranSelection);