// ===== EXERCICE FonctionCalcul - VERSION ROBUSTE (TP6) =====
// Description : Calculer a * b + a + b avec validation des paramètres
// Concepts : fonction avec plusieurs paramètres, validation de type
// Nouveauté TP6 : Validation que les paramètres sont bien des nombres

console.log("=== EXERCICE FonctionCalcul - Version Robuste ===\n");

// --- Définition de la fonction ---
// Cette fonction vérifie que les deux paramètres sont des nombres
function calculer(a, b) {
    // Vérification : Les paramètres sont-ils des nombres ?
    if (typeof a !== 'number') {
        return `Erreur : le premier paramètre doit être un nombre (reçu: ${typeof a})`;
    }
    if (typeof b !== 'number') {
        return `Erreur : le deuxième paramètre doit être un nombre (reçu: ${typeof b})`;
    }

    return a * b + a + b;
}

// --- Test 1 : Appel avec des nombres valides ---
console.log("Test 1 - Avec des nombres :");
const nombre1 = 5;
const nombre2 = 3;
const resultat1 = calculer(nombre1, nombre2);
if (typeof resultat1 === 'string') {
    console.log(resultat1); // Message d'erreur
} else {
    console.log(`calculer(${nombre1}, ${nombre2}) = ${resultat1}`);
    console.log(`Détail : ${nombre1} * ${nombre2} + ${nombre1} + ${nombre2} = ${nombre1 * nombre2} + ${nombre1} + ${nombre2} = ${resultat1}`);
}

// --- Test 2 : Appel avec d'autres nombres ---
console.log("\nTest 2 - Avec d'autres nombres :");
const nombre3 = 10;
const nombre4 = 2;
const resultat2 = calculer(nombre3, nombre4);
if (typeof resultat2 === 'string') {
    console.log(resultat2);
} else {
    console.log(`calculer(${nombre3}, ${nombre4}) = ${resultat2}`);
    console.log(`Détail : ${nombre3} * ${nombre4} + ${nombre3} + ${nombre4} = ${nombre3 * nombre4} + ${nombre3} + ${nombre4} = ${resultat2}`);
}

// --- Test 3 : Appel avec des chaînes de caractères ---
console.log("\nTest 3 - Avec des chaînes de caractères :");
const chaine1 = "Hello";
const chaine2 = "World";
const resultat3 = calculer(chaine1, chaine2);
if (typeof resultat3 === 'string') {
    console.log(resultat3);
    console.log("Explication : La fonction a détecté que les paramètres ne sont pas des nombres");
} else {
    console.log(`calculer("${chaine1}", "${chaine2}") = ${resultat3}`);
}

// --- Test 4 : Appel avec un nombre et une chaîne ---
console.log("\nTest 4 - Avec un nombre et une chaîne :");
const resultat4 = calculer(5, "texte");
if (typeof resultat4 === 'string') {
    console.log(resultat4);
    console.log("Explication : Le deuxième paramètre n'est pas un nombre");
} else {
    console.log(`Résultat : ${resultat4}`);
}

// --- Test 5 : Appel avec des booléens ---
console.log("\nTest 5 - Avec des booléens :");
const resultat5 = calculer(true, false);
if (typeof resultat5 === 'string') {
    console.log(resultat5);
    console.log("Explication : Les booléens ne sont pas acceptés");
} else {
    console.log(`Résultat : ${resultat5}`);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Validation de plusieurs paramètres
//
// NOUVEAUTÉ TP6 : Valider tous les paramètres
//
// Bonnes pratiques de validation :
// 1. Vérifier chaque paramètre individuellement
// 2. Donner des messages d'erreur spécifiques
// 3. Indiquer quel paramètre pose problème
// 4. Préciser le type attendu et le type reçu
//
// Différence TP5 vs TP6 :
//
// TP5 : Aucune validation
// function calculer(a, b) {
//     return a * b + a + b;
// }
// calculer("Hello", "World") → NaN (comportement inattendu)
//
// TP6 : Validation stricte
// function calculer(a, b) {
//     if (typeof a !== 'number') {
//         return "Erreur : le premier paramètre doit être un nombre";
//     }
//     if (typeof b !== 'number') {
//         return "Erreur : le deuxième paramètre doit être un nombre";
//     }
//     return a * b + a + b;
// }
// calculer("Hello", "World") → Message d'erreur clair
//
// Pourquoi valider ?
// - Éviter des résultats incorrects (NaN)
// - Faciliter le débogage
// - Documenter les types attendus
// - Rendre le code plus robuste
//
// Cas particuliers :
// - NaN est de type 'number' mais invalide
// - Infinity est de type 'number'
// - Pour une validation encore plus stricte :
//   if (typeof a !== 'number' || isNaN(a)) {
//       return "Erreur : le paramètre doit être un nombre valide";
//   }
//
// Variante avec throw (plus stricte) :
// function calculer(a, b) {
//     if (typeof a !== 'number') {
//         throw new TypeError("Le premier paramètre doit être un nombre");
//     }
//     if (typeof b !== 'number') {
//         throw new TypeError("Le deuxième paramètre doit être un nombre");
//     }
//     return a * b + a + b;
// }
//
// Variante optimisée :
// function calculer(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Erreur : les deux paramètres doivent être des nombres";
//     }
//     return a * b + a + b;
// }
//
// Avec JSDoc (documentation) :
// /**
//  * Calcule a * b + a + b
//  * @param {number} a - Premier nombre
//  * @param {number} b - Deuxième nombre
//  * @returns {number|string} Le résultat ou un message d'erreur
//  */
// function calculer(a, b) {
//     // ...
// }
