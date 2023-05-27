
function getComputerChoice (max , min){
    let compChoice = "";
    let num = (Math.floor(Math.random()* (max-min) + min))
    switch(num){
        case 1:
            compChoice = ("rock");break;
        case 2:
            compChoice = ("paper");break;
        case 3:
            compChoice = ("sissor");break; 
    }
    return compChoice;
}
function playerChoice(){
    let choice  = prompt("Make your choice");
    return choice.toLowerCase();
}
function playRound(){
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice(4,1)
    let result = 0;
    let resultB = 0;
    if(playerSelection ===computerSelection){
        return("tie")
    }else if(playerSelection=== "rock" && computerSelection==="sissor"){
        result ++;
        resultB -1;
        return("you win, rock beats sissor")
    }else if(playerSelection=== "paper" && computerSelection==="rock"){
        result ++;
        resultB -1;
        return("you win, paper beats rock")
    }else if(playerSelection=== "sissor" && computerSelection==="paper"){
        result ++;
        resultB -1;
        return("you win, sissor beats paper")
    }else if(computerSelection=== "rock" && playerSelection==="sissor"){
        result -1;
        resultB ++;
        return("you lose, rock beats sissor")
    }else if(computerSelection=== "paper" && playerSelection==="rock"){
        result -1;
        resultB ++;
        return("you lose, paper beats rock")
    }else if(computerSelection=== "sissor" && playerSelection==="paper"){
        result -1;
        resultB ++;
        return("you lose, sissor beats paper")
 
    }
}
let plSelection = "rock"



function game(){
  let cpScore = 0;
  let plScore =0;
    for(let i =0;i<5;i++){
        let round  = playRound()
        if(round.substring(0,8) ==="you lose"){
            cpScore++;
        }else if(round.substring(0,7)==="you win"){
            plScore++;
        }
        console.log(round);
    }
if(plScore >cpScore){
    console.log("YOU ARE THE WINNER, CONGRATULATIONS")
}else if( cpScore > plScore){
    console.log("YOU HAVE LOST, BETTER LUCK NEXT TIME")
}else{
    console.log("IT'S A TIE")
}
}
game()