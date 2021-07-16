// save and display the selected operation type
function saveOperation(result){
    form.displayText.value=result
}


// calculate and display result
function calculate() {
    form.displayText.value=eval(form.value1.value+form.displayText.value+form.value2.value)
}
    