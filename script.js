document.addEventListener("DOMContentLoaded", function() {
    function clickTwo(a){
        if(!isSwitched){
            let temp=String(firstNumber);
            temp+=a;
            if(isDec) {
                firstNumber = Number(String(decStr+a));
                isDec = false;
                result.innerHTML = decStr+a;
                console.log(decStr+a);
            }
            else if(firstNumber===0){
                firstNumber=a;
                result.innerHTML = firstNumber;
            } 
            else {
                firstNumber = Number(temp);
                result.innerHTML = firstNumber;
            }            
            expStr += firstNumber;
            expression.innerHTML = expStr;
            console.log("first number= "+firstNumber);
        }
        else {
            let temp=String(secondNumber);
            temp+=a;
            if(isDec) {
                secondNumber = Number(String(decStr+a));
                isDec = false;
            }
            else secondNumber = Number(temp);
            result.innerHTML = secondNumber; 
            expStr += secondNumber;
            expression.innerHTML = expStr;
            console.log("second number= "+secondNumber);   
            nubmerOfActions++;       
        }
    }
    function clickAC(){
        firstNumber=0; 
        secondNumber=0;
        isSwitched = false;
        expStr="";
        expression.innerHTML = expStr;
        sign="+";
        result.innerHTML = "0";
        decStr = "";
        isDec = false;
        makeNeg = false;
        nubmerOfActions = 0;
    }
    let makeNeg = Boolean(false);
    let savedAction = "+";
    let firstNumber = 0;
    let secondNumber = 0;
    let isSwitched = Boolean(false);
    let sign = String("");
    let expStr = String("");
    let nubmerOfActions = Number(0);
    const expression = document.getElementById('ex-screen');
    const result = document.getElementById('display');
    const nullbtn = document.getElementById('zero');
    const onebtn = document.getElementById('one');
    const twobtn = document.getElementById('two');
    const acbtn = document.getElementById('clear');
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
    const minus = document.getElementById('subtract');
    const mult = document.getElementById('multiply');
    const div = document.getElementById('divide');
    function clickPlus(s) {
        result.innerHTML = 0;      
        if(!isSwitched) isSwitched = true;
        if(sign==="+"){
                firstNumber += secondNumber;
                result.innerHTML = String(firstNumber);
                secondNumber = 0;
                decStr = "";
                console.log(decStr);
                savedAction = "+";
        }
        else if(sign==="-"){
            console.log("wtf");                
                if(nubmerOfActions===0 && savedAction==="x") {
                    sign = "x";
                    makeNeg = true;
                    console.log("switched");
                }
                else firstNumber -= secondNumber;
                console.log("actions: "+nubmerOfActions)
                console.log(savedAction);
                result.innerHTML = firstNumber;
                secondNumber = 0;
                decStr = "";
            }
        else if(sign==="x"){
            if(nubmerOfActions === 0) firstNumber = firstNumber;
             else  firstNumber *= secondNumber;
                console.log("actions: "+nubmerOfActions)
                result.innerHTML = firstNumber;
                secondNumber = 0;
                decStr = "";
                savedAction = "x";
            }
        else if(sign==="/"){
            if(nubmerOfActions === 0) firstNumber = firstNumber;
            else  firstNumber /= secondNumber;
                result.innerHTML = firstNumber;
                secondNumber = 0;
                decStr = "";
                savedAction = "/";
            }
        //}
        sign = s;
        expStr += s;
        expression.innerHTML = expStr;
    }
    plus.addEventListener("click", function(){
        //sign = "+"
        clickPlus("+");

    });
    minus.addEventListener("click", function(){
        //sign = "-"
        clickPlus("-");

    });
    mult.addEventListener("click", function(){
        console.log("gay")
        //sign = "x"
        clickPlus("x");
 
    });
    div.addEventListener("click", function(){
        //sign = "/"
        clickPlus("/");

    });
    const equal = document.getElementById("equals");
    function Equal(){
        console.log("clicked!");
        if(sign==="+"){
            firstNumber += secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
            decStr = "";
        }
        else if(sign==="-"){
            if(expStr.indexOf("x-")>=0) firstNumber *= -secondNumber;
            else if(expStr.indexOf("/-")>=0) firstNumber /= -secondNumber;
            else firstNumber -= secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
            decStr = "";
        }
        else if(sign==="x"){
            firstNumber *= secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
            decStr = "";
        }
        else if(sign==="/"){
            firstNumber /= secondNumber;
            result.innerHTML = firstNumber;
            secondNumber = 0;
            console.log(firstNumber);
            decStr = "";
        }
    }
    let isDec = Boolean(false);
    equal.addEventListener("click", Equal);
    const decimal = document.getElementById("decimal");
    let decStr = String("");
    function addPoint(){
        console.log(decStr);
        if(!isSwitched && decStr.indexOf(".")<0){
            decStr = String(firstNumber);
            decStr += ".";
            isDec = true;
            result.innerHTML = decStr;
        }
        else if (isSwitched && decStr.indexOf(".")<0) {
            decStr = String(secondNumber);
            decStr += ".";
            isDec = true;
            result.innerHTML = decStr;
        }
    }
    decimal.addEventListener("click", addPoint);
})
