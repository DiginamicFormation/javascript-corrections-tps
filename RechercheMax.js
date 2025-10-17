// ===== EXERCICE RechercheMax =====
// Description : Trouver la valeur maximale dans un tableau
// Concepts : boucles, comparaison, algorithme de recherche, variable temporaire

console.log("=== EXERCICE RechercheMax ===\n");

// --- Données ---
const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Tableau :", array);
console.log("Nombre d'éléments :", array.length);
console.log("");

// --- Traitement ---
// Algorithme classique de recherche du maximum :
// 1. On initialise max avec le premier élément du tableau
// 2. On parcourt le reste du tableau en comparant chaque élément avec max
// 3. Si on trouve un élément plus grand, il devient le nouveau max

let max = array[0]; // On part du principe que le premier élément est le max
console.log("Initialisation : max =", max);
console.log("Parcours du tableau...\n");

// On commence à l'index 1 car on a déjà pris array[0] comme référence
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        console.log("  Nouveau max trouvé :", array[i], "(ancien max :", max + ")");
        max = array[i]; // On met à jour le maximum
    }
}

// --- Résultat ---
console.log("");
console.log("=".repeat(40));
console.log("Le maximum du tableau est :", max);
console.log("=".repeat(40));

console.log("\n" + "=".repeat(40));

// Note pédagogique : Pourquoi commencer à i = 1 ?
// En initialisant max avec array[0], on a déjà "traité" le premier élément.
// Commencer à i = 1 évite une comparaison inutile (array[0] > array[0]).
// Alternative : initialiser max à -Infinity et commencer à i = 0.

// Méthode moderne avec Math.max() :
//    const max = Math.max(...array);
//    (Le ... s'appelle le "spread operator", il "étale" le tableau)
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer l'algorithme de recherche !
// Math.max() est ce que vous utiliserez dans vos futurs projets professionnels,
// mais ici on veut comprendre comment fonctionne la recherche du maximum avec
// une boucle et des comparaisons.
