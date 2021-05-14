var inputs = {
operand1:0,
operator: '+',
operator: '-',
operator: '*',
operator: '/',
operator: '%',
operand2:0
}

function addnum (num){
if(document.getElementById('txt').value != 0){
document.getElementById('txt').value = document.getElementById('txt').value+num;
}
else{
    document.getElementById('txt').value = num;
}
}

function operator(opera){
inputs.operand1 = document.getElementById('txt').value;
inputs.operator = opera;
document.getElementById('txt').value = 0;
}

function cal(){
    inputs.operand2 = document.getElementById('txt').value;
    if(inputs.operator == '+'){
        document.getElementById('txt').value = parseInt(inputs.operand1) + parseInt(inputs.operand2);

    }
    else if(inputs.operator == '-'){
        document.getElementById('txt').value = parseInt(inputs.operand1) - parseInt(inputs.operand2);

    }

   else if(inputs.operator == '/'){
        document.getElementById('txt').value = parseInt(inputs.operand1) / parseInt(inputs.operand2);

    }

    else if(inputs.operator == '*'){
        document.getElementById('txt').value = parseInt(inputs.operand1) * parseInt(inputs.operand2);

    }

    else if(inputs.operator == '%'){
        document.getElementById('txt').value = parseInt(inputs.operand1) % parseInt(inputs.operand2);

    }

}