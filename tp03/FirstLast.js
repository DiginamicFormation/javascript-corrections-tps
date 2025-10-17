// ===== EXERCICE FirstLast =====
// Description : Vérifier si le premier ET le dernier élément ont la même valeur
// Concepts : conditions, accès aux éléments, booléens
// Contrainte : Minimum de lignes de code

console.log("=== EXERCICE FirstLast ===\n");

// --- Données ---
// Testons avec différents tableaux
const tableau1 = [5, 2, 8, 5];
const tableau2 = [1, 2, 5, 3];
const tableau3 = [7];
const tableau4 = [3, 1, 3];
const tableau5 = [];

console.log("Test 1 - Tableau :", tableau1);
console.log("Test 2 - Tableau :", tableau2);
console.log("Test 3 - Tableau :", tableau3);
console.log("Test 4 - Tableau :", tableau4);
console.log("Test 5 - Tableau (vide) :", tableau5);
console.log("");

// --- Traitement ---
// La valeur booléenne vaut true si :
// - le tableau est de longueur >= 1 ET
// - le premier et le dernier élément ont la même valeur

// Version optimisée (minimum de lignes)
const resultat1 = tableau1.length >= 1 && tableau1[0] === tableau1[tableau1.length - 1];
const resultat2 = tableau2.length >= 1 && tableau2[0] === tableau2[tableau2.length - 1];
const resultat3 = tableau3.length >= 1 && tableau3[0] === tableau3[tableau3.length - 1];
const resultat4 = tableau4.length >= 1 && tableau4[0] === tableau4[tableau4.length - 1];
const resultat5 = tableau5.length >= 1 && tableau5[0] === tableau5[tableau5.length - 1];

// --- Affichage ---
console.log("Résultats :");
console.log("Test 1 [5, 2, 8, 5] :", resultat1, "(true attendu - 5 === 5)");
console.log("Test 2 [1, 2, 5, 3] :", resultat2, "(false attendu - 1 !== 3)");
console.log("Test 3 [7] :", resultat3, "(true attendu - seul élément)");
console.log("Test 4 [3, 1, 3] :", resultat4, "(true attendu - 3 === 3)");
console.log("Test 5 [] :", resultat5, "(false attendu - tableau vide)");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Explication de la condition
//
// tableau.length >= 1 : vérifie qu'il y a au moins un élément
// tableau[0] : premier élément du tableau
// tableau[tableau.length - 1] : dernier élément du tableau
//
// L'opérateur === compare les deux valeurs
// L'opérateur && (ET) s'assure que le tableau n'est pas vide AVANT de comparer
//
// Cas particulier : Si le tableau n'a qu'un seul élément, premier = dernier
// donc la condition est true (un élément est toujours égal à lui-même)
//
// Version encore plus courte possible :
// const resultat = tableau.length > 0 && tableau[0] === tableau[tableau.length - 1];
