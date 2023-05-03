var operationMode = false;
var data = document.querySelector('.data');
var input = document.querySelector('.input');
var numberInputs = Array.from(document.querySelectorAll('.number-button'));
var deleteInput = document.querySelector('.delete-button')
var clearInput = document.querySelector('.clear-button')
var equalInput = document.querySelector('.equal-button')
var operationInputs = Array.from(document.querySelectorAll('.operation-button'));

/* Delete button functionality */
deleteInput.addEventListener('click', () => {

    input.innerText = input.innerText.slice(0,input.innerText.length-1)

})

/* Clear button functionality */
clearInput.addEventListener('click', () => {

    input.innerText = ''
    data.innerText = ''

})


/* Equal button functionality */
equalInput.addEventListener('click', () => {
    
    if (operationMode == true){
        operationMode = false
        data.innerText += input.innerText
        data.innerText = eval(data.innerText)
        input.innerText = ''

    }
    else {
        data.innerText = input.innerText
        input.innerText = ''
    }
})

/* adds numbers to display (used upon number click)*/
function addToInput(){

    if (input.innerText.length < 16) {
        input.innerText += this.textContent
    } else {
        alert("The calculator only supports numbers up to 15 digits.")
    }
}

/* All numbers button functionality */
for (i in numberInputs){
    numberInputs[i].addEventListener('click', addToInput)
}

function operationEvent(op){
    

    if (data.innerText == ""){

        data.innerText = input.innerText
    } else {

        input.innerText = data.innerText
    }

    
    input.innerText = `${op}` + ''
    
}

for (i in operationInputs){

    var operation = operationInputs[i]
    operation.addEventListener('click', () => {operationMode = true})

    switch (operation.textContent) {
        
        case '+':
            operation.addEventListener('click', () => {operationEvent('+')})
            break;
        
        case '-':
            operation.addEventListener('click', () => {operationEvent('-')})
            break;

        case '×':
            operation.addEventListener('click', () => {operationEvent('*')})
            break;

        case '÷':
            operation.addEventListener('click', () => {operationEvent('/')})
            break;
    
        default:
            break;
    }
    
}


