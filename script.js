// let notas = [10,7,9,2];
// console.log(notas[1]);

const destaques = document.getElementsByClassName('destaque'); // pelo nome da classe
const destaquesDois = document.querySelectorAll('li.destaque'); // tem mais opções
console.log(destaques);
console.log(destaquesDois);

for(let i = 0; i < destaques.length; i++){
    destaques[i].style="color: red";
}