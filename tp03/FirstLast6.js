// ===== EXERCICE FirstLast6 =====
// Description : Vérifier si le premier OU le dernier élément vaut 6
// Concepts : conditions, accès aux éléments, booléens
// Contrainte : Minimum de lignes de code

console.log("=== EXERCICE FirstLast6 ===\n");

// --- Données ---
// Testons avec différents tableaux
const tableau1 = [6, 2, 5, 3];
const tableau2 = [1, 2, 5, 6];
const tableau3 = [1, 2, 5, 3];
const tableau4 = [6];
const tableau5 = [];

console.log("Test 1 - Tableau :", tableau1);
console.log("Test 2 - Tableau :", tableau2);
console.log("Test 3 - Tableau :", tableau3);
console.log("Test 4 - Tableau :", tableau4);
console.log("Test 5 - Tableau (vide) :", tableau5);
console.log("");

// --- Traitement ---
// La valeur booléenne vaut true si :
// - le tableau a au moins 1 élément ET
// - le premier OU le dernier élément vaut 6

// Version optimisée (minimum de lignes)
const resultat1 = tableau1.length >= 1 && (tableau1[0] === 6 || tableau1[tableau1.length - 1] === 6);
const resultat2 = tableau2.length >= 1 && (tableau2[0] === 6 || tableau2[tableau2.length - 1] === 6);
const resultat3 = tableau3.length >= 1 && (tableau3[0] === 6 || tableau3[tableau3.length - 1] === 6);
const resultat4 = tableau4.length >= 1 && (tableau4[0] === 6 || tableau4[tableau4.length - 1] === 6);
const resultat5 = tableau5.length >= 1 && (tableau5[0] === 6 || tableau5[tableau5.length - 1] === 6);

// --- Affichage ---
console.log("Résultats :");
console.log("Test 1 [6, 2, 5, 3] :", resultat1, "(true attendu - premier = 6)");
console.log("Test 2 [1, 2, 5, 6] :", resultat2, "(true attendu - dernier = 6)");
console.log("Test 3 [1, 2, 5, 3] :", resultat3, "(false attendu - ni premier ni dernier)");
console.log("Test 4 [6] :", resultat4, "(true attendu - seul élément = 6)");
console.log("Test 5 [] :", resultat5, "(false attendu - tableau vide)");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Explication de la condition
//
// tableau.length >= 1 : vérifie qu'il y a au moins un élément
// tableau[0] === 6 : vérifie si le premier élément vaut 6
// tableau[tableau.length - 1] === 6 : vérifie si le dernier élément vaut 6
//
// L'opérateur || (OU) permet de valider si l'une OU l'autre condition est vraie
// L'opérateur && (ET) s'assure que le tableau n'est pas vide AVANT de tester les valeurs
//
// Version encore plus courte possible (car length >= 1 équivaut à length > 0) :
// const resultat = tableau.length > 0 && (tableau[0] === 6 || tableau[tableau.length - 1] === 6);
