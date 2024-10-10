//Ejercicio 1.1//

const juego = {
    título: "los ultimos nosotros 2",
    género: ["acción", "zombie", "supervivencia"],
    año: 2020,
};
const { título, género, año } = juego;

console.registro(título);
console.registro(género);
console.registro(año);

//EJERCICIO 1.2//

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruits1, fruits2, fruits3] = fruits;

console.log(fruits1);
console.log(fruits2);
console.log(fruits3);


//EJERCICIO 1.3//

const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }


};


//EJERCICIO 1.4//

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

const { name, itv } = car;

console.log(name);
console.log(itv);

const [firstyear, secondyears, thirdyears] = itv;

console.log(firstyear);
console.log(secondyears);
console.log(thirdyears);
