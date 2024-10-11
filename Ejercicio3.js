//EJERCICIO 3.1//

// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];

// const name = users.map(user => user.name);

// console.log(name);


//EJERCICIO 3.2//

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const name = users.map(user =>  {
    if(user.name.includes("A")){
       return "Anacleto"
       
    }
       return user.name;
        
}
);

console.log(name);

//EJERCICIO 3.3//
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const cityVisited = cities.map(city => {
    if(city.isVisited === true){
        return { ...city, name: `${city.name} , Visitado` };
    }
    return city;
});


console.log(cityVisited);