var screenOutput = document.querySelector("#output");
var dot = document.querySelector("#dot");

for(var i=0; i<10; i++){
    let numberBtn = document.querySelector("#btn"+i);
    numberBtn.addEventListener("click",function(){
        screenOutput.innerHTML += numberBtn.innerHTML;
    });
}

dot.addEventListener("click",function(){
    let sliced = screenOutput.innerHTML.slice(screenOutput.innerHTML.length-1,screenOutput.innerHTML.length);
    if (sliced !== '+' && sliced !== '-' && sliced !== '*' && sliced !== '/' && sliced !== '.'){
        screenOutput.innerHTML += '.';
    }
});

var currentOperator;
for(var i=1; i<=4; i++){
    let operatorBtn = document.querySelector("#opr"+i);
    operatorBtn.addEventListener("click",function(){
        let sliced = screenOutput.innerHTML.slice(screenOutput.innerHTML.length-1,screenOutput.innerHTML.length);
        if (sliced !== '+' && sliced !== '-' && sliced !== '*' && sliced !== '/' && sliced !== '.' && screenOutput.innerHTML !== ""){
            screenOutput.innerHTML += operatorBtn.innerHTML;
            currentOperator =operatorBtn.innerHTML;
        }
    });
}

var equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click",function(){
    var input = screenOutput.innerHTML;
    var result;
    if(currentOperator === '+'){
        let splitVal = input.split('+');
        result = parseFloat(splitVal[0]) + parseFloat(splitVal[1]);
    }
    else if(currentOperator === '-'){
        let splitVal = input.split('-');
        result = parseFloat(splitVal[0]) - parseFloat(splitVal[1]);
    }
    else if(currentOperator === '*'){
        let splitVal = input.split('*');
        result = parseFloat(splitVal[0]) * parseFloat(splitVal[1]);
    }
    else if(currentOperator === '/'){
        let splitVal = input.split('/');
        result = parseFloat(splitVal[0]) / parseFloat(splitVal[1]);
    }
    screenOutput.innerHTML = result;
});

deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click",function(){
    var currentOutput = screenOutput.innerHTML;
    if(currentOutput.length > 0){
        screenOutput.innerHTML = currentOutput.slice(0,currentOutput.length-1);
    }
});

acBtn = document.querySelector("#ac");
acBtn.addEventListener("click",function(){
    screenOutput.innerHTML = "";
});