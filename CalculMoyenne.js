// ===== EXERCICE CalculMoyenne =====
// Description : Calculer la moyenne des valeurs d'un tableau
// Concepts : boucles, accumulation, division, calcul statistique

console.log("=== EXERCICE CalculMoyenne ===\n");

// --- Données ---
const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Tableau :", array);
console.log("Nombre d'éléments :", array.length);
console.log("");

// --- Traitement ---
// Algorithme de calcul de moyenne :
// 1. Calculer la somme de tous les éléments
// 2. Diviser cette somme par le nombre d'éléments

// Étape 1 : Calcul de la somme
let somme = 0;

for (let i = 0; i < array.length; i++) {
    somme += array[i]; // On additionne chaque élément à la somme
}

console.log("Somme des éléments :", somme);

// Étape 2 : Calcul de la moyenne
const moyenne = somme / array.length;

// --- Résultat ---
console.log("");
console.log("=".repeat(40));
console.log("Moyenne du tableau :", moyenne);
console.log("=".repeat(40));

console.log("\n" + "=".repeat(40));

// Note pédagogique : Comprendre la moyenne
// La moyenne arithmétique = (somme de tous les éléments) / (nombre d'éléments)
// Exemple : [1, 2, 3] → (1 + 2 + 3) / 3 = 6 / 3 = 2
//
// ⚠️ Attention aux tableaux vides !
// Si array.length === 0, la division par zéro donnerait Infinity.
// Dans un vrai projet, il faudrait vérifier : if (array.length === 0) return 0;

// Méthode moderne avec reduce() :
//    const somme = array.reduce((acc, val) => acc + val, 0);
//    const moyenne = somme / array.length;
//
// Ou en une ligne :
//    const moyenne = array.reduce((acc, val) => acc + val, 0) / array.length;
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles et l'accumulation !
// La méthode reduce() est ce que vous utiliserez dans vos futurs projets professionnels,
// mais ici on veut comprendre comment fonctionne le calcul de moyenne avec une boucle
// for et une variable d'accumulation.
