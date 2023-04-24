function add(data, input){
    
    data += input;
    return data;

}

function subtract(data, input){
    
    data -= input;
    return data;

}


function multiply(data, input){
    
    data *= input;
    return data;

}


function divide(data, input){
    
    input == 0 ? data = "Cannot divide by zero." : data /= input;
    return data;
}

