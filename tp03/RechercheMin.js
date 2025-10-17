// ===== EXERCICE RechercheMin =====
// Description : Trouver la valeur minimale dans un tableau
// Concepts : boucles, comparaison, algorithme de recherche, variable temporaire

console.log("=== EXERCICE RechercheMin ===\n");

// --- Données ---
const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Tableau :", array);
console.log("Nombre d'éléments :", array.length);
console.log("");

// --- Traitement ---
// Algorithme classique de recherche du minimum :
// 1. On initialise min avec le premier élément du tableau
// 2. On parcourt le reste du tableau en comparant chaque élément avec min
// 3. Si on trouve un élément plus petit, il devient le nouveau min

let min = array[0]; // On part du principe que le premier élément est le min
console.log("Initialisation : min =", min);
console.log("Parcours du tableau...\n");

// On commence à l'index 1 car on a déjà pris array[0] comme référence
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        console.log("  Nouveau min trouvé :", array[i], "(ancien min :", min + ")");
        min = array[i]; // On met à jour le minimum
    }
}

// --- Résultat ---
console.log("");
console.log("=".repeat(40));
console.log("Le minimum du tableau est :", min);
console.log("=".repeat(40));

console.log("\n" + "=".repeat(40));

// Note pédagogique : Pourquoi commencer à i = 1 ?
// En initialisant min avec array[0], on a déjà "traité" le premier élément.
// Commencer à i = 1 évite une comparaison inutile (array[0] < array[0]).
// Alternative : initialiser min à +Infinity et commencer à i = 0.

// Méthode moderne avec Math.min() :
//    const min = Math.min(...array);
//    (Le ... s'appelle le "spread operator", il "étale" le tableau)
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer l'algorithme de recherche !
// Math.min() est ce que vous utiliserez dans vos futurs projets professionnels,
// mais ici on veut comprendre comment fonctionne la recherche du minimum avec
// une boucle et des comparaisons.
