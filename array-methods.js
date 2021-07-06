function getTask(indexNumber) {
    console.log("----------Opdracht " + indexNumber + "----------");
}

/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

getTask(0);

/* Opdracht 0: voorbeeld */
// Verwijder het laatste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Vanille extract' en [ 'Eieren', 'Bloem', 'Bakpoeder' ]

const cookieIngredients = ["Eieren", "Bloem", "Bakpoeder", "Vanille extract"];

const lastItem = cookieIngredients.pop();
console.log(lastItem);
console.log(cookieIngredients);

/* Opdracht 1: */
// Voeg een nieuw item toe aan onderstaande array en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Hawai', 'Margherita', 'Salami' ]

getTask(1);
const pizzas = ["Hawai", "Margherita"];

pizzas.push("Salami");
console.log(pizzas);

/* Opdracht 2: */
// Verwijder het éérste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Noten' en [ 'Eieren', 'Bloem', 'Cacao', 'Chocoladestukjes', 'Bakpoeder' ]

getTask(2);
const brownieIngredients = ["Noten", "Eieren", "Bloem", "Cacao", "Chocoladestukjes", "Bakpoeder"];

const firstItem = brownieIngredients.shift();
console.log(firstItem);
console.log(brownieIngredients);

/* Opdracht 3: */
// Draai de volgorde van onderstaande array met namen om en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Piet', 'Jan', 'Henk' ]

getTask(3);
const names = ["Henk", "Jan", "Piet"];

const reverseItems = names.reverse();
console.log(reverseItems);


/* Opdracht 4: */
// Onderstaande array bevat een lijst met plaatsnamen. Voeg de naam "Amsterdam" toe tussen Utrecht en Maastricht.
// ---- Verwachte uitkomst: [ 'Utrecht', 'Amsterdam', 'Maastricht', 'Eindhoven' ]

getTask(4);
const cities = ["Utrecht", "Maastricht", "Eindhoven"];

const addCity = cities.splice(1,0, "Amsterdam");
console.log(cities);
