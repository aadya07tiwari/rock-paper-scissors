function getComputerChoice(){
    let ranChoice=Math.random();
    if(ranChoice==0) return "rock";
    else if(ranChoice>0) return "paper";
    else return "scissors";
}
console.log(getComputerChoice())
function getHumanChoice(){
    let humChoice=prompt("what do u want to choose? (rock/paper/scissors");
}
console.log(getHumanChoice())