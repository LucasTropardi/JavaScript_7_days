

function resultado() {

    let num1 = Number(document.getElementById('num-one').value); 
    let num2 = Number(document.getElementById('num-two').value);
    let total = 0;

    if (document.getElementById('mais').checked)
        total = (num1 + num2)

    else if (document.getElementById('menos').checked)
        total = (num1 - num2)

    else if (document.getElementById('mult').checked)
        total = (num1 * num2)

    else if (document.getElementById('divide').checked)    
        total = (num1 / num2)
        
    document.getElementById('resultArea').innerHTML = 'Resultado: '+String(total)    

}