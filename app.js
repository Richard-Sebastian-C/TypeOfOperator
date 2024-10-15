try{
    adddlert("Welcome Guest");
}
catch(err){
    document.getElementById("errorMessage").innerHTML = err.message;
}
add = (a,b) => a+b;
document.getElementById("result").innerHTML = add(4,6);
function addClick() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var sum = a + b;
    document.getElementById("add").innerHTML = sum;
    document.getElementById("number").innerHTML = Number(a) + Number(b);
    
}



