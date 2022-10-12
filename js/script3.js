/* SNACK 3:
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

const randomNumbersList = [];

const container = document.querySelector('.container');
const printArray = document.createElement('div');
container.append(printArray);

for(let i = 0; i < 10; i++){
    randomNumbersList.push(Math.floor(Math.random() * 11));
    printArray.innerHTML = "<h3>Lista di numeri random:</h3> " + randomNumbersList;
}
// console.log(randomNumbersList);

const numbersOddIndex = [];

const printOdd = document.createElement('div');
container.append(printOdd);

for (let i = 0; i < randomNumbersList.length; i++){
    if(i % 2 != 0){
        numbersOddIndex.push(randomNumbersList[i]);
        printOdd.innerHTML = "<h3>Lista dei numeri in posizione dispari:</h3> " + numbersOddIndex;
    }
}
// console.log(numbersOddIndex);

const printSum = document.createElement('div');
container.append(printSum);

let somma = 0;
for(let i = 0; i < numbersOddIndex.length; i++){
    somma += parseInt(numbersOddIndex[i]);
}

printSum.innerHTML = "<h3>La somma degli elementi in posizione dispari è:</h3> " + somma; 
// console.log(somma);




