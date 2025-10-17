// ===== EXERCICE AffichageInverse =====
// Description : Afficher un tableau dans l'ordre normal puis dans l'ordre inverse
// Concepts : boucles for, parcours de tableau, index, décrémentation

console.log("=== EXERCICE AffichageInverse ===\n");

// --- Données ---
const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Tableau de départ :", array);
console.log("Nombre d'éléments :", array.length);
console.log("");

// --- Affichage dans l'ordre normal ---
console.log("Affichage dans l'ordre normal :");
// On parcourt le tableau du premier élément (index 0) au dernier
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(""); // Ligne vide pour la lisibilité

// --- Affichage dans l'ordre inverse ---
console.log("Affichage dans l'ordre inverse :");
// On parcourt le tableau du dernier élément au premier
// On commence à array.length - 1 (dernier index) et on descend jusqu'à 0
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Méthodes alternatives
// Méthode moderne avec reverse() :
//   array.slice().reverse().forEach(e => console.log(e))
//   (Attention : reverse() modifie le tableau d'origine, d'où le slice() pour copier)
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles !
// Les méthodes comme reverse(), forEach(), map() sont ce que vous utiliserez
// dans vos futurs projets professionnels, mais ici on veut maîtriser l'algorithme
// de base avec des boucles for classiques.
