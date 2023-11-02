document.addEventListener("DOMContentLoaded", function() {
    function clickTwo(a){
        if(!isSwitched){
            let temp=String(firstNumber);
            temp+=a;
            if(firstNumber===0) firstNumber=a;
            else firstNumber = Number(temp);
            result.innerHTML = firstNumber;
            expStr += firstNumber;
            expression.innerHTML = expStr;
            console.log("first number= "+firstNumber);
        }
        else {
            let temp=String(secondNumber);
            temp+=a;
            if(secondNumber===0) secondNumber=a;
            else secondNumber = Number(temp);
            result.innerHTML = secondNumber; 
            expStr += secondNumber;
            expression.innerHTML = expStr;
            console.log("second number= "+secondNumber);          
        }
    }
    function clickAC(){
        firstNumber=0; 
        result.innerHTML = "0";
    }
    let firstNumber = 0;
    let secondNumber = 0;
    let isSwitched = Boolean(false);
    let sign = String("+");
    let expStr = String("");
    const expression = document.getElementById('ex-screen');
    const result = document.getElementById('num-screen');
    const nullbtn = document.getElementById('zero');
    const onebtn = document.getElementById('one');
    const twobtn = document.getElementById('two');
    const acbtn = document.getElementById('AC');
    const threebtn = document.getElementById('three');
    nullbtn.addEventListener("click", function(){
        clickTwo(0);
    });
    const fourbtn = document.getElementById('four');
    fourbtn.addEventListener("click", function(){
        clickTwo(4);
    });
    const fivebtn = document.getElementById('five');
    fivebtn.addEventListener("click", function(){
        clickTwo(5);
    });
    const sixbtn = document.getElementById('six');
    sixbtn.addEventListener("click", function(){
        clickTwo(6);
    });
    const sevenbtn = document.getElementById('seven');
    sevenbtn.addEventListener("click", function(){
        clickTwo(7);
    });
    const eightbtn = document.getElementById('eight');
    eightbtn.addEventListener("click", function(){
        clickTwo(8);
    });
    const ninebtn = document.getElementById('nine');
    ninebtn.addEventListener("click", function(){
        clickTwo(9);
    });
    onebtn.addEventListener("click", function(){
        clickTwo(1);
    });
    twobtn.addEventListener("click", function(){
        clickTwo(2);
    });
    acbtn.addEventListener("click", clickAC);
    threebtn.addEventListener("click", function(){
        clickTwo(3);
    });
    const plus = document.getElementById('add');
    const minus = document.getElementById('subt');
    const mult = document.getElementById('mult');
    const div = document.getElementById('div');
    function clickPlus(s){
        result.innerHTML = 0;      
        if(!isSwitched) isSwitched = true;
        else {
            if(sign==="+"){
                firstNumber += secondNumber;
                result.innerHTML = String(firstNumber);
                secondNumber = 0;
                console.log(firstNumber);
            }
            else if(sign==="-"){
                firstNumber -= secondNumber;
                result.innerHTML = firstNumber;
                secondNumber = 0;
                console.log(firstNumber);
            }
            else if(sign==="x"){
                firstNumber *= secondNumber;
                result.innerHTML = firstNumber;
                secondNumber = 0;
                console.log(firstNumber);
            }
            else if(sign==="/"){
                firstNumber /= secondNumber;
                result.innerHTML = firstNumber;
                secondNumber = 0;
                console.log(firstNumber);
            }
        }
        sign = s;
        expStr += s;
        expression.innerHTML = expStr;
    }
    plus.addEventListener("click", function(){
        clickPlus("+")
    });
    minus.addEventListener("click", function(){
        clickPlus("-");
    });
    mult.addEventListener("click", function(){
        clickPlus("x");
    });
    div.addEventListener("click", function(){
        clickPlus("/");
    });
    const equal = document.getElementById("equals");
    function Equal(){
        console.log("clicked!");
        if(sign==="+"){
            firstNumber += secondNumber;
            result.innerHTML = String(firstNumber);
            secondNumber = 0;
            console.log(firstNumber);
        }
        else if(sign==="-"){
            firstNumber -= secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
        }
        else if(sign==="x"){
            firstNumber *= secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
        }
        else if(sign==="/"){
            firstNumber /= secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
        }
    }
    equal.addEventListener("click", Equal);
})
