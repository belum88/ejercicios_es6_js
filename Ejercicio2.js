//Ejercicio 2.1//

const pointsList = [32, 54, 21, 64, 75, 43];

const newList = [...pointsList];

console.log(newList);

//Ejercicio 2.2//

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};

console.log(copyToy);

//EJERCICIO 2.3//

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const finalList = [...pointsList1, ...pointsLis2];
console.log(finalList);

//EJERCICIO 2.4//

const toyOne = {name: 'Buzz lightyear', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const newToy = {...toyOne, ...toyUpdate};
console.log(newToy);

//EJERCICIO 2.5//

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const [first, second, , ...rest] = colors;

const newColors = [first, second, ...rest];

console.log(newColors);