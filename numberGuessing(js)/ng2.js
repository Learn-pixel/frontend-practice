const min=1;
const max=10;
const ans=Math.floor(Math.random()*(max-min+1));

let attempts =0;
let guess;
let running = true;

while(running){
    
    guess= window.prompt("Guess  a number between 1 and 10");
    guess=Number(guess);
    if(isNaN(guess) || guess<min || guess >max){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("Too low! Try higher");
        }    
        else if(guess < ans){
            window.alert("Too high! Try lower");
        } 
        else {
            window.alert(`Congratulations. It took you ${attempts} attempts to get the answer.`);
            running=false;
        } 
    }
}