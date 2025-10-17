// ===== EXERCICE SommeDeTableaux =====
// Description : Additionner deux tableaux de même taille, élément par élément
// Concepts : boucles, manipulation de tableaux, opérations parallèles
// Note : Cet exercice suppose que les deux tableaux ont la MÊME longueur

console.log("=== EXERCICE SommeDeTableaux ===\n");

// --- Données ---
const array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
const array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

console.log("Tableau 1 :", array1);
console.log("Tableau 2 :", array2);
console.log("");
console.log("Longueur tableau 1 :", array1.length);
console.log("Longueur tableau 2 :", array2.length);
console.log("");

// --- Traitement ---
// On crée un nouveau tableau qui contiendra la somme élément par élément
// Principe : arraySomme[i] = array1[i] + array2[i]
// Exemple : si array1[0] = 1 et array2[0] = -1, alors arraySomme[0] = 0

const arraySomme = [];

// On parcourt les tableaux en utilisant la longueur de array1
// (les deux tableaux ont la même taille dans cet exercice)
for (let i = 0; i < array1.length; i++) {
    arraySomme[i] = array1[i] + array2[i];
}

// --- Résultat ---
console.log("Tableau résultat (somme) :", arraySomme);
console.log("");

// Affichage détaillé pour mieux comprendre
console.log("Détail de quelques additions :");
console.log(`  ${array1[0]} + ${array2[0]} = ${arraySomme[0]}`);
console.log(`  ${array1[1]} + ${array2[1]} = ${arraySomme[1]}`);
console.log(`  ${array1[2]} + ${array2[2]} = ${arraySomme[2]}`);
console.log("  ...");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Tableaux de tailles différentes
//
// ⚠️ IMPORTANT : Cet exercice suppose que les deux tableaux ont la MÊME longueur.
// Si les tableaux avaient des tailles différentes, le code actuel pourrait causer
// des problèmes (éléments undefined dans le résultat).
//
// L'exercice suivant "SommeDeTableauxDiff" traite ce cas !

// Méthode moderne avec map() :
//    const arraySomme = array1.map((valeur, index) => valeur + array2[index]);
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles !
// La méthode map() est ce que vous utiliserez dans vos futurs projets professionnels,
// mais ici on veut comprendre comment parcourir et combiner deux tableaux
// simultanément avec une boucle for.
