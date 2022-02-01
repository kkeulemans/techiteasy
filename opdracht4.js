//Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object
// (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt:
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function nameToString (tv) {
    const name = tv.brand + " " + tv.type + " - " + tv.name;
    console.log(name);
    return name;
}
nameToString(inventory[4]);
nameToString(inventory[1]);
nameToString(inventory[0]);
const tv = {
    type: '43PUS63304',
    brand: 'WintersWolde',
    name: 'LED TV',
}
nameToString(tv);


// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter
// verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function listPrice (price) {
    const formattedPrice = `€${price},-`
    return formattedPrice;
}
console.log(listPrice(379));
console.log(listPrice(inventory[1].price));
// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm.
// Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de
// volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Test of jouw functie werkt in alle mogelijke gevallen.
function listAvailableSizes (array) {
    let sizes;
if (array.length === 1){
    let inCm= Math.round(array[0] * 2.54);
    sizes = array + " inches " + "(" + inCm+ " cm)";
}
else if (array.length > 1) {
    let inCm= Math.round(array[0] * 2.54);
    sizes = array[0] + " inches " + "(" + inCm+ " cm)";
    for (let i = 1; i < array.length; i++) {
        let inCm= Math.round(array[i] * 2.54);
        sizes +=" | "+ array[i]+ " inches " + "(" + inCm+ " cm)";

        }

    }
  return sizes;
}
let test = inventory[3].availableSizes;
listAvailableSizes(test);
test = inventory[1].availableSizes;
listAvailableSizes(test);
test = inventory[4].availableSizes;
listAvailableSizes(test);
// Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
const name = nameToString(inventory[1]);
const price = listPrice(inventory[1].price);
const sizeRange = listAvailableSizes(inventory[1].availableSizes);

console.log(`${name}\n${price}\n${sizeRange}`);


// Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
// De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten.
// Vergeet 'm niet aan te roepen!

function tvGenerator (array) {
    const productInfo = document.getElementById("collection");
    array.map((tv) => {
        const nameListing = document.createElement('ul');
        const priceInfo = document.createElement('ul');
        const sizesInfo = document.createElement('ul');
        nameListing.textContent = nameToString(tv);
        priceInfo.textContent = listPrice(tv.price);
        sizesInfo.textContent = listAvailableSizes(tv.availableSizes);
        productInfo.appendChild(nameListing);
        productInfo.appendChild(priceInfo);
        productInfo.appendChild(sizesInfo);
});
}
tvGenerator(inventory);

