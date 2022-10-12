/* SNACK 4 bonus:

Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const container = document.querySelector('.container');

const array1 = [];
const array2 = [];

for(let i = 0; i < 10; i++){
    array1.push(Math.floor(Math.random() * 11));
}

const printArray1 = document.createElement('div');
container.append(printArray1);
printArray1.innerHTML = "Array1: " + array1;
// console.log(array1);

for(let i = 0; i < 5; i++){
    array2.push(Math.floor(Math.random() * 11));
}
const printArray2 = document.createElement('div');
container.append(printArray2);
printArray2.innerHTML = "Array2: " + array2;
// console.log(array2);


for(let i = 5; i < array1.length; i++){
array2[i] = (array1[i]);

const printArray3 = document.createElement('div');
container.append(printArray3);
printArray3.innerHTML = "Array2 + n elementi fino ad avere lo stesso numero di array1 " + array2;

// console.log(array2);
}


