//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

let tvTypes = inventory.map((type) => {
    return type.name;
});
console.log(tvTypes);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

let soldOut = inventory.filter((sales) => {

    return sales.originalStock === sales.sold;
});
console.log(soldOut);
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

let hasAmbiLight = inventory.filter((ambiLight) => {
    return ambiLight.options.ambiLight === true;
});

console.log(hasAmbiLight);
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

function priceSorted(products){
return products.sort((a, b) => a.price - b.price )
}
console.log(priceSorted(inventory));