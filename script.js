function Minus(){
    let number=parseInt(document.getElementById("number").textContent);
    if(number>1)
    {
        number-=1;
    }
    document.getElementById("number").innerHTML = number;
}
function Plus(){
    let number2=parseInt(document.getElementById("number").textContent);
    if(number2<9)
    {
        number2+=1;
        document.getElementById("number").innerHTML = number2;
    }
}
