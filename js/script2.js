/* SNACK 2:
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */


const names = ['Gustav', 'Egon', 'Artemisia', 'Amedeo', 'Edvard', 'Tamara'];
console.log(names);

const surnames = ['Klimt', 'Schiele', 'Gentileschi', 'Modigliani', 'Munch', 'de Lempicka'];
console.log(surnames);

const fullNames = [];

for(let i = 0; i < names.length; i++){
        fullNames.push(names[i].concat(' ', surnames[i]));
    }
console.log(fullNames);

const container = document.querySelector('.container');
const guests = document.createElement('div');
container.append(guests);
guests.innerHTML = "<h3>Lista degli invitati:</h3> " + fullNames;




