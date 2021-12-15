const numero4 = prompt("inserisci un numero di 4 cifre")

let somma = 0

for (let i= 0; i < numero4.length; i++){
    somma += parseInt(numero4[i])
}

console.log(somma)