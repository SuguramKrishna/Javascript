let inputBox = document.getElementById('input_Box');

function work(ans){
   var calcu = ans.innerHTML;

   if (calcu == '=') {
    // Calculate
    input_Box.innerHTML = eval(input_Box.innerHTML);
     
} else if (calcu == 'AC') {
    // All Clear
    input_Box.innerHTML = '0';
     
} else {
    if (input_Box.innerHTML == '0') {
        input_Box.innerHTML = calcu;
         
    } else {
        input_Box.innerHTML += calcu;   
    }
}
}