// ===== EXERCICE BonjourUntel =====
// Description : Créer une fonction qui affiche "Bonjour" suivi d'un nom
// Concepts : fonction avec paramètre, affichage, concaténation de chaînes

console.log("=== EXERCICE BonjourUntel ===\n");

// --- Définition de la fonction ---
// Cette fonction prend un paramètre nom et affiche "Bonjour" suivi du nom
function direBonjour(nom) {
    console.log("Bonjour " + nom);
}

// --- Appels de la fonction ---
console.log("Test 1 :");
direBonjour("Marcel");

console.log("\nTest 2 :");
direBonjour("Sophie");

console.log("\nTest 3 :");
direBonjour("Lucas");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Fonctions avec paramètres
//
// Un paramètre est une variable que la fonction reçoit lors de son appel
// La fonction peut alors utiliser cette valeur dans son code
//
// Syntaxe :
// function nomFonction(parametre1, parametre2, ...) {
//     // utilisation des paramètres
// }
//
// Appel :
// nomFonction(valeur1, valeur2, ...);
//
// Différence entre console.log dans la fonction et return :
// - console.log affiche directement dans la console
// - return renvoie une valeur utilisable par le code appelant
//
// Variantes syntaxiques possibles :
//
// 1. Fonction fléchée :
// const direBonjour = (nom) => {
//     console.log("Bonjour " + nom);
// };
//
// 2. Avec template literals (plus moderne) :
// function direBonjour(nom) {
//     console.log(`Bonjour ${nom}`);
// }
//
// 3. Avec return au lieu d'affichage direct :
// function direBonjour(nom) {
//     return "Bonjour " + nom;
// }
// console.log(direBonjour("Marcel"));
