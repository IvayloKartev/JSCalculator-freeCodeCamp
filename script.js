document.addEventListener("DOMContentLoaded", function() {
    function clickZero(){
        let temp = String(firstNumber);
        temp += 0;
        firstNumber = Number(temp);
        console.log(firstNumber);
        result.innerHTML = temp;
    }
    function clickOne(){
        let temp=String(firstNumber);
        temp+=1;
        firstNumber = Number(temp);
        result.innerHTML = temp;
    }
    function clickTwo(){
        let temp=String(firstNumber);
        temp+=2;
        firstNumber = Number(temp);
        result.innerHTML = temp;
    }
    function clickAC(){
        firstNumber=0;
        result.innerHTML = "0";
    }
    let firstNumber = 0;
    let secondNumber = 0;
    const result = document.getElementById('num-screen');
    const nullbtn = document.getElementById('zero');
    const onebtn = document.getElementById('one');
    const twobtn = document.getElementById('two');
    const acbtn = document.getElementById('AC');
    nullbtn.addEventListener("click", clickZero);
    onebtn.addEventListener("click", clickOne);
    twobtn.addEventListener("click", clickTwo);
    acbtn.addEventListener("click", clickAC);
})