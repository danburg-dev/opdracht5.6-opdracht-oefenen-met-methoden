function getTask(indexNumber) {
    console.log("----------Opdracht " + indexNumber + "----------");
}

/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

getTask(0);

/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay = new Date();
console.log(currentDay);

/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

getTask(1);
const hours = currentDay.getHours();
const minutes = currentDay.getMinutes();

console.log(hours, minutes);

/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)

getTask(2);
const formatDate = currentDay.toDateString();
const dutchDate = currentDay.toLocaleDateString("nl-NL");
console.log("Oud format: " + formatDate);
console.log("Nieuw format: " + dutchDate);