// ===== EXERCICE AffichagePartiel =====
// Description : Afficher des éléments d'un tableau selon 4 filtres différents
// Concepts : boucles, conditions, modulo, distinction valeur/index

console.log("=== EXERCICE AffichagePartiel ===\n");

// --- Données ---
const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Tableau :", array);
console.log("Nombre d'éléments :", array.length);
console.log("\n" + "=".repeat(40) + "\n");

// --- Filtre 1 : Éléments supérieurs à 3 ---
console.log("1. Éléments supérieurs à 3 :");
for (let i = 0; i < array.length; i++) {
    // On teste la VALEUR de l'élément
    if (array[i] > 3) {
        console.log(array[i]);
    }
}

console.log("\n" + "=".repeat(40) + "\n");

// --- Filtre 2 : Éléments pairs ---
console.log("2. Éléments pairs (valeurs paires) :");
for (let i = 0; i < array.length; i++) {
    // On teste si la VALEUR est paire (divisible par 2)
    // ⚠️ Attention : "éléments pairs" = valeurs paires, pas "éléments aux index pairs"
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

console.log("\n" + "=".repeat(40) + "\n");

// --- Filtre 3 : Éléments aux index pairs ---
console.log("3. Éléments aux index pairs (positions 0, 2, 4...) :");
for (let i = 0; i < array.length; i++) {
    // On teste si l'INDEX (la position) est pair
    // ⚠️ Distinction importante : ici on teste i (l'index), pas array[i] (la valeur)
    if (i % 2 === 0) {
        console.log("Index", i, "→", array[i]);
    }
}

console.log("\n" + "=".repeat(40) + "\n");

// --- Filtre 4 : Éléments impairs ---
console.log("4. Éléments impairs (valeurs impaires) :");
for (let i = 0; i < array.length; i++) {
    // On teste si la VALEUR est impaire (reste 1 lors de la division par 2)
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Distinctions importantes
//
// 1. VALEUR vs INDEX :
//    - array[i] = la valeur contenue dans le tableau
//    - i = la position (index) dans le tableau
//
// 2. PAIR/IMPAIR avec le modulo (%) :
//    - nombre % 2 === 0 → nombre pair
//    - nombre % 2 !== 0 → nombre impair (ou nombre % 2 === 1)
//
// 3. Méthode moderne avec filter() :
//    const superieursA3 = array.filter(element => element > 3);
//    const pairs = array.filter(element => element % 2 === 0);
//    const indexPairs = array.filter((element, index) => index % 2 === 0);
//    const impairs = array.filter(element => element % 2 !== 0);
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles et conditions !
// Les méthodes comme filter() sont ce que vous utiliserez dans vos futurs projets
// professionnels, mais ici on veut maîtriser l'algorithme de base avec des boucles
// for et des conditions if.
