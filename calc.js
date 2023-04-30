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
        data.innerText += input.innerText
        data.innerText = eval(data.innerText)
        input.innerText = ''
        operationMode = false

    }
    else {
        data.innerText = input.innerText
        input.innerText = ''
    }
})

/* adds numbers to display (used upon number click)*/
function addToInput(){
    input.innerText += this.textContent
}

/* All numbers button functionality */
for (i in numberInputs){
    numberInputs[i].addEventListener('click', addToInput)
}

function operationEvent(op){

    data.innerText = input.innerText
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


