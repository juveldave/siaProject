let inputs = {
    operand1:0 
     operator: '+',
    operator: '-',
    operator: '*',
    operator: '/',
    operator: '%',
    operand2:0
    }
    
    function addnum (num : any){
    if(document.getElementById('txt')as HTMLInputElement).value != 0){
    (document.getElementById('txt')as HTMLInputElement).value = (document.getElementById('txt')as HTMLInputElement).value + num;
    }
    else{
        (document.getElementById('txt')as HTMLInputElement).value = num;
    }
    }
    
    function operator(opera : any) {
    inputs.operand1 = (document.getElementById('txt')as HTMLInputElement).value;
    inputs.operator = opera
    (document.getElementById('txt')as HTMLInputElement).value = 0;
    }
    
    function cal(){
        inputs.operand2 = (document.getElementById('txt')as HTMLInputElement).value;
        if(inputs.operator == '+'){
            (document.getElementById('txt')as HTMLInputElement).value = parseInt(inputs.operand1) + parseInt(inputs.operand2)
    
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