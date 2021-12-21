/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

BONUS 1
Stampare il risultato in pagina e non solo in console.

BONUS 2
Cercare, sulla base di quanto visto, di effettuare un minimo di validazione.

BONUS 3
Applicare un po' di CSS se siete riusciti a fare il bonus 1 */
console.log('JS OK')

// Richiesta informazioni utente
const distance = prompt('Quanti kilometri percorrerai?')
const age = prompt('Quanti anni hai?')

// Calcolo prezzo
let price = distance * 0.21

console.log(price)

// Sconti per età
let priceUnder18 = price * 0.80
let priceOver65 = price * 0.60

if (age >= 65) {
    console.log(`Hai ricevuto lo sconto Over 65. Il prezzo del tuo biglietto è di ${priceOver65}€.`)
    document.writeln(`Hai ricevuto lo sconto Over 65. Il prezzo del tuo biglietto è di ${priceOver65}€.`)
}
else if (age <= 18) {
    console.log(`Hai ricevuto lo sconto Over 18. Il prezzo del tuo biglietto è di ${priceUnder18}€.`)
    document.writeln(`Hai ricevuto lo sconto Over 18. Il prezzo del tuo biglietto è di ${priceUnder18}€.`)
}
else {
    console.log(`Il prezzo del tuo biglietto è di ${price}€.`)
    document.writeln(`Il prezzo del tuo biglietto è di ${price}€.`)
}

