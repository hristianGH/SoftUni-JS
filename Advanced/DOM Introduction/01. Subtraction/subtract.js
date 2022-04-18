function subtract() {
    let val=(Number(document.getElementById('firstNumber').value)-Number(document.getElementById('secondNumber').value));

    document.getElementById('result').textContent=val;
    return val;
}