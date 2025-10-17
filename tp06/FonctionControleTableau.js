// ===== EXERCICE FonctionControleTableau - VERSION ROBUSTE (TP6) =====
// Description : Vérifier qu'un tableau contient uniquement des nombres
// Concepts : validation de tableau, messages d'erreur détaillés
// Nouveauté TP6 : Renvoyer un message d'erreur si un élément n'est pas un nombre

console.log("=== EXERCICE FonctionControleTableau - Version Robuste ===\n");

// --- Définition de la fonction ---
// Cette fonction vérifie si tous les éléments d'un tableau sont des nombres
// Retourne un message d'erreur détaillé si un élément n'est pas un nombre
function contientQueDesNombres(tableau) {
    // On parcourt tous les éléments du tableau
    for (let i = 0; i < tableau.length; i++) {
        // Si on trouve un élément qui n'est pas un nombre
        if (typeof tableau[i] !== 'number') {
            // Retourner un message d'erreur détaillé
            return `Erreur : l'élément à l'index ${i} n'est pas un nombre (type: ${typeof tableau[i]}, valeur: ${tableau[i]})`;
        }
    }
    // Si on arrive ici, tous les éléments sont des nombres
    return true;
}

// --- Test 1 : Tableau contenant uniquement des nombres ---
console.log("Test 1 - Tableau contenant uniquement des nombres :");
const tableau1 = [1, 5, -3, 0, 8, 7, 4, -2];
console.log("Tableau :", tableau1);
const resultat1 = contientQueDesNombres(tableau1);
if (resultat1 === true) {
    console.log("✓ Résultat : true (tous les éléments sont des nombres)");
} else {
    console.log(`✗ ${resultat1}`);
}

// --- Test 2 : Tableau contenant des nombres et une chaîne ---
console.log("\nTest 2 - Tableau contenant des nombres et une chaîne :");
const tableau2 = [1, 5, "texte", 0, 8, 7];
console.log("Tableau :", tableau2);
const resultat2 = contientQueDesNombres(tableau2);
if (resultat2 === true) {
    console.log("✓ Résultat : true");
} else {
    console.log(`✗ ${resultat2}`);
}

// --- Test 3 : Tableau vide ---
console.log("\nTest 3 - Tableau vide :");
const tableau3 = [];
console.log("Tableau :", tableau3);
const resultat3 = contientQueDesNombres(tableau3);
if (resultat3 === true) {
    console.log("✓ Résultat : true (aucun élément qui n'est pas un nombre)");
} else {
    console.log(`✗ ${resultat3}`);
}

// --- Test 4 : Tableau avec plusieurs types différents ---
console.log("\nTest 4 - Tableau avec plusieurs types :");
const tableau4 = [1, "texte", true, null, undefined, {}, []];
console.log("Tableau :", tableau4);
const resultat4 = contientQueDesNombres(tableau4);
if (resultat4 === true) {
    console.log("✓ Résultat : true");
} else {
    console.log(`✗ ${resultat4}`);
}

// --- Test 5 : Tableau avec NaN ---
console.log("\nTest 5 - Tableau avec NaN :");
const tableau5 = [1, 5, NaN, 8];
console.log("Tableau :", tableau5);
const resultat5 = contientQueDesNombres(tableau5);
if (resultat5 === true) {
    console.log("✓ Résultat : true");
    console.log("Note : NaN est de type 'number' en JavaScript (même si ce n'est pas un nombre valide)");
} else {
    console.log(`✗ ${resultat5}`);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Messages d'erreur détaillés
//
// NOUVEAUTÉ TP6 : Messages d'erreur informatifs
//
// Différence TP5 vs TP6 :
//
// TP5 : Message simple
// function contientQueDesNombres(tableau) {
//     for (let i = 0; i < tableau.length; i++) {
//         if (typeof tableau[i] !== 'number') {
//             return false;
//         }
//     }
//     return true;
// }
// Résultat : false (on ne sait pas pourquoi ni où)
//
// TP6 : Message détaillé
// function contientQueDesNombres(tableau) {
//     for (let i = 0; i < tableau.length; i++) {
//         if (typeof tableau[i] !== 'number') {
//             return `Erreur : l'élément à l'index ${i} n'est pas un nombre`;
//         }
//     }
//     return true;
// }
// Résultat : "Erreur : l'élément à l'index 2 n'est pas un nombre"
//
// Bonnes pratiques pour les messages d'erreur :
// 1. Préciser où se trouve le problème (index, ligne, etc.)
// 2. Indiquer ce qui est attendu
// 3. Montrer ce qui a été reçu
// 4. Suggérer une solution si possible
//
// Exemple de message complet :
// "Erreur : l'élément à l'index 2 n'est pas un nombre (type: string, valeur: 'texte')"
//
// Avantages :
// - Facilite le débogage
// - Gain de temps pour trouver l'erreur
// - Meilleure expérience développeur
// - Code plus professionnel
//
// Cas particulier : NaN (Not a Number)
// - typeof NaN === 'number' (quirk JavaScript)
// - Pour exclure NaN, utiliser :
//   if (typeof tableau[i] !== 'number' || isNaN(tableau[i])) {
//       return "Erreur : élément invalide";
//   }
//
// Variante avec throw :
// function contientQueDesNombres(tableau) {
//     for (let i = 0; i < tableau.length; i++) {
//         if (typeof tableau[i] !== 'number') {
//             throw new TypeError(
//                 `L'élément à l'index ${i} doit être un nombre (reçu: ${typeof tableau[i]})`
//             );
//         }
//     }
//     return true;
// }
//
// Variante avec méthode moderne :
// function contientQueDesNombres(tableau) {
//     const index = tableau.findIndex(el => typeof el !== 'number');
//     if (index !== -1) {
//         return `Erreur : l'élément à l'index ${index} n'est pas un nombre`;
//     }
//     return true;
// }
