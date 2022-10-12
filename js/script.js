/* SNACK 1: 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. */

const container = document.querySelector('.container');
const vaiBtn = document.getElementById('vai-btn');

const checkNumber = function(){
    let evenNumber = false;
    const result = document.createElement('div');
    container.append(result);

    let number = document.getElementById('number-input').value;
    
    if((number % 2) == 0){
        evenNumber = true;     
        result.append(number);  
    }
    else {
        result.append(parseInt(number) + 1);
    }

    // number = '';
}

vaiBtn.addEventListener('click', checkNumber);
