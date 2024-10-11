//EJERCICIO 4.1//

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const overEighteen = ages.filter(age =>age >=18)

console.log(overEighteen);

//EJERCICIO 4.2//

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pairNumber = ages1.filter(age => age %2 ===0)
console.log(pairNumber);

//EJERCICIO 4.3//

const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const player = streamers.filter(streamer =>streamer.gameMorePlayed === 'League of Legends');
console.log(player);

//EJERCICIO 4.4//

const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const playerWithU = streamers1.filter(streamer => streamer.name.includes("u"))

console.log(playerWithU);

//EJERCICIO 4.5//


const playerLegendandOverthirtyFive = streamers1.filter(streamer => {
    if (streamer.gameMorePlayed.includes("Legends")) {
        if (streamer.age >= 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});

console.log(playerLegendandOverthirtyFive);