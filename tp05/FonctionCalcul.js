// ===== EXERCICE FonctionCalcul =====
// Description : Créer une fonction qui calcule a * b + a + b
// Concepts : fonction avec plusieurs paramètres, opérations mathématiques, types de données

console.log("=== EXERCICE FonctionCalcul ===\n");

// --- Définition de la fonction ---
// Cette fonction prend deux paramètres a et b et retourne le résultat de a * b + a + b
function calculer(a, b) {
    return a * b + a + b;
}

// --- Test 1 : Appel avec des nombres ---
console.log("Test 1 - Avec des nombres :");
const nombre1 = 5;
const nombre2 = 3;
const resultat1 = calculer(nombre1, nombre2);
console.log(`calculer(${nombre1}, ${nombre2}) = ${resultat1}`);
console.log(`Détail : ${nombre1} * ${nombre2} + ${nombre1} + ${nombre2} = ${nombre1 * nombre2} + ${nombre1} + ${nombre2} = ${resultat1}`);

console.log("\nTest 2 - Avec d'autres nombres :");
const nombre3 = 10;
const nombre4 = 2;
const resultat2 = calculer(nombre3, nombre4);
console.log(`calculer(${nombre3}, ${nombre4}) = ${resultat2}`);
console.log(`Détail : ${nombre3} * ${nombre4} + ${nombre3} + ${nombre4} = ${nombre3 * nombre4} + ${nombre3} + ${nombre4} = ${resultat2}`);

// --- Test 3 : Appel avec des chaînes de caractères ---
console.log("\nTest 3 - Avec des chaînes de caractères :");
const chaine1 = "Hello";
const chaine2 = "World";
const resultat3 = calculer(chaine1, chaine2);
console.log(`calculer("${chaine1}", "${chaine2}") = ${resultat3}`);
console.log("Explication : Comportement inattendu !");
console.log("- L'opérateur + avec des chaînes fait de la concaténation");
console.log("- L'opérateur * avec des chaînes donne NaN (Not a Number)");
console.log("- NaN + n'importe quoi donne toujours NaN");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Comprendre le comportement avec des chaînes
//
// Avec des nombres (exemple : a=5, b=3) :
// - a * b = 5 * 3 = 15
// - a + b = 5 + 3 = 8
// - Résultat : 15 + 8 = 23
//
// Avec des chaînes (exemple : a="Hello", b="World") :
// - "Hello" * "World" = NaN (on ne peut pas multiplier des chaînes)
// - NaN + "Hello" = NaN (toute opération avec NaN donne NaN)
// - NaN + "World" = NaN
// - Résultat : NaN
//
// L'opérateur + a deux comportements différents :
// - Avec des nombres : addition mathématique
// - Avec des chaînes : concaténation
// - Mixte (nombre + chaîne) : conversion en chaîne puis concaténation
//
// Exemple avec un mélange :
// 5 + "3" = "53" (concaténation)
// 5 * "3" = 15 (JavaScript convertit "3" en nombre pour la multiplication)
//
// Pour sécuriser la fonction, on pourrait vérifier le type :
// function calculerSecurise(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Erreur : les paramètres doivent être des nombres";
//     }
//     return a * b + a + b;
// }
