let array = []
let sommaNumeri = 0

do{
    numeri = prompt("Inserisci numero")
    array.push(numeri)
    sommaNumeri += parseInt(numeri)
    console.log("aggiungi un altro numero")
}while(sommaNumeri < 50)

console.log(sommaNumeri)

if (sommaNumeri > 50){
    console.log("la somma supera le 50 unità")
}else{
    console.log("Good Job")
}
