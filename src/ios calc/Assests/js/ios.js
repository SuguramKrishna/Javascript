// let resultBox = document.getElementById("result_Box");

// function work(num){
//     resultBox.value += num;
// }

// function calcuButton(){
//     try{
//         resultBox.value = eval(resultBox.value);
//     }
//     catch(err)
//     {
//         alert("Invalid")
//     }
// }

// function clr(){
//     resultBox.value="";
// }

// function dele(){
//     resultBox.value = resultBox.value.slice(0,-1);
// }

function work(val){

    document.getElementById('result_Box').value += val

    return val

}

function calcuButton(){

    let x = document.getElementById('result_Box').value
    
    // console.log(x);

    let y = eval(x);

    console.log(y);
    document.getElementById('result_Box').value = y

    return y

}

function squrt(){
    document.getElementById('result_Box').value= Math.sqrt(document.getElementById('result_Box').value)
}

function clr(){

    document.getElementById('result_Box').value = ''

}

function dele(){

    document.getElementById('result_Box').value = document.getElementById('result_Box').value.slice(0,-1)

}