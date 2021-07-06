function getTask(indexNumber) {
    console.log("----------Opdracht " + indexNumber + "----------");
}

/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

getTask(0);
console.log(Math.PI);

/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

getTask(0.1);
const word = "zoetsappig";
console.log(word.length);

/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

getTask(1);
const fruit = "Banaan";
const vegetable = "Aardappel";

const word1 = (fruit.length);
const word2 = (vegetable.length);

console.log(word1 < word2);

// Of voor short: console.log(fruit.length > vegetable.length);

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

getTask(2);
console.log(fruit.charAt(fruit.length-1));
console.log(vegetable.charAt(vegetable.length-1));

/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

getTask(4);
const userInput = "  De kat krabt de krullen van de trap ";
console.log(userInput.replace(" ", ""));

// maar eigenlijk deze:
const trimmed = userInput.trim();
console.log(trimmed);

/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

getTask(4);
const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"

const includedWord = story.includes("Fantastisch");
console.log(includedWord);

/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

getTask(5);
const endOfSentence = story.indexOf('.');

const sentence = story.substring(0, endOfSentence + 1);
console.log(sentence)

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";

const euroPrice = price.replace("$", "€ ").replace(".", ",");
console.log(euroPrice);



