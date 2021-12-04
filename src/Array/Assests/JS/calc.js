function calc(){
    event.preventDefault();
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = document.getElementById("operation").value;
    if(c=="+"){
        document.getElementById("result").value=a+b;
    };

    if(c=="-"){
        document.getElementById("result").value=a-b;
    };

    if(c=="*"){
        document.getElementById("result").value=a*b;
    };

    if(c=="/"){
        document.getElementById("result").value=a/b;
    };
}
