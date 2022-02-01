//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//function totalSold (products){
let result = 0;

for (let i = 0; i < inventory.length - 1; i++){
    let sold = inventory[i].sold;
    result += sold;
}
console.log(result);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//1. Maak een HTML element om result in te zetten
//2. Haal het element naar de js file
//3. Maak in .js een element om result in op te slaan
//4. Koppel met element in stap 2
//5. Style het met CSS om het groen te maken
const soldProducts = document.getElementById("container");
const soldProductsTitle = document.createElement('h3');
soldProductsTitle.textContent = "Aantal verkochte producten";
const allSOldProducts = document.createElement('h4');
allSOldProducts.textContent = result;
allSOldProducts.setAttribute('id', "soldTotal");
soldProducts.appendChild(soldProductsTitle);
soldProducts.appendChild(allSOldProducts);
// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let stock = 0;

for (let i = 0; i < inventory.length; i++) {
    stock += inventory[i].originalStock;
}
console.log(stock);
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//1. Maak een HTML element om stock in te zetten
//2. Haal het element naar de js file
//3. Maak in .js een element om stock in op te slaan
//4. Koppel met element in stap 2
//5. Style het met CSS om het blauw te maken
const stockProducts = document.getElementById("stock");
const stockProductsTitle = document.createElement('h3');
stockProductsTitle.textContent = "Aantal producten is ";
const stockTotal = document.createElement('h4');
stockTotal.setAttribute('id', "stockTotal");
stockTotal.textContent = stock;
stockProducts.appendChild(stockProductsTitle);
stockProducts.appendChild(stockTotal);

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
const leftover = stock - result;
const toBeSold = document.getElementById("2beSold");
const toBeSoldText = document.createElement('p')
toBeSoldText.textContent = "Aantal nog te verkopen: ";
const totalLeft = document.createElement('p');
totalLeft.textContent = leftover;
totalLeft.setAttribute('id', "currentStock");

toBeSold.appendChild(toBeSoldText);
toBeSold.appendChild(totalLeft);