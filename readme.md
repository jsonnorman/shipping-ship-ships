1. How can you change the layout of the lists from top-down to having three columns?
   Few different ways this can be acomplished.
   1a -First it is an unordered list, which could always be changed to an ordered list and everything be put in alphabetically then displayed in the order. This would be the least benefitial way and would require a lot of work if/when changes are needed.
   1b through 1d - CSS => Three ways come to mind with CSS and making lists more orginized, Flexbox (easier and flexes with size of display screen), CSS Grid (hardest by setting up specific grid locations), and Columns (Simple but less flexible)

2. How can you sort each list of names alphabetically?
   How would your ERD change if the customer had the following, new requirement?
   Sort (). A way to acomplish this is by using the built in sort function. Using the database produce an example:

hauler.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" })); \* When you pass undefined for locales, you’re saying:
👉 “Just use the user’s current system/browser \* locale.” \*
console.log(hauler);
[
{ id: 3, name: "Catepillar", dock_id: 3},
{ id: 4, name: "C2", dock_id: 4}
{ id: 2, name: "Persus", dock_id: 2},
{ id: 1, name: "Polaris", dock_id: 1},
]

3. Each dock will only service some of the hauling ships because of contracts with their companies. For example, Rotterdam will only service "Seawise Giant" and "Pioneering Spirit", and Busan will service "Seawise Giant" and "Boaty McBoatface". Each hauling ship can be serviced by many docks, and each dock can service one, or more, hauling ships. You need to keep track of the allowed relationships in your database.
   This sounds like working with the database itself to break down the Docks and Haulers more specifically. Adding a Key object that stays which Docks can service which haulers. Along with that, insure when making the loops, that no !hauler will end up at a dock it cannot be serviced at.

4. What is structuredClone() in JavaScript, and how could it be used in your project?
   structuredClone() is a great tool used in the database currently in the project. It creates a "deep copy" of the value so that when called, will never alter, damage, corrupt, or maniuplate in any way, the original database.

\*\*\* Personal Note:

Shallow copy = only top-level is copied (nested objects/arrays still point to the original).

Deep copy = everything is copied, including nested objects/arrays, so changes don’t affect the original.
