function saveOperation(result){
    form.displayText.value=result
}

function calculate() {
    form.displayText.value=eval(form.value1.value+form.displayText.value+form.value2.value)
}
    