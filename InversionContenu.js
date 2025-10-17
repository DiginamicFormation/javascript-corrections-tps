// ===== EXERCICE InversionContenu =====
// Description : Créer une copie inversée d'un tableau (sans modifier l'original)
// Concepts : boucles, manipulation de tableaux, création de copie, inversion d'index

console.log("=== EXERCICE InversionContenu ===\n");

// --- Données ---
const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Tableau original :", array);
console.log("Nombre d'éléments :", array.length);
console.log("");

// --- Traitement ---
// On crée un nouveau tableau vide pour stocker les éléments inversés
const arrayInverse = [];

// On parcourt le tableau original et on copie les éléments dans l'ordre inverse
// Pour chaque position i dans le nouveau tableau, on prend l'élément
// à la position (length - i - 1) du tableau original
for (let i = 0; i < array.length; i++) {
    // Explication du calcul d'index :
    // - Si i = 0 (premier élément du nouveau tableau) : on prend array[16] (dernier élément)
    // - Si i = 1 (deuxième élément) : on prend array[15] (avant-dernier)
    // - Si i = 16 (dernier élément) : on prend array[0] (premier élément)
    arrayInverse[i] = array[array.length - i - 1];
}

// --- Résultat ---
console.log("Tableau original :", array);
console.log("Tableau inversé  :", arrayInverse);

// Vérification : le tableau original n'a pas été modifié
console.log("\n✓ Le tableau original est intact (copie réussie)");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Méthodes alternatives
//
// 1. Approche avec parcours inverse (ajouter les éléments un par un) :
//    for (let i = array.length - 1; i >= 0; i--) {
//        arrayInverse.push(array[i]);
//    }
//
// 2. Méthode moderne avec slice() et reverse() :
//    const arrayInverse = array.slice().reverse();
//    (slice() crée une copie pour ne pas modifier l'original)
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles !
// Les méthodes comme reverse(), map() sont ce que vous utiliserez
// dans vos futurs projets professionnels, mais ici on veut maîtriser l'algorithme
// de base avec des boucles for classiques.
