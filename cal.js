//1.display numbers in text box
function displaynum(num){
    result.value+=num
}
//2.clear the content text box--AC
function clearbox(){
    result.value=""
}
//3.evaluate expression
function evaluateexpr(){
    // expr=result.value
    // output=eval(expr)
    // calc.value+=output
    result.value=eval(result.value)
}

//4. remove last item from textbox like backspace
function lastitem(){
    curexp=result.value
    result.value=curexp.slice(0,-1)
}