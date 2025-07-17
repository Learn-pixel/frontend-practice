let display = document.getElementById("display");
let result;
let temp;
function isSymbol(sym){
    if(sym=="+" || sym=="-" || sym=="*" || sym=="/"){
        return true;
    }
    return false;
};

function appendtodisplay(input){
    if(isSymbol(input)){
        display.value+=input;
        if(input == "+"){
            result+=temp;
        }
        else if(input == "-"){
            result-=temp;
        }
        else if(input == "*"){
            result*=temp;
        }
        else if(input == "/"){
            result/=temp;
        }
    }
    else{
        result=Number(input);
        display.value+=result;
    }
};

function Calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
};

function Clear(){
    display.value="";
};