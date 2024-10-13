//EJERCICIO 6.1//

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumScore = exams.reduce((acc, exam) => acc + exam.score,0);
console.log(sumScore);

//EJERCICIO 6.2//

const approved = exams.reduce((acc, exam) => {
    if(exam.score >=5){
        acc.push(exam);
    }
    return acc;
},[]);

console.log(approved);

const sumApproved = approved.reduce((acc,exam)=> acc + exam.score,0);
console.log(sumApproved);

//EJERCICIO 6.2//

const mediaScore = sumScore / exams.length;

console.log(`La media de la nota de todos los examenes es de ${mediaScore}`);